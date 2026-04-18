import Svg, { Path, SvgProps } from "react-native-svg";

export function PlusIcon(props: SvgProps) {
	return (
		<Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
			<Path d="M18.333 21.667h-10v-3.334h10v-10h3.334v10h10v3.334h-10v10h-3.334v-10z" />
		</Svg>
	);
}
