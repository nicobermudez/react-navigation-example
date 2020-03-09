import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
    }
});

export const MoreScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>More Screen</Text>
        </View>
    );
};
