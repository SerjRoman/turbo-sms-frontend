import Svg, { Path, SvgProps } from "react-native-svg";

export function EmailIcon(props: SvgProps) {
	return (
		<Svg width={30} height={24} viewBox="0 0 30 24" {...props}>
			<Path d="M3 24a2.889 2.889 0 01-2.119-.881A2.889 2.889 0 010 21V3C0 2.175.294 1.469.881.881A2.889 2.889 0 013 0h24c.825 0 1.531.294 2.119.881C29.706 1.47 30 2.175 30 3v18c0 .825-.294 1.531-.881 2.119A2.889 2.889 0 0127 24H3zm12-10.5L3 6v15h24V6l-12 7.5zm0-3L27 3H3l12 7.5zM3 6V3v18V6z" />
		</Svg>
	);
}
