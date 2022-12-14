import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';


export function AppRoutes(){
    return(
        <Navigator>
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Dash"
                component={Dashboard}
            />
        </Navigator>
    );
}
