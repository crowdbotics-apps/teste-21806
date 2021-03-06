import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings154626Navigator from '../features/Settings154626/navigator';
import UserProfile154578Navigator from '../features/UserProfile154578/navigator';
import Tutorial154577Navigator from '../features/Tutorial154577/navigator';
import NotificationList154549Navigator from '../features/NotificationList154549/navigator';
import Settings154548Navigator from '../features/Settings154548/navigator';
import Settings154540Navigator from '../features/Settings154540/navigator';
import UserProfile154538Navigator from '../features/UserProfile154538/navigator';
import UserProfile154516Navigator from '../features/UserProfile154516/navigator';
import Maps154497Navigator from '../features/Maps154497/navigator';
import Settings154475Navigator from '../features/Settings154475/navigator';
import Settings154460Navigator from '../features/Settings154460/navigator';
import NotificationList154459Navigator from '../features/NotificationList154459/navigator';
import Maps154458Navigator from '../features/Maps154458/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings154626: { screen: Settings154626Navigator },
UserProfile154578: { screen: UserProfile154578Navigator },
Tutorial154577: { screen: Tutorial154577Navigator },
NotificationList154549: { screen: NotificationList154549Navigator },
Settings154548: { screen: Settings154548Navigator },
Settings154540: { screen: Settings154540Navigator },
UserProfile154538: { screen: UserProfile154538Navigator },
UserProfile154516: { screen: UserProfile154516Navigator },
Maps154497: { screen: Maps154497Navigator },
Settings154475: { screen: Settings154475Navigator },
Settings154460: { screen: Settings154460Navigator },
NotificationList154459: { screen: NotificationList154459Navigator },
Maps154458: { screen: Maps154458Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
