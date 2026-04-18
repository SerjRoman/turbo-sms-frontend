import Svg, { Path, SvgProps } from "react-native-svg"


export function ArrowBackIcon(props: SvgProps) {
    return (
        <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        {...props}
        >
        <Path
            d="M7.825 13l5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825z"
        />
        </Svg>
  )
}
