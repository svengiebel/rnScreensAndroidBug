import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function TabOne({navigation}: any) {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'red'}}>TAB ONE</Text>
      <Button onPress={() => navigation.navigate('Modal')} title="Open Modal" />
    </View>
  );
}
function TabTwo() {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'blue'}}>TAB TWO</Text>
    </View>
  );
}
function Modal({navigation}: any) {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'blue'}}>MODAL</Text>
      <Button onPress={() => navigation.goBack()} title="CLOSE MODAL" />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

const TabComp = () => (
  <Tab.Navigator initialRouteName="TabOne">
    <Tab.Screen name="TabOne" component={TabOne} />
    <Tab.Screen name="TabTwo" component={TabTwo} />
  </Tab.Navigator>
);

const baseGlobalOptions = () => ({
  headerShown: false,
  gestureEnabled: true,
  gestureResponseDistance: {
    vertical: 300,
  },
  cardOverlayEnabled: true,
  ...TransitionPresets.FadeFromBottomAndroid,
});

const AppStackNavigator = () => (
  <NavigationContainer>
    <Root.Navigator initialRouteName="Tabs" headerMode="none">
      <Root.Screen name="Tabs" component={TabComp} />
      <Root.Screen name="Modal" component={Modal} options={baseGlobalOptions} />
    </Root.Navigator>
  </NavigationContainer>
);
export default AppStackNavigator;
