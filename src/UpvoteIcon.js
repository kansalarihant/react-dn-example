import React from 'react';

class UpvoteIcon extends React.Component {
     constructor(props){
    super(props);
    this.incrementVote = this.incrementVote.bind(this);
  }

  incrementVote(){
      this.props.increaseVote(this.props.id);
  }


    render() {
        return (
          <div className = "list-story-grouper list-story-upvote-grouper">
            <button type = "button" className = "story-upvote-button toggle-login" onClick={this.incrementVote}>
            <svg aria-label = "up-arrow" className = "upvote-up-arrow" height = { 7 }  id = "svg-up-arrow" role = "img" version = "1.1" viewBox = "0 0 11 7" width = { 11 } >
            <path d = "m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96"/>
            </svg> 
            <span className="story-upvote-button-number unvoted-number">{this.props.upvotes}</span >
            </button> 
             </div>
        );
    }
}

export default UpvoteIcon;
