import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                {React.cloneElement(this.props.children)}
            </div>
        )
    }
}

export default App;