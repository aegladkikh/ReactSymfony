import React, {Fragment, useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Note as _Note} from "../components/Note";
import {Loader} from "../components/Loader";

const url = process.env.REACT_APP_DB_URL;

export const Note = () => {
    const id = useParams().id;
    const {loading, notes, getNote} = useContext(FirebaseContext);

    useEffect(() => {
        getNote(id)
    }, []);

    return (
        <Fragment>
            {loading
                ? <Loader/>
                : <_Note note={notes}/>
            }
        </Fragment>
    )
};