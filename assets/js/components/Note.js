import React from 'react';

export const Note = ({note}) => {
    if (!note.length) {
        return <p className="center">Не нашел записку</p>
    }
    return (
        <div>
            <p>{note[0].title}</p>
            <p>{note[0].date}</p>
        </div>
    );
};