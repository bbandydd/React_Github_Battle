import React, { Component } from 'react';

const styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: '55px'
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '30px',
    }
}

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading',
            speed: 300
        }
    }

    componentDidMount() {
        const { text, speed } = this.state;
        const originText = text;
        const stopper = `${originText}...`;

        this.interval = setInterval(function() {
            const { text } = this.state;

            return text === stopper 
                ? this.setState({text: originText})
                : this.setState({text: `${text}.`})
        }.bind(this)
        , speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        const { text } = this.state;
        return (
            <div style={styles.container}>
                <p style={styles.content}>
                    {text}
                </p>
            </div>
        )
    }
}