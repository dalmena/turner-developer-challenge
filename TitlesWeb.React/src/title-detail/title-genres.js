import React from 'react';

export class TitleGenres extends React.Component {

    render() {
        let genres = this.props.genres || [];
        genres = genres.map((genre, index) => {
            return (
                <button key={index} type="button" className="btn btn-info margin-sides">
                    {genre.Name}
                </button>
            )
        });

        return (
            <div>
                <h5 className="card-title">
                    <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
                    Genres
                </h5>
                <div className="alert alert-secondary" role="alert">
                    {genres}
                </div>
            </div>
        )
    }
}