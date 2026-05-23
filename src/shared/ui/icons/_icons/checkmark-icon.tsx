import Svg, { Path, SvgProps } from "react-native-svg"


export function CheckmarkIcon(props: SvgProps) {
    return (
            <Svg
            width={9}
            height={10}
            viewBox="0 0 9 10"
            {...props}
        >
            <Path
                d="M3.98 7.5L1.603 5.125l.594-.594 1.781 1.782L7.802 2.49l.594.593L3.979 7.5z"
            />
        </Svg>
    )
}
