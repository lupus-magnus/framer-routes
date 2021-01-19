import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Shop extends Component {
    state = {  }
    render() { 
        return ( 
            <motion.h1
            initial={{x:'-100vw'}}
            animate={{x:0}}
            >Shop!</motion.h1>
         );
    }
}
 
export default Shop;