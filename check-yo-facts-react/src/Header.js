import React, { Component } from 'react';
import Logo from './Logo';
import Title from './Title';
import Settings from './Settings';

// Header attributes
    // logo -- refers to the logo position
    // title -- header title
    // settings -- settings icon visible or not

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            logo: this.props.logo,
            title: '',
            settings: false
        }
    }
    
    render() {
        if(this.logo === 'center') {
            return <Logo slogan={false} position='center' />
        } else {
            return <Logo slogan={false} position='left'/>
        }
    }
}

export default Header;