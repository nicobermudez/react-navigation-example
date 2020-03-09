import * as React from "react";
import { Menu } from "./Menu";

type Props = {
    screens: string[];
};

export const HomeMenu: React.FC<Props> = ({ screens }) => {
    return (
        <Menu screens={screens} />
    );
};
