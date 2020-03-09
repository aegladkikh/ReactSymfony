import React from 'react';

export const Note = ({note}) => {
    console.info(note);
    return (
        <div>
            <p>{note.title}</p>
            <p>{note.date}</p>
        </div>
    );
}