import React from 'react';
import Navbar from './navbar'; 

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
            <h1>CourtWatch</h1>
            </React.Fragment>
        )
    }
}