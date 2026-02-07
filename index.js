import { AppRegistry } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/index';

const MainApp = () => (
    <Provider store={store}>
        <SafeAreaProvider>
            <App />
        </SafeAreaProvider>
    </Provider>
);

AppRegistry.registerComponent(appName, () => MainApp);
