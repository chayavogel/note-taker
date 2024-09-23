import React from "react";
import {Text, Button} from 'react-native'

type Props = {
    toggleNewNote: (toggle: boolean) => void;
}

export const HomeScreen: React.FC<Props> = ( {toggleNewNote } ) => {
    return (
        <>
        <Text>HomeScreen</Text>
        <Button 
            onPress={() => toggleNewNote(true)} 
            title="New Note"
        />
        </>
    )
}