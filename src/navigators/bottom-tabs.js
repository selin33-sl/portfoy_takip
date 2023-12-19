import {View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {images} from '../assets';
import {HomeStack} from './home-stack';
import {BildirimStack} from './bildirim-stack';
import {VarliklarStack} from './varliklar-stack';
import {SettingsStack} from './settings-stack';
import {DegerlendirmelerStack} from './degerlendirme-stack';

// Bottom Tabs oluştur
const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home-stack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#120120',
          borderWidth: 1.5,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          borderColor: '#44007A',
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="varliklar-stack"
        component={VarliklarStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name={'plus'}
                size={30}
                style={{
                  color: focused ? '#DB00FF' : '#958EBF',
                  marginTop: 8,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="degerlendirmeler-stack"
        component={DegerlendirmelerStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name={'clipboard-text-outline'}
                size={30}
                style={{
                  color: focused ? '#DB00FF' : '#958EBF',
                  marginTop: 8,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="home-stack"
        component={HomeStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={focused ? images.bottomBarIcon1 : images.bottomBarIcon2}
                style={{width: 40, height: 40}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="bildirim-stack"
        component={BildirimStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name={'bell-badge-outline'}
                size={30}
                style={{
                  color: focused ? '#DB00FF' : '#958EBF',
                  marginTop: 8,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="settings-stack"
        component={SettingsStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name={'cog-outline'}
                size={30}
                style={{
                  color: focused ? '#DB00FF' : '#958EBF',
                  marginTop: 8,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
