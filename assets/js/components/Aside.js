import React from 'react';

export class Aside extends React.Component{

    render () {
        return (
            <aside className="col-md-4 blog-sidebar">
                <div className="p-4 mb-3 bg-light rounded">
                    <h4 className="font-italic">О Note App</h4>
                    <p className="mb-0">Приложение служит для добавления удаления заметок.</p>
                </div>
            </aside>
        )
    }
}