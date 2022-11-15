import React, { Component } from "react";

import ptng1 from '../assets/images/paintings/ptng1.webp';
import ptng2 from '../assets/images/paintings/ptng2.webp';
import ptng3 from '../assets/images/paintings/ptng3.webp';
import ptng4 from '../assets/images/paintings/ptng4.webp';
import ptng5 from '../assets/images/paintings/ptng5.webp';
import ptng6 from '../assets/images/paintings/ptng6.webp';
import ptng7 from '../assets/images/paintings/ptng7.webp';

class PaintingsPage extends Component {
  state = {};
  render() {
    return (
      <div className="App-text">
        <h1>Paintings</h1>
        
        <p>When I was a kid my mother used to go to art classes
        where she learned to make oil paintings. I was fascinated as a child to
        see bottles of linseed oil and turpentine, although my own artistic
        pursuits started much later. I started painting in college when my
        friend, who is a hyperrealist painter, encouraged me to paint. Since
        then painting has been an activity that slows my inner rhythm and lets
        me express the areas of my mind that is not stimulated by other art
        forms.
        </p>
        <br/>
        <img src={ptng1} />
        <br/>
        <img src={ptng2} />
        <br/>
        <img src={ptng3} />
        <br/>
        <img src={ptng4} />
        <br/>
        <img src={ptng5} />
        <br/>
        <img src={ptng6} />
        <br/>
        <img src={ptng7} />
      </div>
    );
  }
}

export default PaintingsPage;
