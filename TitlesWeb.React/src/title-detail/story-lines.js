import React from 'react';

export class StoryLines extends React.Component {

    render() {
        let storylines = this.props.storylines || [];
        storylines = storylines.map((storyline, index) => {
            return (
                <tr key={index}>
                    <td>{storyline.Language}</td>
                    <td>{storyline.Description}</td>
                    <td>{storyline.Type}</td>
                </tr>
            )
        });

        return (
            <div >
                <h5 className="card-title">
                    <i className="fa fa-archive" aria-hidden="true"></i>
                    Story Lines
                </h5>
                <div className="set-max-height">                      
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Language</th>
                                <th>Description</th>
                                <th>Type</th>
                            </tr>
                            </thead>
                        <tbody>
                            {storylines}
                        </tbody>
                    </table>      
                </div>
            </div>
        )
    }
}