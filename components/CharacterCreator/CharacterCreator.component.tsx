import React from 'react';
import {Text, View} from "react-native";

import strings from "../../assets/values/strings.js"

const CharacterCreator = (props) => {

    return (
        <View>
            <Text>{strings["fr"]["CHARACTER_CREATOR__TITLE"]}</Text>
        </View>
    )
};

export default CharacterCreator