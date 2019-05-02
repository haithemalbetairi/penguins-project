import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            showing: 'button'
        }
    }

    renderButton = () => {
        return (
            <button>Start</button>
        )
    }
    render() {
        return this.renderButton()
    }
}

export default Footer;