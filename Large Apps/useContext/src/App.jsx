import React from 'react';
import User from './user';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <h3>Parent Component</h3>
                <User />
            </div>
        )
    }
} 