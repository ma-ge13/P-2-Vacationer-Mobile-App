import axios from "axios";
import { Camera } from "expo-camera";
import React from "react";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ReportProblem({navigation}) {
    
    const [description, setDescription] = useState(null);
    const [permission, setPermission] = useState(false);
    let textInput;

    function takePhoto() {
        console.log(permission);
        if (!permission) {
            (async () => {
                const { status } = await Camera.requestCameraPermissionsAsync();
                console.log(status);
                setPermission(status === "granted")
                if (status) {
                    navigation.navigate("Camera");
                }
            })();
        }
        if (permission) {
            navigation.navigate("Camera");
        }
    }
    
    function submitReport() {
        if (description) {
            axios.post(
                "https://paradise-villas-problem-queue.azurewebsites.net/api/ProblemProducer?",
                JSON.stringify(description),
                { headers: { "Content-Type": "application/json" } }
            ).then((response => {
                Alert.alert(response.data);
                if (response.status < 300) {
                    textInput.clear();
                }
            }));
        }
        else
            Alert.alert("Provide a description of the problem before reporting it.")
    }

    return (
        <View style={design.container}>
            <TextInput
                ref={input => {textInput = input}}
                style={design.textBox}
                multiline
                maxLength={150}
                numberOfLines={5}
                onChangeText={setDescription}
                placeholder="Describe the problem you have encountered here (150 character maximum)"
            />
            <Pressable onPress={takePhoto} style={design.Button_1}>
                <Text style={design.text}>Take live photos of the problem</Text>
            </Pressable>

            <Pressable style={design.Button_2}>
                <Text style={design.text}>Upload saved photos of the problem</Text>
            </Pressable>

            <Pressable onPress={submitReport} style={design.Button_3}>
                <Text style={design.text}>Report the problem</Text>
            </Pressable>
        </View>
    );
}

const design = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#C0BDA5",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        color: "#F0F0F0",
    },
    textBox: {
        padding: 50,
        backgroundColor: "#B3AF8F",
        color: "white"
    },
    Button_1: {
        padding: 35,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8,
        borderColor: "#F0F0F0",
        backgroundColor: "#FF6663",
    },
    Button_2: {
        padding: 35,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8,
        borderColor: "#F0F0F0",
        backgroundColor: "#087E8B",
    },
    Button_3: {
        padding: 35,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8,
        borderColor: "#F0F0F0",
        backgroundColor: "#98CE00",
    },
});