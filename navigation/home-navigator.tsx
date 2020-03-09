import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen, SecondaryScreen, ThirdScreen, FourthScreen } from "../screens";

const HomeStack = createStackNavigator();
export const HomeNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
            />
            <HomeStack.Screen
                name="Home 2"
                component={SecondaryScreen}
            />
            <HomeStack.Screen
                name="Home 3"
                component={ThirdScreen}
            />
            <HomeStack.Screen
                name="Home 4"
                component={FourthScreen}
            />
        </HomeStack.Navigator>
    );
};
