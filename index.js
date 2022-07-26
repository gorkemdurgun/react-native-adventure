/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import CustomComponent from './Components/CustomComponent';
import Flex from './Components/Flex';
import Main from './Components/Main';
import StackNavigator from './Components/StackNavigator';
import useFocusEff from './NavigationHooks/useFocusEffect';
import useIsFocusAndLinkTo from './NavigationHooks/useIsFocusAndLinkTo';
import useNavApp from './NavigationHooks/useNavigation';
import useNavState from './NavigationHooks/useNavigationState';
import useRouteApp from './NavigationHooks/useRoute';
import scrollToTop from './NavigationHooks/useScrollToTop';

AppRegistry.registerComponent(appName, () => scrollToTop);
