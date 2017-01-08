import React, { Component } from 'react';
import Loading from '../Loading';
import Results from './Results';
import githubHelper from '../../utils/githubHelper';

export default class InitialResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            scores: []
        }
    }

    componentDidMount() {
        const { playersInfo } = this.props.location.state;
        githubHelper
        .battle(playersInfo)
        .then(scores => {
            this.setState({
                isLoading: false,
                scores
            })
        });
    }

    render() {
        const { isLoading, scores } = this.state;
        const { playersInfo } = this.props.location.state;

        return (
            <div>
                {
                    isLoading 
                        ? <Loading />
                        : <Results 
                            playersInfo={playersInfo}
                            scores={scores}
                        />
                }
            </div>
        )
    }
}