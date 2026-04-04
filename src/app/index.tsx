import {
	useAddPostMutation,
	useGetPostQuery,
	useGetPostsQuery,
} from "@shared/api/base";
import { Button } from "@shared/ui/button";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
	// const { data, isLoading, isFetching } = useGetPostsQuery()

	const [id, setId] = useState<number>(0);
	const { data, isLoading, isFetching, isUninitialized, error } =
		useGetPostQuery(
			{
				id,
			},
			{ skip: id === 0, pollingInterval: 1000 },
		);
	const [addPostMutation, { isLoading: addPostLoading }] =
		useAddPostMutation();
	const renderContent = () => {
		if (isUninitialized) {
			return <Text>Выберите пост для загрузки.</Text>;
		}
		if (isLoading) {
			return <Text>Loading...</Text>;
		}
		if (isFetching) {
			return <Text>Loading...</Text>;
		}
		if (error) {
			return <Text>Произошла ошибка при загрузке поста.</Text>;
		}
		if (data) {
			return <Text>{data.title}</Text>;
		}
		return null; // На случай если нет ни данных, ни ошибки
	};

	return (
		<SafeAreaView>
			{addPostLoading && <Text>Loading creation of the new post...</Text>}
			{/* <Button title="Refetch" onPress={() => refetch()}></Button> */}
			{/* <Button
				title="Create post"
				disabled={addPostLoading}
				onPress={async () => {
					addPostMutation({
						title: `New post ${Date.now()}`,
						body: "odjafjafjsd",
						userId: 5,
					});
				}}
			></Button> */}
			<Button
				onPress={() => setId((prev) => prev + 1)}
				title="Next post"
			></Button>
			<Button
				onPress={() => setId((prev) => prev - 1)}
				title="Prev post"
				disabled={id === 0}
			></Button>
			{renderContent()}

			{/* <ScrollView>
				{data?.map((post) => (
					<View key={post.id}>
						<Text style={{ fontWeight: 500, fontSize: 20 }}>
							Title: {post.title}
						</Text>
						<Text>ID: {post.id}</Text>
						<Text>{post.body}</Text>
					</View>
				))}
			</ScrollView> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});
