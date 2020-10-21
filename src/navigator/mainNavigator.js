import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
