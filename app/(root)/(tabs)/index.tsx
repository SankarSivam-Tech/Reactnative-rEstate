import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         paddingTop: 40, 
      }}
    >
      <Text className=" text-3xl my-10  font-rubik-bold ">Welcome to Restate</Text>
      <Link href="/sign-in">SignIn</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/property/[id]">Properties</Link>
    </View>
  );
}
