import React from 'react';

export class TitleParticipants extends React.Component {

    render() {
        let participants = this.props.participants || [];
        participants = participants.map((participant, index) => {
            return (
                <tr key={index}>
                    <td>{participant.Name}</td>
                    <td>{participant.ParticipantType}</td>
                    <td>{participant.RoleType}</td>
                    <td>{participant.IsOnScreen ? 'Yes' : 'No'}</td>
                    <td>{participant.IsKey ? 'Yes' : 'No'}</td>
                </tr>
            )
        });

        return (
            <div>
                <h5 className="card-title">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    Participants
                </h5>
                <div className="set-max-height">                                      
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Role</th>
                                <th>Is On Screen</th>
                                <th>Is Key</th>
                            </tr>
                        </thead>
                        <tbody>
                            {participants}
                        </tbody>
                    </table>
                </div>
            </div>
            )
    }
}