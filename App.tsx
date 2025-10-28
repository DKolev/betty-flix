/**
 * BettyFlix - Netflix Clone
 * React Native App with React Navigation
 *
 * @format
 */

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import QueryProvider from './src/providers/QueryProvider';
import colors from './src/constants/colors';
import 'react-native-gesture-handler';

function App() {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor={colors.black} />
        <AppNavigator />
      </SafeAreaProvider>
    </QueryProvider>
  );
}

export default App;
