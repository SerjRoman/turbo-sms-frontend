import Svg, { Path, SvgProps } from "react-native-svg"


export function PaperplaneIcon(props: Readonly<SvgProps>) {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            {...props}
        >
            <Path
                d="M3.75 25V5L27.5 15L3.75 25ZM6.25 21.25L21.0625 15L6.25 8.75V13.125L13.75 15L6.25 16.875V21.25ZM6.25 21.25V15V8.75V13.125V16.875V21.25Z"
            />
        </Svg>
  )
}
