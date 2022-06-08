import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import FormModal from './FormModal';

const ModalForm = props => {
  const {changeModalVisible, isModalVisitable, ...more} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisitable}
        onRequestClose={() => changeModalVisible(false)}>
        <FormModal changeModalVisible={changeModalVisible} title={more.title} />
      </Modal>
    </SafeAreaView>
  );
};

export default ModalForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableOpacity: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
