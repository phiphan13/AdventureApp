import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import RosterScreen from "./src/screens/RosterScreen";
import HeroDetails from "./src/screens/HeroDetails";
import Adventure from "./src/screens/Adventure";
import Navigation from "./src/screens/Navigation";
import {Provider as HeroProvider } from "./src/context/HeroContext";


const navigator = createStackNavigator(
  {
    Roster: RosterScreen,
    HeroDetails: HeroDetails,
    Adventure: Adventure,
    Navigation: Navigation,

    

  },

  {
    initialRouteName: "Roster",
    defaultNavigationOptions:
    {
      title: "HW3"
    }
  }
);

const App = createAppContainer(navigator);

export default () =>
{
  return <HeroProvider>
    <App/>
  </HeroProvider>
}


