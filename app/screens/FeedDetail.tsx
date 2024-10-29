import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import FeedHeader from '../components/FeedHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsStack} from '../navigation/MainNavigation';
import FeedItem from '../components/FeedItem';
import FeedComment from '../components/FeedComment';

export default function FeedDetail({
  route,
  navigation,
}: NativeStackScreenProps<ParamsStack, 'FeedDetail'>) {
  const {item} = route.params;

  const header = React.useCallback(
    () => <FeedHeader isDetail item={item} />,
    [item],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header,
    });
  }, [header, navigation]);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <FeedItem item={item} isDetail />
      </ScrollView>

      <FeedComment />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  scroll: {flexGrow: 1, paddingTop: 8},
});
