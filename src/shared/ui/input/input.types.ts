import { ReactNode } from "react"
import { TextInputProps, TextStyle, ViewStyle } from "react-native"


export interface InputProps extends TextInputProps{
    label?: string
    error?: string | null
    iconLeft?: ReactNode 
    iconRight?: ReactNode
    inputContainerStyle?: ViewStyle
    labelStyle?: TextStyle
}

export type InputPasswordProps = Omit<InputProps, "iconRight" | "iconLeft">