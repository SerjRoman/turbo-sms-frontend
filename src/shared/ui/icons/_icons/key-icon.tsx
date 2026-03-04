import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export function KeyIcon(props: SvgProps) {
	return (
		<Svg width={30} height={29} viewBox="0 0 30 29" {...props}>
			<Path
				d="M26.743 1.5l-2.667 2.667m0 0l4 4-4.667 4.666-4-4m4.667-4.666l-4.667 4.666m-5.48 5.48A7.333 7.333 0 113.56 24.684a7.333 7.333 0 0110.369-10.37h.001zm0 0l5.48-5.48"
				stroke="#1E1E1E"
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
