/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import CustomComponent from './Components/CustomComponent';
import Flex from './Components/Flex';
import Main from './Components/Main';
import StackNavigator from './Components/StackNavigator';

AppRegistry.registerComponent(appName, () => StackNavigator);
