import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './CSRouting.css';
import './Bootstrap.css';
import batman from './img/batman.png';
import jason from './img/jason.png';

const characters = {
    "batman": batman,
    "jason": jason
}

function Character({match}){
    const imgUrl = characters[match.params.character];
    return <img src={imgUrl} />;
}

const Dashboard = () => (
    <div>
        <div style={{width:'400px', height:'400px'}}>
            <div className="cell">   
                <Route path="/top/left/:character" component={Character} />
            </div>
            <div className="cell">
                <Route path="/top/right/:character" component={Character} />
            </div>
            <div className="cell">
                <Route path="/bottom/left/:character" component={Character} />
            </div>
            <div className="cell">
                <Route path="/bottom/right/:character" component={Character} />
            </div>
        </div>
    </div>
);

function CSRouting(){
    return(
        <BrowserRouter>
            <div className="row">
                <aside className="col-4">
                    {Object.keys(characters).map(name =>
                        ['/top/left/', '/top/right/', '/bottom/left/', '/bottom/right/'].map(corner => <div><Link to={`${corner}${name}`} >{corner}{name}</Link></div> ) ) }
                </aside>
                <main className="col-8">
                    <Route path="/" component={Dashboard} />
                    <Route path="/top" render={() => <div>Something at the top</div>} />
                    <Route path="/bottom" render={() => <div>Something at the bottom</div>} />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default CSRouting;