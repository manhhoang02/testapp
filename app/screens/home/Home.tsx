import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
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
import {useHomeStore} from '../../store/homeStore';

let page = 1;

export default function Home() {
  const navigation = useNavigation();
  const setCurrentFeedIndex = useHomeStore(state => state.setCurrentFeedId);

  const currentData = useRef<FeedItemType[]>([]);

  const [data, setData] = useState<FeedItemType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    page = 1;
    getData();
    setCurrentFeedIndex(data[0].attachment[0].id);
  };

  const onEndReached = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      page++;
      // getData();
    }
  };

  const getData = async () => {
    await axios
      .get(
        'https://api.mockfly.dev/mocks/c9b5516e-67a2-4b90-8795-4656e6e3a410/video',
        {params: {page, limit: 10}},
      )
      .then(res => {
        if (res.data) {
          const _data: FeedItemType[] = res.data.data;
          // setData(_data);
          if (page === 1) {
            setData(_data);
            currentData.current = _data;
          } else {
            setData(prevData => {
              const newData = [...prevData, ..._data];
              currentData.current = newData;
              return newData;
            });
          }
          setRefreshing(false);
          setLoadingMore(false);
        }
      })
      .catch(err => {
        console.log(err);
        setRefreshing(false);
        setLoadingMore(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}: {item: FeedItemType}) => {
    return <FeedItem item={item} />;
  };

  const header = useCallback(() => <HomeHeader />, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      header,
    });
  }, [header, navigation]);

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 60,
    minimumViewTime: 300,
  });

  const onViewableItemsChanged = useCallback(
    (info: {
      viewableItems: ViewToken<FeedItemType>[];
      changed: ViewToken<FeedItemType>[];
    }) => {
      const first = info.viewableItems[0]?.item.attachment[0].id;
      setCurrentFeedIndex(first);
    },
    [setCurrentFeedIndex],
  );

  console.log(currentData.current.length);

  return (
    <View style={styles.container}>
      <FlatList
        // data={currentData.current}
        data={data}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.feedsContainer}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loadingMore ? (
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
