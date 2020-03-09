import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { HomeMenu } from "../components";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});

const ToursScreens: string[] = [
    "Tour 2",
    "Tour 3",
    "Tour 4",
];

export const ToursScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeMenu screens={ToursScreens} />
        </SafeAreaView>
    );
};
