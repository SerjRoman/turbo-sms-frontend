import Svg, { Path, SvgProps } from "react-native-svg";

export function EyeClosedIcon(props: SvgProps) {
	return (
		<Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
			<Path
				d="M23.92 23.92A13.426 13.426 0 0116 26.667C6.667 26.667 1.333 16 1.333 16A24.6 24.6 0 018.08 8.08m5.12-2.427a12.16 12.16 0 012.8-.32C25.333 5.333 30.667 16 30.667 16a24.668 24.668 0 01-2.88 4.253m-8.96-1.426a4 4 0 11-5.654-5.654M1.333 1.333l29.334 29.334"
				stroke="#1E1E1E"
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
