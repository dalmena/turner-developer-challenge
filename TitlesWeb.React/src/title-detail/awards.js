import React from 'react';

export class Awards extends React.Component {

    render() {
        let awards = this.props.awards || [];
        awards = awards.map((award, index) => {
            return (
                <tr key={index}>
                    <td>{award.Award}</td>
                    <td>{award.AwardCompany}</td>
                    <td>{award.AwardWon ? 'Yes' : 'No'}</td>
                    <td>{award.AwardYear}</td>
                </tr>
            )
        });

        return (
            <div>
                <h5 className="card-title">
                    <i className="fa fa-trophy" aria-hidden="true"></i>
                    Awards
                </h5>
                
                <br />
  
                <div className="set-max-height">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Won</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {awards}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}