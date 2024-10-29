import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FeedItemType} from '../type';
import AttachmentList from './AttachmentList';
import IconHeart from '../../assets/IconHeart';
import IconMessage from '../../assets/IconMessage';
import FeedComment from './FeedComment';
import FeedHeader from './FeedHeader';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamsStack} from '../navigation/MainNavigation';

interface Props {
  item: FeedItemType;
  isDetail?: boolean;
}

export default function FeedItem({item, isDetail}: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamsStack>>();

  const [liked, setLiked] = useState(false);

  const onLikePress = () => setLiked(!liked);

  const onAttachmentPress = () => navigation.navigate('FeedDetail', {item});
  return (
    <View style={styles.feedItem}>
      {!isDetail && <FeedHeader item={item} />}

      <View style={styles.actionsContainer}>
        {item.title && <Text style={styles.desc}>{item.title}</Text>}

        <AttachmentList
          attachments={item.attachment}
          onAttachmentPress={onAttachmentPress}
        />

        {isDetail && (
          <>
            <Text style={styles.viewText}>
              {formatNumber(item.views)} lượt xem
            </Text>

            <Text style={styles.viewText}>
              {formatNumber(item.count_like)} thích •{' '}
              {formatNumber(item.count_comment)} bình luận •{' '}
              {formatNumber(item.count_share)} chia sẻ
            </Text>
          </>
        )}

        <View style={styles.likeContainer}>
          <TouchableOpacity onPress={onLikePress}>
            <IconHeart active={liked} />
          </TouchableOpacity>

          <Text style={styles.likeText}>{formatNumber(item.likes)}</Text>

          <TouchableOpacity style={styles.messageIcon}>
            <IconMessage />
          </TouchableOpacity>

          <Text style={styles.likeText}>
            {formatNumber(item.count_comment)}
          </Text>
        </View>
      </View>

      {!isDetail && <FeedComment />}
    </View>
  );
}

export const formatNumber = (num: number) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K';
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num < 900) {
    return num;
  }
};

const styles = StyleSheet.create({
  actionsContainer: {paddingHorizontal: 16, marginBottom: 8, marginTop: 12},
  messageIcon: {marginLeft: 40},
  viewText: {color: '#71717A', fontSize: 12, marginBottom: 8},
  likeText: {
    color: '#4D5761',
    marginLeft: 4,
  },
  likeContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  desc: {fontSize: 16, lineHeight: 24, marginVertical: 8},
  feedItem: {backgroundColor: '#FFF', marginBottom: 8},
});
