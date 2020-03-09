import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SecondaryScreen, ThirdScreen, FourthScreen, ToursScreen } from "../screens";

const ToursStack = createStackNavigator();
export const ToursNavigator: React.FC = () => {
    return (
        <ToursStack.Navigator initialRouteName="Tours">
            <ToursStack.Screen
                name="Tours"
                component={ToursScreen}
            />
            <ToursStack.Screen
                name="Tour 2"
                component={SecondaryScreen}
            />
            <ToursStack.Screen
                name="Tour 3"
                component={ThirdScreen}
            />
            <ToursStack.Screen
                name="Tour 4"
                component={FourthScreen}
            />
        </ToursStack.Navigator>
    );
};
