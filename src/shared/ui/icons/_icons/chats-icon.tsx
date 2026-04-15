import Svg, { Path, SvgProps } from "react-native-svg"

export function ChatsIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <Path
        d="M0 20V2C0 1.45.196.98.588.587A1.926 1.926 0 012 0h16c.55 0 1.02.196 1.413.588C19.803.979 20 1.45 20 2v12c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0118 16H4l-4 4zm3.15-6H18V2H2v13.125L3.15 14z"
      />
    </Svg>
  )
}