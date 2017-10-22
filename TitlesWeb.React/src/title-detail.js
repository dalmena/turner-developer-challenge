import React from 'react';

export class TitleDetail extends React.Component {
    constructor({match}) {
        super();

        this.state = {
            title: {},
            titleId: match.params.titleId
        }
    }

    componentDidMount() {
        this.loadTitleDetail(this.state.titleId);
    }

    loadTitleDetail(titleId) {
        console.log("titleId", titleId);

        fetch('http://localhost:63039/title/' + escape(titleId))
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ title: data });
                // let titles = data.map(title => {
                //     return (
                //         <tr key={title.TitleId} className="clickable">
                //             <td>{title.TitleId}</td>
                //             <td>
                //                 <Link to={"/details/" + escape(title.TitleId)}>{title.TitleName}</Link>
                //             </td>
                //             <td>{title.ReleaseYear}</td>
                //         </tr>
                //     )
                // })
                // if (titles.length === 0) this.setNoDataFound();
                // else this.setState({ titles: titles });

            },
            (err) => {
                console.log("error: ", err)
            }
            );
    }

    render() {
        return (
            <div className="container">

                <div className="row">

                    <div className="form-group col-md-12">
                        <label>Title:</label>
                        <span>{this.state.title.TitleName}</span>
                    </div>

                    <div className="form-group col-md-3">
                        <label>Release Year:</label>
                        <span>{this.state.title.ReleaseYear}</span>
                    </div>

                    <div className="form-group col-md-9">
                        <label>Processed Date:</label>
                    </div>

                    <div className="form-group col-md-6">
                        <table className="table table-striped">
                            <caption>List of participants</caption>
                            <thead>
                                <tr>
                                    <th>Participant</th>
                                    <th>Col 2</th>
                                    <th>Col 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dado col 1</td>
                                    <td>Dado col 2</td>
                                    <td>Dado col 3</td>
                                </tr>
                                <tr>
                                    <td>Dado col 1</td>
                                    <td>Dado col 2</td>
                                    <td>Dado col 3</td>
                                </tr>
                                <tr>
                                    <td>Dado col 1</td>
                                    <td>Dado col 2</td>
                                    <td>Dado col 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}