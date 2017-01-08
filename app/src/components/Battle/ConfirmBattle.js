import React, { Component } from 'react';
import Battle from './Battle';
import Loading from '../Loading';
import githubHelper from '../../utils/githubHelper';

export default class ConfirmBattle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            playersInfo: []
        }
    }

    componentDidMount() {
        const { playerOne, playerTwo } = this.props.location.query;

        githubHelper
        .getPlayerInfo([playerOne, playerTwo])
        .then(function(players) {
            this.setState({
                isLoading: false,
                playersInfo: players
            })
        }.bind(this))
    }

    onInitialBattle() {
        const { playersInfo } = this.state;
        const { router } = this.props;

        router.push({
            pathname: '/results',
            state: {
                playersInfo
            }
        })
    }

    render() {
        const { isLoading, playersInfo } = this.state;

        return (
            <div>
                {
                    isLoading 
                        ? <Loading /> 
                        : <Battle 
                            playersInfo={playersInfo} 
                            onInitialBattle={this.onInitialBattle.bind(this)}
                        />
                }
            </div>
        )
    }
}