import React from 'react';


class NewsIcon extends React.Component {
    render() {
        return (

<div className="list-story-grouper list-story-upvote-grouper"><button aria-label="Upvote this story to 13 points" className="story-upvote-button toggle-login" itemScope="true" itemType="../schema.org/LikeAction.html"><meta itemProp="name" content="Upvote &quot;Join Netflix and HTC Creative Labs at Design on the Rocks | Thursday Oct 27 | @ The Piranha Shop, Seattle WA&quot;" /><meta itemProp="url" content="stories/75738-join-netflix-and-htc-creative-labs-at-design-on-the-rocks--thursday-oct-27---the-piranha-shop-seattle-wa.html" /><svg aria-label="up-arrow" className="upvote-up-arrow" height={7} id="svg-up-arrow" role="img" version="1.1" viewBox="0 0 11 7" width={11}><path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96" /></svg><span className="story-upvote-button-number unvoted-number">12</span><span className="story-upvote-button-number upvoted-number">13</span></button></div>
        )
    }
}

export default NewsIcon;
