import React, {useRef} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import {useHomeStore} from '../store/homeStore';
import {useIsFocused} from '@react-navigation/native';

export default function AttachmentList({
  attachments,
  onAttachmentPress,
}: {
  attachments: Attachment[];
  onAttachmentPress?: () => void;
}) {
  const videoRef = useRef<VideoRef>(null);
  const currentFeedId = useHomeStore(state => state.currentFeedId);
  const isFocused = useIsFocused();

  const renderAttachment = (attachment: Attachment, index: number) => {
    if (attachment.app === 'videos') {
      return (
        <Video
          key={`video-${attachment.id}-${Math.random() + index}`}
          source={{uri: attachment.link}}
          paused={currentFeedId !== attachment.id || !isFocused}
          repeat={currentFeedId === attachment.id}
          ref={videoRef}
          style={styles.backgroundVideo}
          resizeMode="cover"
        />
      );
    } else if (attachment.app === 'images') {
      return (
        <Image
          key={`image-${attachment.id}-index-${index}`}
          source={{uri: attachment.link}}
          style={styles.image}
        />
      );
    }
    return null;
  };

  const renderAttachments = () => {
    switch (attachments.length) {
      case 1:
        return renderAttachment(attachments[0], 0);
      // return (
      //   <View style={styles.fullSizeAttachment}>
      //     {renderAttachment(attachments[0])}
      //   </View>
      // );
      case 2:
        return (
          <View style={styles.row}>
            {attachments.map((attachment, index) => (
              <View key={index} style={styles.halfSizeAttachment}>
                {renderAttachment(attachment, index)}
              </View>
            ))}
          </View>
        );
      case 3:
        return (
          <View>
            <View style={styles.fullSizeAttachment}>
              {renderAttachment(attachments[0], 0)}
            </View>
            <View style={styles.row}>
              {attachments.slice(1).map((attachment, index) => (
                <View key={index} style={styles.halfSizeAttachment}>
                  {renderAttachment(attachment, index)}
                </View>
              ))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Pressable style={styles.container} onPress={onAttachmentPress}>
      {renderAttachments()}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fullSizeAttachment: {height: 550, width: '100%'},
  halfSizeAttachment: {height: 230, width: '50%'},
  container: {
    width: '100%',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  backgroundVideo: {
    width: '100%',
    height: 500,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
