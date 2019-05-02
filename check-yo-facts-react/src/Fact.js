import React, { Component } from 'react'
import decode from 'unescape'

class Fact extends Component {
    render() {
        return (
            <div>
                <p>{decode(this.props.question)}</p>
                <p>{decode(this.props.answer)}</p>
            </div>
        )
    }
}

export default Fact