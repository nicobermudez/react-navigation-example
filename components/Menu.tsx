import * as React from "react";
import { FlatList, View } from "react-native";
import { MenuCard } from "./MenuCard";

type Props = {
    screens: string[];
};

export const Menu: React.FC<Props> = ({ screens }) => (
    <View style={{ flex: 1 }}>
        <FlatList
            data={screens}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item }) => (
                <MenuCard key={item} screen={item} />
            )}
            keyExtractor={(screen) => screen}
        />
    </View>
);
