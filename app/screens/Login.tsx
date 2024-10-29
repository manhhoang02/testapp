import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import IconLogo from '../../assets/IconLogo';
import IconCheckbox from '../../assets/IconCheckbox';
import IconFacebook from '../../assets/IconFacebook';
import IconGoogle from '../../assets/IconGoogle';
import IconApple from '../../assets/IconApple';
import IconTelegram from '../../assets/IconTelegram';
import IconWhatsApp from '../../assets/IconWhatsApp';
import {useAppContext} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconSquare from '../../assets/IconSquare';
import IconEye from '../../assets/IconEye';

export default function Login() {
  const {dispatchUser} = useAppContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showPass, setShowPass] = useState(true);

  useEffect(() => {
    const loadCredentials = async () => {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedEmail && savedPassword) {
        setEmail(savedEmail);
        setPassword(savedPassword);
        setRememberPassword(true);
      }
    };
    loadCredentials();
  }, []);

  const onSubmit = async () => {
    if (email === '') {
      Alert.alert('Vui lòng nhập email!');
      return;
    }
    if (password === '') {
      Alert.alert('Vui lòng nhập mật khẩu!');
      return;
    }

    if (email === 'test@gmail.com' && password === '111') {
      dispatchUser('1');

      if (rememberPassword) {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
      } else {
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('password');
      }
    } else {
      Alert.alert('Thông tin đăng nhập không chính xác!');
    }
  };

  const toggleRememberPassword = () => {
    setRememberPassword(prev => !prev);
  };

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <View style={styles.container}>
      <IconLogo />
      <Text style={styles.title}>Đăng nhập tài khoản</Text>

      <Text style={styles.label}>Tên người dùng, Email, Số điện thoại</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.label}>Mật khẩu</Text>
      <View style={[styles.input, styles.rowCenter]}>
        <TextInput
          placeholder="• • • • • • • • • •"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPass}
          style={styles.flex}
        />
        <IconEye show={showPass} onPress={toggleShowPass} />
      </View>

      <View style={styles.forgotPassField}>
        <TouchableOpacity>
          <Text>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <View style={styles.rowCenter}>
          <TouchableOpacity onPress={toggleRememberPassword}>
            {rememberPassword ? <IconCheckbox /> : <IconSquare />}
          </TouchableOpacity>

          <Text style={styles.rememberPasswordText}>Ghi nhớ mật khẩu</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={styles.rowCenter}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Hoặc</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <IconFacebook />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <IconGoogle />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <IconApple />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <IconTelegram />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <IconWhatsApp />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Bạn chưa có tài khoản? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLinkText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupLinkText: {color: '#3864FF', fontWeight: '500'},
  signupText: {
    color: '#9DA4AE',
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 24,
  },
  dividerText: {fontSize: 11, color: '#9DA4AE', marginHorizontal: 10},
  flex: {flex: 1},
  rememberPasswordText: {marginLeft: 8},
  forgotPassField: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  socialButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {height: 1, flex: 1, backgroundColor: '#F3F4F6'},
  loginButtonText: {color: '#FFFFFF', fontWeight: '600'},
  loginButton: {
    backgroundColor: '#3864FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    marginVertical: 24,
  },
  title: {fontSize: 24, fontWeight: '700', marginTop: 24},
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  label: {fontSize: 16, fontWeight: '500', marginTop: 24},
  input: {
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 10,
    marginTop: 4,
    padding: 10,
  },
});
