import React from 'react';

export class OtherNames extends React.Component {

    render() {
        let othernames = this.props.othernames || [];
        othernames = othernames.map((othername, index) => {
            return (
                <tr key={index}>
                    <td>{othername.TitleName}</td>
                    <td>{othername.TitleNameLanguage}</td>
                    <td>{othername.TitleNameType}</td>
                </tr>
            )
        });

        return (
            <div >
                 <h5 className="card-title">
                    <i className="fa fa-asterisk" aria-hidden="true"></i>
                    Also known as
                </h5> 
                <div className="set-max-height">               
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Language</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                            {othernames}
                        </tbody>
                    </table>   
                </div>
            </div>
        )
    }
}