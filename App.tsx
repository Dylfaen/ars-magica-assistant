import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CharacterCreator from "./components/CharacterCreator/CharacterCreator.component";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <CharacterCreator/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
