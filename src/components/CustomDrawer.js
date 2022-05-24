import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        <ImageBackground
          source={require('../assets/marvel-netflix-movies.webp')}
          style={{height: 150}}>
          <View
            style={{
              backgroundColor: '#0496ff' + 90,

              flexDirection: 'row',
              borderRadius: 40,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assets/avt.jpg')}
              style={{height: 80, width: 80, borderRadius: 40}}
            />
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                Khánh Vũ
              </Text>
              <Text style={{color: '#fff', fontSize: 16}}>
                Film yêu thích : 12
              </Text>
            </View>
          </View>
          <Text></Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footerDrawer}>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
            width: '100%',
            alignSelf: 'center',
            marginBottom: 5,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="language" size={24} type="entypo " />
          <Text style={{fontSize: 16, fontWeight: '500', marginLeft: 8}}>
            Ngôn ngữ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="share" size={24} />
          <Text style={{fontSize: 16, fontWeight: '500', marginLeft: 8}}>
            Chia sẻ ứng dụng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="feedback" size={24} />
          <Text style={{fontSize: 16, fontWeight: '500', marginLeft: 8}}>
            Gửi phản hồi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="logout" size={24} />
          <Text style={{fontSize: 16, fontWeight: '500', marginLeft: 8}}>
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  footerDrawer: {
    paddingHorizontal: 15,
    marginBottom: 30,
    height: 150,
    justifyContent: 'space-around',
  },
});
