import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        padding: 16,
    },
});

type Props = {
    screen: string;
};

export const MenuCard: React.FC<Props> = ({ screen }) => {
    const navigation = useNavigation();
    const navigate = () => navigation.navigate(screen);

    return (
        <TouchableOpacity style={styles.container} onPress={navigate}>
            <Text>{screen}</Text>
        </TouchableOpacity>
    );
};
