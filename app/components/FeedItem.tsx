import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FeedItemType} from '../type';
import IconHeart from '../../assets/IconHeart';
import IconMessage from '../../assets/IconMessage';
import FeedComment from './FeedComment';
import FeedHeader from './FeedHeader';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamsStack} from '../navigation/params';

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
        <Text style={styles.desc}>{item.origin.name}</Text>

        <TouchableWithoutFeedback onPress={onAttachmentPress}>
          <Image source={{uri: item.image}} style={styles.feedImage} />
        </TouchableWithoutFeedback>

        {isDetail && (
          <>
            <Text style={styles.viewText}>0 lượt xem</Text>

            <Text style={styles.viewText}>
              0 thích • 0 bình luận • 0 chia sẻ
            </Text>
          </>
        )}

        <View style={styles.likeContainer}>
          <TouchableOpacity onPress={onLikePress}>
            <IconHeart active={liked} />
          </TouchableOpacity>

          <Text style={styles.likeText}>0</Text>

          <TouchableOpacity style={styles.messageIcon}>
            <IconMessage />
          </TouchableOpacity>

          <Text style={styles.likeText}>0</Text>
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
  feedImage: {height: 500, width: '100%', borderRadius: 8},
  actionsContainer: {paddingHorizontal: 16, marginVertical: 8},
  messageIcon: {marginLeft: 40},
  viewText: {color: '#71717A', fontSize: 12, marginTop: 8},
  likeText: {
    color: '#4D5761',
    marginLeft: 4,
  },
  likeContainer: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  desc: {fontSize: 16, lineHeight: 24, marginBottom: 8},
  feedItem: {backgroundColor: '#FFF', marginBottom: 8},
});
