import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to the camera"
                onPress={() => navigation.navigate("CameraScreen")}
            />
        </View>
    );
}