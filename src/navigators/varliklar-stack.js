import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BudgetScreen,
  VarlikDetayScreen,
  VarliklarListScreen,
  VarliklarScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export const VarliklarStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="varliklar-screen" component={VarliklarScreen} />
      <Stack.Screen
        name="varliklarList-screen"
        component={VarliklarListScreen}
      />
      <Stack.Screen name="varlikDetay-screen" component={VarlikDetayScreen} />
      <Stack.Screen name="budget-screen" component={BudgetScreen} />
    </Stack.Navigator>
  );
};
