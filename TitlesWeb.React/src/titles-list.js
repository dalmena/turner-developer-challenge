import { Config } from './config';
import React from 'react';
import {
    Link
} from 'react-router-dom'


export class TitlesList extends React.Component {
    constructor() {
        super();

        this.state = {
            titles: [],
            search: ""
        }
    }

    componentWillReceiveProps(newProps) {
        this.loadData(newProps.match.params.search || "");
    }

    async loadData(search) {
        try {

            let results = await fetch(Config.webapiUrl + 'titles?search=' + escape(search))
            let data = await results.json();
            let titles = data.map(title => {
                return (
                    <tr key={title.TitleId} className="clickable">
                        <td>{title.TitleId}</td>
                        <td>
                            <Link to={"/details/" + escape(title.TitleId)}>{title.TitleName}</Link>
                        </td>
                        <td>{title.ReleaseYear}</td>
                    </tr>
                )
            })
            if (titles.length === 0) this.setNoDataFound();
            else this.setState({ titles: titles });
        
        } catch (error) {
            console.log("error: ", error)
            this.setNoDataFound()
        }
    }

    componentDidMount() {
        this.loadData(this.props.match.params.search || "");
    }

    setNoDataFound() {
        this.setState({
            titles: (
                <tr>
                    <td colSpan="3">No data found.</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                <h3>Movies list</h3>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Title ID</th>
                                <th>Title Name</th>
                                <th>Year of Release</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.titles}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}