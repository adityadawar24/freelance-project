import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import SavedScreen from './SavedScreen';
import ProfileScreen from './ProfileScreen';
import Screen from './Screen';
import NewsCard from './NewsCard';
import HorizontalMenu from './HorizontalMenu';
import { FlatList } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = ({ renderHeader, data }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Saved') {
            iconName = 'bookmark';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#f7f3f3',
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home">
        {() => (
          <Screen>
            {/* <SearchBar /> */}
            {renderHeader()}
            <HorizontalMenu />
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <NewsCard item={item} />}
            />
          </Screen>
        )}
      </Tab.Screen>
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
  
export default BottomTab;
