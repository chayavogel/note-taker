import React from "react";
import { NoteTakingInput } from "../components/NoteTakingInput";
import { saveNote } from "../services/noteStoreService";
import { useRoute } from "@react-navigation/native"
import { EditScreenRouteProp } from "../types";

export const EditNoteScreen: React.FC = () => {

    const route = useRoute<EditScreenRouteProp>();
    const noteId = route.params.noteId;

    return (
        <NoteTakingInput saveNote={saveNote} noteId={noteId}/>
    )
}