import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from 'react-native'
import { ScreenNavigationProp } from "../types"
import { SavedNotesList } from "../components/SavedNotesList";

export const HomeScreen: React.FC = () => {

    const navigation = useNavigation<ScreenNavigationProp>()
   
    return (
        <>
        <SavedNotesList/>
        </>
    )
}