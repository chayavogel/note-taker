import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { getAllNotes, Note } from "../services/noteStoreService"; 

export const SavedNotesList: React.FC = () => {

    const [notes, setNotes] = useState<Note[]>([])

    useFocusEffect(() => {
        getAllNotes().then(result => setNotes(result.notes))
    })

    return (
        <View style={styles.container}>
            <ScrollView>
            {notes.map(note => (
                <View style={styles.row}>
                <Text 
                    key={note.id} 
                    style={styles.note}
                >
                    {note.text.length === 0 ? '(Blank Note)' : note.text}
                </Text>
                </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
    },
    row:{
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#e6e6e6",
        alignSelf: 'center',
        height: 90,
        justifyContent: 'center'
    },
    note: {
        paddingVertical: 20,
        width: "100%",
        fontSize: 16,
    },
})