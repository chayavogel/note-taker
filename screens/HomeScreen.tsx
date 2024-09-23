import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text, Button} from 'react-native'
import { EditNoteScreen } from "./EditNoteScreen";
import { ScreenNavigationProp } from "../types"

export const HomeScreen: React.FC = () => {

    const navigation = useNavigation<ScreenNavigationProp>()
   
    return (
        <>
        <Text>HomeScreen</Text>
        <Button 
            onPress={() => navigation.navigate("EditNote") } 
            title="EditNote"
        />
        </>
    )

}