import { Text, View } from "react-native";
import Video from "react-native-video";

export default function HomeScreen() {
  return (
    <>
      <Text>HomeScreen</Text>
      <View style={{ backgroundColor: "black" }}>
        <Video
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
          style={{ width: "100%", aspectRatio: 16 / 9 }}
          controls
        />
      </View>
    </>
  );
}
