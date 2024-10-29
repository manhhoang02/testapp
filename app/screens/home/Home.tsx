import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from './Home.Header';
import axios from 'axios';
import {FeedItemType} from '../../type';
import FeedItem from '../../components/FeedItem';
import {FlashList} from '@shopify/flash-list';

let page = 1;

export default function Home() {
  const navigation = useNavigation();

  const currentData = useRef<FeedItemType[]>([]);
  const refOnEndReachedCalled = useRef(true);

  const [data, setData] = useState<FeedItemType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [noLoadMore, setNoLoadMore] = useState(false);

  const getData = useCallback(() => {
    axios
      .get('https://rickandmortyapi.com/api/character', {
        params: {page, limit: 10},
      })
      .then(res => {
        if (res.data) {
          if (page === 1) {
            currentData.current = res.data.results;
            setData(currentData.current);
          } else {
            currentData.current = [...currentData.current, ...res.data.results];
            setData(currentData.current);
          }
          setRefreshing(false);
          setNoLoadMore(false);
        }
      })
      .catch(err => {
        console.log(err);
        setRefreshing(false);
        setNoLoadMore(false);
      });
  }, []);

  useEffect(() => {
    page = 1;
    currentData.current = [];
    getData();
  }, [getData]);

  const onRefresh = () => {
    refOnEndReachedCalled.current = false;
    page = 1;
    currentData.current = [];
    setRefreshing(true);
    getData();
  };

  const onEndReached = () => {
    if (!refOnEndReachedCalled.current) {
      if (!noLoadMore) {
        page++;
        setNoLoadMore(true);
        getData();
      }
      refOnEndReachedCalled.current = true;
    }
  };

  const renderItem = ({item}: {item: FeedItemType}) => {
    return <FeedItem item={item} />;
  };

  const header = useCallback(() => <HomeHeader />, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      header,
    });
  }, [header, navigation]);

  return (
    <View style={styles.container}>
      <FlashList
        estimatedItemSize={200}
        data={data}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
        keyExtractor={item => item.id.toString()}
        style={styles.feedsContainer}
        contentContainerStyle={{}}
        onMomentumScrollBegin={() => {
          refOnEndReachedCalled.current = false;
        }}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          noLoadMore ? (
            <View style={{}}>
              <ActivityIndicator />
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  feedsContainer: {flexGrow: 1},
  container: {flex: 1, marginTop: 8},
  backgroundVideo: {
    width: '100%',
    height: 500,
  },
});
