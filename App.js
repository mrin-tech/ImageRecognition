import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/imageCamera';
import DisplayImg from './screens/displayImg';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="DisplayImg" component={DisplayImg} />
        {/* <View style={styles.container}>
        <CameraComponent></CameraComponent>
        <StatusBar style="auto" />
      </View> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
