import React, { Component } from 'react';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }
    }

    render() {
        const { route } = this.props;

        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
                <h1>{route.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.handleSubmitUser.bind(this)}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="Github UserName"
                                className="form-control"
                                value={this.state.userName} 
                                onChange={this.handleUpdateUser}/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button 
                                className="btn btn-block btn-success"
                                type="submit">
                                    Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    handleSubmitUser = (e) => {
        e.preventDefault();
        const userName = this.state.userName;
        const { router, routeParams } = this.props;

        this.setState({userName: ''});

        routeParams.playerOne 
        ? router.push({
            pathname: '/battle',
            query: {
                playerOne: routeParams.playerOne,
                playerTwo: userName
            }
        })
        : router.push(`/playerTwo/${userName}`)
    }

    handleUpdateUser = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
}

export default Player;