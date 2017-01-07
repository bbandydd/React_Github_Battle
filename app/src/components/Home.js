import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron col-sm-12 text-center">
                <h1>Github Battle</h1>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </div>
        )
    }
}

export default Home;