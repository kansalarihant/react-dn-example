import React from 'react';

class StarIcon extends React.Component {
    render() {
        return ( 
            <div className="list-story-grouper list-story-star-grouper">
            <a href = "#"
            className ="story-star-button" >
            <svg aria-label ="star"
            height = { 15 }
            id = "svg-star"
            role = "img"
            version = "1.1"
            viewBox = "0 0 15 15"
            width = { 15 } >
            <path d = "m7.5 11.453l4.635 2.797-1.23-5.273 4.095-3.547-5.393-.457-2.108-4.973-2.108 4.973-5.393.457 4.095 3.547-1.23 5.273 4.635-2.797" / >
            </svg> 
            </a>
             </div>
        );
    }
}

export default StarIcon;
