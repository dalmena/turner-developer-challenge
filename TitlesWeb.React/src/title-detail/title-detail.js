import { Config } from './../config';
import React from 'react';
import { Link } from 'react-router-dom';
import { TitleGenres } from './title-genres';
import { Awards } from './awards';
import { OtherNames } from './other-names';
import { StoryLines } from './story-lines';
import { TitleParticipants } from './title-participants';

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

        fetch(Config.webapiUrl + 'title/' + escape(titleId))
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ title: data });
            },
            (err) => {
                console.log("error: ", err)
            }
            );
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">   
                        <div className="row">
                            <h4 className="card-title col-10 margin-top-0">
                                <i className="fa fa-film" aria-hidden="true"></i> {this.state.title.TitleName}
                            </h4>
                            <div className="col-2">
                               <Link className="btn btn-primary col" to="/titles/"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div>
                            <strong>Release Year:</strong>
                            <span>{this.state.title.ReleaseYear}</span>
                        </div>
                        <div className="title-detail-tables">
                            <TitleGenres genres={this.state.title.TitleGenres} />
                            <Awards awards={this.state.title.Awards} />
                            <OtherNames othernames={this.state.title.OtherNames} />
                            <StoryLines storylines={this.state.title.StoryLines} />
                            <TitleParticipants participants={this.state.title.TitleParticipants} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}