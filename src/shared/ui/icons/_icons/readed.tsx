import Svg, { G, Path, SvgProps } from "react-native-svg";

export function ReadedIcon(props: Readonly<SvgProps>) {
	return (
		<Svg width={11} height={10} viewBox="0 0 11 10" fill="none" {...props}>
			<G clipPath="url(#clip0_140_304)" fill="#1D1B20">
				<Path d="M3.98 7.5L1.603 5.125l.594-.594 1.781 1.782L7.802 2.49l.594.593L3.979 7.5z" />
				<Path d="M5.98 7.5L3.603 5.125l.594-.594 1.781 1.782L9.802 2.49l.594.593L5.979 7.5z" />
			</G>
		</Svg>
	);
}
