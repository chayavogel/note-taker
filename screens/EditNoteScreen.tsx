import React from "react";
import { NoteTakingInput } from "../components/NoteTakingInput";
import { saveNote } from "../services/noteStoreService";

export const EditNoteScreen: React.FC = () => {

    return (
        <NoteTakingInput saveNote={saveNote}/>
    )
}