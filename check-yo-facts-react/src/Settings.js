import React, { Component } from 'react';
import settings from './assets/settings-icon.png'
import './App.css'

class Settings extends Component {
    render() {
        return <img className='Settings' src={settings}></img>
    }
}

export default Settings;