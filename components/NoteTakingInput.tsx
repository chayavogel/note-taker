import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type Props = {
    saveNote: (text: string) => void;
}

export const NoteTakingInput: React.FC<Props> = ( {saveNote} ) => {

    const [text, setText] = useState<string>("");

    return (
        <>
            <TextInput 
                multiline={true}
                style={styles.TextInput}
                value={text}
                onChangeText={setText}
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