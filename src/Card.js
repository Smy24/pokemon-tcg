import React, {Component} from 'react';
import './Card.css';

const pokemon = require('pokemon');
const baseStats = require('pokemon-base-stats')
const URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Card extends Component {
    render() {
        var id = rng();
        var src = URL.concat(id, '.png');
        var stats = baseStats.getById({id: num});
        var total = stats.reduce((a,b) => a + b, 0);
        return(
            <div className="Card">          
                <img className="Card-img" src={src} alt="card"/>
                <h2 className="Card-name">{pokemon.getName(num)}</h2>
                <div className="Card-row row">
                    <div className="col span-1-of-6">HP</div>
                    <div className="col span-1-of-6">Atk.</div>
                    <div className="col span-1-of-6">Def.</div>
                    <div className="col span-1-of-6">Sp.A</div>
                    <div className="col span-1-of-6">Sp.D</div>
                    <div className="col span-1-of-6">Speed</div>
                </div>
                <div className="Card-row row">
                    <div className="col span-1-of-6">{stats[0]}</div>
                    <div className="col span-1-of-6">{stats[1]}</div>
                    <div className="col span-1-of-6">{stats[2]}</div>
                    <div className="col span-1-of-6">{stats[3]}</div>
                    <div className="col span-1-of-6">{stats[4]}</div>
                    <div className="col span-1-of-6">{stats[5]}</div>
                </div>
                <p className="Card-total">Total: {total}</p>
            </div>
        );
    }
}

var num;
function rng() {
    num = Math.floor(Math.random()*720)+1;
    var rng = num;
    rng = (rng + '');
    if(num < 10) {
        rng = rng.replace (/^/,'00');  
    }else if(num < 100) {
        rng = rng.replace (/^/,'0');  
    }
    return rng;
}

export default Card;