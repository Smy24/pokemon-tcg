import React, {Component} from 'react';
import './Deck.css';
import Card from './Card';
import './grid.css';

class Deck extends Component {
    render() {
        return(
            <div className="Deck">
                <div className="col span-1-of-4 box">
                    <Card/>
                </div>
                <div className="col span-1-of-4 box">
                    <Card/>
                </div>
                <div className="col span-1-of-4 box">
                    <Card/>
                </div>
                <div className="col span-1-of-4 box">
                    <Card/>
                </div>          
            </div> 
        );
    }
}

export default Deck;