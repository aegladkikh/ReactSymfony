import React, {Component} from 'react';

export class Footer extends Component {

    render() {
        const Year = new Date().getFullYear();

        return (
            <footer className="footer py-3 fixed-bottom bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p>© {Year} a.gladkikh</p>
                            <p>
                                <span className="text-muted">Тестовое приложение.</span>
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="float-right"><a href="#">Наверх</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}