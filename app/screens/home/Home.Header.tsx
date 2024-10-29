import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import IconLogo from '../../../assets/IconLogo';
import IconPlus from '../../../assets/IconPlus';
import IconSearch from '../../../assets/IconSearch';
import IconNotification from '../../../assets/IconNotification';
import IconDots from '../../../assets/IconDots';
import {useAppContext} from '../../../App';

export default function HomeHeader() {
  const {dispatchUser} = useAppContext();

  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={[styles.headerContainer, styles.rowCenter]}>
      <View style={styles.rowCenter}>
        <IconLogo width={24} />
        <Text style={styles.logoText}>ERIC</Text>
        <Switch
          trackColor={{false: '#E5E7EB', true: '#205095'}}
          thumbColor={'#FFFFFF'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>

      <View style={[styles.rowCenter]}>
        <TouchableOpacity style={[styles.button, styles.iconPlus]}>
          <IconPlus />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <IconSearch />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <IconNotification />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatchUser('')}>
          <IconDots />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconPlus: {backgroundColor: '#F9FAFB', borderRadius: 8},
  button: {marginLeft: 12, padding: 4},
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#205095',
    marginHorizontal: 4,
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  headerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
});
