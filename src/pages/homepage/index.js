import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './styled.css';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid" style={{paddingTop:"1rem"}}>
                <div className="container">
                    <h3>
                        Newest stories
                    </h3>
                </div>
            </div>
        );
    }
}
