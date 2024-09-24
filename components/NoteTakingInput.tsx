import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { getNote } from "../services/noteStoreService"

type Props = {
    saveNote: (text: string) => void;
    noteId: string | undefined;
}

export const NoteTakingInput: React.FC<Props> = ( { saveNote, noteId } ) => {

    const [text, setText] = useState<string>("");
    
    useEffect(()=> {
        if(noteId) {
            getNote(noteId).then(result => setText(result?.text ?? ""))
        }
    }, [])

    return (
        <>
            <TextInput 
                multiline={true}
                style={styles.TextInput}
                value={text}
                onChangeText={setText}
                autoFocus={true}
            />
            <Button 
                title="Save Note"
                onPress={() => saveNote(text)}
            />
        </>
    )
}

const styles = StyleSheet.create({
    TextInput: {
      backgroundColor: "#ffb70342",
      width: "100%",
      height: 200,
      fontSize: 16,
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 20,
    } 
  });