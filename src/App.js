import React, { Component } from 'react';
import About from './components/about';
import Shop from './components/shop'
import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (<motion.h1 animate={{scale: 1.1, rotateZ: 360}}>Home!</motion.h1>)
}

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <div style={{textAlign: 'center', fontFamily: 'Arial'}}>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/shop' component={Shop} />
                    </Switch>
                    
                
                    
                </div>
            </Router>
            
         );
    }
}


    

 
export default App;
