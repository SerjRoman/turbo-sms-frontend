import Svg, { Path, SvgProps } from "react-native-svg";

export function EyeOpenedIcon(props: SvgProps) {
	return (
		<Svg width={32} height={25} viewBox="0 0 32 25" {...props}>
			<Path
				d="M1.333 12.167S6.667 1.5 16 1.5s14.667 10.667 14.667 10.667S25.333 22.833 16 22.833 1.333 12.167 1.333 12.167z"
				stroke="#1E1E1E"
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M16 16.167a4 4 0 100-8 4 4 0 000 8z"
				stroke="#1E1E1E"
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
