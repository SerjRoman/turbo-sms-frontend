import { Image, type ImageProps } from "expo-image"


export function LogoImage(props: ImageProps){
    return (
        <Image source = {require("@assets/logo.png")} {...props}></Image>
    )
}