import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Colors} from '../../global/Styles';
import FormInput from '../../components/FormInput';

const SignUpScreen = props => {
  const {navigation} = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Đăng ký</Text>
        <View style={styles.input}>
          <FormInput placeholder="Email đăng nhập" />
        </View>
        <View style={styles.input}>
          <FormInput placeholder="Mật khẩu" />
        </View>
        <View style={styles.input}>
          <FormInput placeholder="Xác nhận mật khẩu" />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: Colors.white, fontSize: 17}}>Đăng ký</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.txt2}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

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
    justifyContent: 'center',
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
});
