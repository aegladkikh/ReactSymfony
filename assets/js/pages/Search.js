import React, {Fragment, Component} from 'react';
import Pagination from 'react-bootstrap/Pagination'
import Axios from "axios";
// import {useParams} from "react-router-dom";

const url = process.env.REACT_APP_DB_URL;

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            value: '',
            activePage: 1,
            maxNotes: 0,
            pagination: [],
            testNotes: []
        };

        // const id = useParams().search;

        this.state.pagination.push(
            <Pagination.Item key="1" active={true}>
                1
            </Pagination.Item>,
        )
    }

    componentDidMount() {
        console.info('Mount');
        this.getNotes()
        Axios.get('/api/get-notes').then((r) => {
                this.setState({
                    testNotes: r.data.items
                })
            },
            (error) => {
                console.info(error)
            }
        );
    }

    componentDidUpdate() {
        console.info('update')
    }

    componentWillUnmount() {
        console.info('UnMount');
    }

    search() {
        if ('' === this.inputSearch.value) {
            this.inputSearch.classList.add('is-invalid');
            return;
        } else {
            this.inputSearch.classList.remove('is-invalid');
        }
        this.getNotes().then(() => {
            const notes = this.state.notes.filter(note => note.title === this.state.value);
            this.setState({notes: notes})
        })
    }

    clearSearch() {
        this.inputSearch.value = this.state.value = '';
        this.getNotes();
    }

    getNotes() {
        return this.fetchNotes().then(response => {
            if (response.data !== null) {
                const payload = Object.keys(response.data).map((key, i) => {
                    return {
                        ...response.data[key],
                        id: key
                    }
                });
                this.setState({
                    notes: payload
                });
            }
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    async fetchNotes() {
        return await Axios.get(`${url}/notes.json`)
    }

    render() {
        const {testNotes} = this.state;

        console.info(testNotes.length);

        return (
            <>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="form-row align-items-center">
                        <div className="col-auto col-7">
                            <label className="sr-only" htmlFor="inputSearch">Поиск</label>
                            <input type="text" value={this.state.value} required
                                   ref={ref => this.inputSearch = ref}
                                   onChange={e => this.setState({value: e.target.value})} name="search"
                                   className="form-control" id="inputSearch" placeholder="Введите текст для поиска"
                                   aria-describedby="emailHelp"/>
                            {/*<small id="emailHelp" className="form-text text-muted">Поиск заметок в системе.</small>*/}
                            <div className="invalid-feedback">
                                Заполниете поле!
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary form-control"
                                    onClick={this.search.bind(this)}>Поиск
                            </button>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-light form-control"
                                    onClick={this.clearSearch.bind(this)}>Сбросить
                            </button>
                        </div>
                    </div>
                </form>
                <hr/>
                <div className="shadow-lg p-3 bg-white rounded">Всего найдено записок&nbsp;
                    <span className="badge badge-primary">{this.state.notes.length}</span>
                </div>
                <br/>
                <ul className="list-group shadow-lg">
                    {this.state.notes.length === 0 ?
                        <li className="list-group-item">Пусто</li> : this.state.notes.map(note => (
                            <li key={note.id}
                                className="list-group-item note d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{note.title}</strong>
                                    <small>{note.date}</small>
                                </div>
                            </li>
                        ))}
                </ul>
                <br />
                <legend>Дополнитлеьные данные</legend>
                <ul className="list-group shadow-lg">
                    {testNotes.length === 0 ? '' : testNotes.map(note => (
                        <li key={note.id} className="list-group-item">
                            <div>
                                <strong>{note.title}</strong>
                                <small>{note.date}</small>
                            </div>
                        </li>
                    ))}
                </ul>
                <br/>
                <Pagination>{this.state.pagination}</Pagination>
            </>
        )
    }
}