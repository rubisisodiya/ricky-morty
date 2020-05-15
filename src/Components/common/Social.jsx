import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export class Social extends Component {
    
    render() {
        return(
            <div className='social'>
                <SocialIcon url='https://www.linkedin.com/in/marcos-frutos-3a023385/' target="_blank" bgColor='#000' fgColor='#fff' style={{ height: 30, width: 30 }}/>
                <SocialIcon url='https://github.com/Marfru/ricky-morty' target="_blank" bgColor='#000' fgColor='#fff' style={{ height: 30, width: 30, margin: 10 }}/>
            </div>
        );
    }
}

export default Social;