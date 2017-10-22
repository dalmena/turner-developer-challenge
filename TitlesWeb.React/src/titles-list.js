import React from 'react';

export class TitlesList extends React.Component {
    constructor() {
        super();

        this.state = {
            titles: []
        }
    }

    // shouldComponentUpdate = (nextProps, nextState) => this.props.search === "" || this.props.search !== nextProps.search;

    loadData(search) {
        //console.log("search", this.props.search);
        fetch('http://localhost:63039/titles?search=' + escape(search))
            .then(results => {
                return results.json();
            })
            .then(data => {
                let titles = data.map(title => {
                    return (
                        <tr key={title.TitleId} className="clickable" onClick={ () => this.loadDetail(title.TitleId) }>
                            <td>{title.TitleId}</td>
                            <td>{title.TitleName}</td>
                            <td>{title.ReleaseYear}</td>
                        </tr>
                    )
                })
                if (titles.length === 0) this.setNoDataFound();
                else this.setState({ titles: titles });
            },
                (err) => {
                    console.log("error: ", err)
                    this.setNoDataFound()    
                }   
            );
    }

    loadDetail(titleId) {
        console.log("titleId", titleId)
    }

    componentDidMount() {
        this.loadData("");
    }

    setNoDataFound() {
        this.setState({ titles: (
            <tr>
                <td colSpan="3">No data found.</td>
            </tr>
        )});
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