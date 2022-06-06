import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../global/Styles';
import FormInput from '../../components/FormInput';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

const SignInScreen = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  // const [confirmPass, setConfirmPass] = useState('');
  const [showPass, setShow] = useState(true);
  // const {login} = useContext(AuthProvider);
  const submit = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(user => {
        alert(user.user.email);
        navigation.navigate('Home', {name: user.user.email});
      })
      .catch(e => {
        alert(e);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView style={styles.container}>
        <Text style={styles.title}>Đăng nhập</Text>
        <View style={styles.input}>
          <Icon name="email" style={styles.emailIcon} />
          <FormInput
            placeholder="Email đăng nhập"
            width={215}
            value={email}
            onChangeText={a => setEmail(a)}
          />
        </View>
        <View style={styles.input}>
          <Icon name="lock" style={styles.emailIcon} />
          <FormInput
            placeholder="Mật khẩu"
            secureTextEntry={showPass}
            width={190}
            value={pass}
            onChangeText={a => setPass(a)}
          />
          <TouchableOpacity onPress={() => setShow(!showPass)}>
            <Icon
              name={showPass ? 'eye-outline' : 'eye-off-outline'}
              type="ionicon"
              style={styles.showPass}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txtForgetPass}>Quên mật khẩu?</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={submit}>
          <Text style={{color: Colors.white, fontSize: 17}}>Đăng nhập</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: Colors.primary,
            width: '60%',
            alignSelf: 'center',
          }}
        />
        <Text style={[styles.txt1, {textAlign: 'center', marginVertical: 10}]}>
          Hoặc
        </Text>
        <View style={styles.viewImage}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/search.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/facebook.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.txtFooter}>
          <Text style={styles.txt1}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.txt2}> Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white2 + 100,
  },
  title: {
    fontSize: 40,
    color: Colors.primary,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 30,
  },
  input: {
    marginTop: 30,
    width: '70%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: Colors.white,
    paddingLeft: 15,
    shadowColor: '#000',
    elevation: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 18,
  },
  btn: {
    width: '70%',
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  txtFooter: {
    flexDirection: 'row',
    marginTop: 30,
    xDirection: 'row',
    marginTop: 90,
    alignSelf: 'center',
  },
  txt1: {
    fontSize: 15,
  },
  txt2: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.primary,
  },
  txtForgetPass: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  image: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  viewImage: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  showPass: {
    top: 10,
    width: 35,
    height: 35,
  },
  emailIcon: {
    top: 12,
    marginRight: 5,
  },
  passIcon: {
    top: 12,
    // marginRight: 5,
  },
});
