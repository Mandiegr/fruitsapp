import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './src/View/screens/HomeScreen';
import {DetailsScreen} from './src/View/screens/DetailsScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


