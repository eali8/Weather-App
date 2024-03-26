
// Emmy Ali A01004664 Assignment3 MDIA4295
import{ NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen  from './screens/HomeScreen';
import CityWeatherScreen from './screens/CityWeatherScreen'; 
import CityListScreen from './screens/CityListScreen'; 


const Stack = createNativeStackNavigator(); 

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome back Emmy'}}
        />
      
      <Stack.Screen 
       name="City"
       component={CityListScreen}
       options={{ title: 'Select your location' }}
      /> 
      
      <Stack.Screen App
       name="Weather"
       component={CityWeatherScreen}
       options={{ title: 'Go back to list', headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}











