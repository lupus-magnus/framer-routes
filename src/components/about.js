import React, { Component } from 'react';
import { motion } from 'framer-motion';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <motion.h1
            initial={{y:-200}}
            animate={{y:0}}
            >About</motion.h1>
         );
    }
}
 
export default About;