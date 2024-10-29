import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconOption from '../../assets/IconOption';
import IconVerified from '../../assets/IconVerified';
import {FeedItemType} from '../type';
import IconArrowLeft from '../../assets/IconArrowLeft';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: FeedItemType;
  isDetail?: boolean;
}

export default function FeedHeader({item, isDetail}: Props) {
  const {goBack} = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {isDetail && (
        <TouchableOpacity onPress={goBack} style={styles.backIcon}>
          <IconArrowLeft />
        </TouchableOpacity>
      )}

      <Image
        source={{
          uri: item.image,
        }}
        style={styles.feedAvatar}
      />
      <View style={styles.flex}>
        <View style={styles.fullnameContainer}>
          <Text style={styles.fullname}>{item.name}</Text>
          <IconVerified />
        </View>
        <Text style={styles.usernameText}>
          @{item.species} • {new Date(item.created).toUTCString()}
        </Text>
      </View>

      <IconOption />
    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {marginRight: 8},
  feedAvatar: {width: 40, height: 40, borderRadius: 20, marginRight: 8},
  headerContainer: {flexDirection: 'row', alignItems: 'center', padding: 16},
  flex: {flex: 1},
  fullname: {fontSize: 18, fontWeight: '500', marginRight: 8},
  fullnameContainer: {flexDirection: 'row', alignItems: 'center'},
  usernameText: {color: '#A3A3A3', fontSize: 12},
});
