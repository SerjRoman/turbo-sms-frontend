import { Header } from "@shared/ui/header";
import { Images } from "@shared/ui/images";

export function HeaderSettings() {
	return (
		<Header
			left={<Images.LogoImage style={{ width: 40, height: 40 }} />}
			title="Settings"
		/>
	);
}
