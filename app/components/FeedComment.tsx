import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IconEmoji from '../../assets/IconEmoji';
import IconImage from '../../assets/IconImage';
import IconClose from '../../assets/IconClose';

interface Props {
  isReplying?: boolean;
}

export default function FeedComment(props: Props) {
  const [comment, setComment] = useState('');
  return (
    <View style={styles.feedCommentContainer}>
      {props.isReplying && (
        <View style={styles.replyContainer}>
          <Text style={styles.replyText}>Đang trả lời Nguyễn Công Minh...</Text>

          <IconClose />
        </View>
      )}

      <View style={styles.commentInputContainer}>
        <Image
          source={{uri: 'https://i.pravatar.cc/300'}}
          style={styles.commentAvatar}
          resizeMode="cover"
        />

        <TextInput
          placeholder="Nhập bình luận"
          placeholderTextColor="#9DA4AE"
          style={styles.commentInput}
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity style={styles.commentIconButton}>
          <IconEmoji />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.commentIconButton, styles.imageIcon]}>
          <IconImage />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  replyText: {fontSize: 11, color: '#D2D6DB'},
  replyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: '#0D121C',
  },
  feedCommentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  commentInputContainer: {
    paddingTop: 8,

    flexDirection: 'row',
    alignItems: 'center',
  },
  commentAvatar: {height: 32, width: 32, borderRadius: 16},
  commentInput: {
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFB',
    fontWeight: '500',
    height: 40,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 12,
  },
  imageIcon: {marginLeft: 4},
  commentIconButton: {padding: 6, backgroundColor: '#F9FAFB', borderRadius: 20},
});
