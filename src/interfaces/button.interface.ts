import { TouchableOpacityProps } from "react-native";

export interface IBtnProps extends TouchableOpacityProps {
    titulo: string;
    borda?: boolean;
    corBorda?: string;
    corText?: string;
    backgroud?: string;
}

export interface IBtnIconProps extends TouchableOpacityProps {
    children: React.ReactNode;
}