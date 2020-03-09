import React, {Component} from 'react';

export class Footer extends Component {

    render() {
        return (
            <footer className="footer py-3 fixed-bottom bg-dark">
                <div className="container">
                    <span className="text-muted">Тестовое приложение.</span>
                </div>
            </footer>
        )
    }
}