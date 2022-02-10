import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import React from "react";

export default function ReportProblemCamera() {

    const [type, setType] = useState(Camera.Constants.Type.back);
    
    return (
      <View style={design.container}>
        <Camera style={design.camera} type={type}>
          <View style={design.buttonContainer}>
            <Pressable
              style={design.button_1}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={design.text}> Flip </Text>
            </Pressable>

            <Pressable
              style={design.button_2}
            >
              <Text> Snap Photo </Text>
            </Pressable>
          </View>
        </Camera>
      </View>
    );
}

const design = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button_1: {
    flex: 0.5,
    alignSelf: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#DCF763",
  },
  button_2: {
    flex: 0.5,
    alignSelf: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#DCF763",
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});