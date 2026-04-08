import {
	createContext,
	type PropsWithChildren,
	useContext,
	useState,
} from "react";
import type { User } from "../model";

interface UserContextContract {
	token: string | null;
	user: User | null;
	setToken: (token: string | null) => void;
	setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextContract | null>(null);

export function useUserContext() {
	// THIS is invariant - function that checks whether something (in our case, context) is good
	// and valid. But most important part is
	const ctx = useContext(UserContext);
	if (!ctx) throw new Error("User context is not wrapped in provider.");
	return ctx;
}

export function UserContextProvider(props: PropsWithChildren) {
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	return (
		<UserContext value={{ user, token, setUser, setToken }} {...props} />
	);
}
