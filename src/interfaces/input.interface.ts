import { TextInputProps } from "react-native";

export interface IInputComponentProps extends TextInputProps {
    isPassword: boolean;
    labelTxt: string;
    borda?: boolean;
    corBorda?: string;
    backgroud?: string;
}