import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import { styles } from './styles';
import { Widget } from './src/components/Widget';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  
  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <View style={styles.container}>
      <Widget/>

      <StatusBar 
      style="light" 
      backgroundColor='transparent'
      translucent
      />
      
    </View>
  );
}
