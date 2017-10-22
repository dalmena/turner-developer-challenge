import React from 'react';
import { TitlesList } from './titles-list';
import { TitleDetail } from './title-detail';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class Dashboard extends React.Component {

  constructor() {
    super();

    this.state = {
      searchText: ""
    }
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a className="navbar-brand" href="#titles">Turner Developer Challenge</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to={"/titles/" + escape(this.state.searchText)}>Titles <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About us </Link>
                  </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0" onSubmit={(e) => { e.preventDefault(); } }>
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.updateSearch.bind(this)} />
                  <Link className="btn btn-outline-success my-2 my-sm-0" to={"/titles/" + escape(this.state.searchText)}>Search</Link>
                </form>
              </div>
            </nav>
          </header>
          <main role="main" className="container">
            <Route exact path="/" component={TitlesList} />
            <Route path="/about" component={TitlesList} />
            <Route exact path="/titles" component={TitlesList} />
            <Route path="/titles/:search" component={TitlesList} />
            <Route path="/details/:titleId" component={TitleDetail} />
          </main>
        </div>
      </Router>
    );
  }
  
  updateSearch(event) {
    this.setState({ searchText: event.target.value });
  }

}