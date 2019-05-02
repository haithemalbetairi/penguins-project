import React, { Component } from 'react';

class Logo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            position: this.props.position,
            slogan: this.props.slogan
        }
    }

    renderLogo = position => {
        return (
            <div className={position}>
                    <h1>Check</h1>
                    <h2>yo</h2>
                    <h1>Facts</h1>
                </div>
        )
    }

    render () {
        if(this.slogan) {
            return (
                <div className='center'>
                    <h1>Check</h1>
                    <h2>yo</h2>
                    <h1>Facts</h1>
                    <h2>a trivia game!</h2>
                </div>
            )
        } else if(this.position === 'left') {
            return this.renderLogo('left')
        } else {
            return this.renderLogo('center')
        }
    }
}

export default Logo