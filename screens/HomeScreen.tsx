import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, Button, View } from 'react-native'
import { EditNoteScreen } from "./EditNoteScreen";
import { ScreenNavigationProp } from "../types"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { getNote } from "../services/noteStoreService";

export const HomeScreen: React.FC = () => {

    const navigation = useNavigation<ScreenNavigationProp>()

    const [noteText, setNoteText] = useState<string>('')

    useFocusEffect(() => {
        getNote().then((result) => setNoteText(result ?? ""));
    })
   
    return (
        <>
        <View>
            <Text>{noteText}</Text>
        </View>
        <Button 
            onPress={() => navigation.navigate("EditNote") } 
            title="New Note"
        />
        </>
    )
}