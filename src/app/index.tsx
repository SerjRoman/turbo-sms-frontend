import { useUserContext } from "@modules/auth";
import { Redirect } from "expo-router";

export default function Page() {
	const { user } = useUserContext();
	if (user) return <Redirect href={"/chats"} />;
	return <Redirect href={"/login"} />;
}
