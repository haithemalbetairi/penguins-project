import React, {Component} from 'react'
import HomeLogo from './HomeLogo'
import Fact from './Fact'

// Main views:
// showing home logo
// showing gameboard
// showing question/answer
// showing fact

// questions holds the questions after the api call

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: this.props.view,
            error: null,
            isLoaded: false,
            questions: []
        }
    }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10')
        .then(results => results.json())
        .then((data) => {
            console.log('got a response')
            console.log(data.results)
            this.setState({questions: data.results, isLoaded: true})
        })
    }   
    
    render() {
        console.log(this.state.questions)
        if(this.state.isLoaded) {
            return <Fact
            question={this.state.questions[0].question}
            answer={this.state.questions[0].correct_answer}/>
        } else {
            return <div></div>
        }
    }
}

export default Main