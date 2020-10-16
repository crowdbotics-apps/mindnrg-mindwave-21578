import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3145594Navigator from '../features/BlankScreen3145594/navigator';
import BlankScreen2145593Navigator from '../features/BlankScreen2145593/navigator';
import BlankScreen0145309Navigator from '../features/BlankScreen0145309/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3145594: { screen: BlankScreen3145594Navigator },
BlankScreen2145593: { screen: BlankScreen2145593Navigator },
BlankScreen0145309: { screen: BlankScreen0145309Navigator },

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
