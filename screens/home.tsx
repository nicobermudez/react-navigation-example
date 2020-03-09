import React from "react";
import { StyleSheet } from "react-native";
import { HomeMenu } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});

const HomeScreens: string[] = [
    "Home 2",
    "Home 3",
    "Home 4",
];

export const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeMenu screens={HomeScreens} />
        </SafeAreaView>
    );
};
