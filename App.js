import React from 'react'
import Page1 from './Project/Page1'
import Page2 from './Project/Page2'
import Page3 from './Project/Page3'
import Page4 from './Project/Page4'
import Page5 from './Project/Page5'
import Page6 from './Project/Page6'
import Page7 from './Project/Page7'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name="Home" component={Page1} />
      <Stack.Screen name="Products" component={Page2} />
      <Stack.Screen name="Productdetail" component={Page3} />
      <Stack.Screen name="Categories" component={Page4} />
      <Stack.Screen name="AddCategory" component={Page5} />
      <Stack.Screen name="UpdateCategory" component={Page6} />
      <Stack.Screen name="Orders" component={Page7} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}
