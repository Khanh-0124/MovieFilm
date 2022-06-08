import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = 150;
const FormModal = props => {
  const {changeModalVisible, title} = props;
  const [email, setEmail] = useState('');
  const resetPass = async () => {
    await auth()
      .sendPasswordResetEmail(email)
      .then(alert('Vui lòng kiểm tra email'))
      .catch(e => alert(e));
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          placeholder="Nhập Email"
          keyboardType="email-address"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            flex: 0.7,
            paddingHorizontal: 10,
            borderRadius: 10,
            marginHorizontal: 15,
          }}
          value={email}
          onChangeText={a => setEmail(a)}
        />
        <View style={styles.footerModal}>
          <TouchableOpacity onPress={() => changeModalVisible(false)}>
            <Text style={styles.textFoot}>Huỷ</Text>
          </TouchableOpacity>
          <View style={{height: 20, backgroundColor: '#333', width: 1}} />
          <TouchableOpacity onPress={resetPass}>
            <Text style={styles.textFoot}>Gửi</Text>
            {/* <Text style={styles.textFoot}>{email}</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FormModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333' + 9,
  },
  modal: {
    height: HEIGHT,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    flex: 1.5,
  },
  footerModal: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textFoot: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
  },
});
