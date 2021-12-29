import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
    },
    textOneStyle : {
        borderWidth: 2,
        borderColor: 'red',
        
    },
    textTwoStyle : {
        borderWidth: 2,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle : {
        borderWidth: 2,
        borderColor: 'red',
        
    }
});

export default BoxScreen