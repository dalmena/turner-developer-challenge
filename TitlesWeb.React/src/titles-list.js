import React from 'react';

export class TitlesList extends React.Component {
    constructor() {
        super();

        this.state = {
            titles: []
        }
    }

    componentDidMount() {

        console.log('teste');
        fetch('http://localhost:63039/titles')
            .then(results => {
                console.log("results", results);

                return results.json();
            }
            )
            .then(
            data => {
                console.log(data);
                let titles = data.map(title => {
                    console.log("title", title);
                    return (
                        <tr>
                            <td>{title.TitleId}</td>
                            <td>{title.TitleName}</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>sit</td>
                        </tr>
                    )
                })

                this.setState({ titles: titles });
            },
            (err) => console.log("error: ", err)
            );

    }

    render() {
        return (
            <div>
                <h2>Titles List</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
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