import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ChatScreen, MoreScreen } from "../screens";
import { HomeNavigator } from "./home-navigator";
import { ToursNavigator } from "./tours-navigator";

const MainTab = createBottomTabNavigator();
export const AppNavigator: React.FC = () => {
    return (
        <MainTab.Navigator>
            <MainTab.Screen
                name="Home"
                component={HomeNavigator}
            />
            <MainTab.Screen
                name="Tours"
                component={ToursNavigator}
            />
            <MainTab.Screen
                name="Chat"
                component={ChatScreen}
            />
            <MainTab.Screen
                name="More"
                component={MoreScreen}
            />
        </MainTab.Navigator>
    );
};
