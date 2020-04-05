import React, {Component} from 'react';

export class Aside extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
                this.setState({date: new Date()})
            }, 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <aside className="col-md-4 blog-sidebar">
                <div className="p-4 mb-3 bg-light rounded">
                    <h4 className="font-italic">О Note App</h4>
                    <p className="mb-0">Приложение служит для добавления удаления заметок.</p>
                    <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            </aside>
        )
    }
}