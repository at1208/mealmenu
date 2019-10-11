import React, { Component } from 'react';
import Stepper from 'react-stepper-horizontal';

class Home extends Component {

  state = {
   
  }

  render(){
    return <div className="container  text-center ">


     <div>
     <Stepper
         steps={ [{title: '18th Nov 2019'}, {title: '19th Nov 2019'}, {title: '20th Nov 2019'}, {title: '21st Nov 2019'} , {title: '22nd Nov 2019'}] }
         activeStep={0}
         activeColor='#e53935'
         completeColor='#ffee58'
         activeTitleColor='#8d6e63'
         completeTitleColor='#607d8b'
         circleFontColor='#1a237e'
         size={40}
         circleFontSize={20}
         titleFontSize={20}
         circleTop={50}
         titleTop={30}

          />
   </div>

    </div>
  }
}
export default Home;
