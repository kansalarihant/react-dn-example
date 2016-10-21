import React from 'react';
import UpvoteIcon from './UpvoteIcon';
import StarIcon from './StarIcon';

class NewsList extends React.Component {
    render() {
        return (

            <li className = "story-list-item montana-list-item" >
            <div className = "list-story-badge-grouper" > <a href = "badges/discussion.html" > <svg aria-label = "discussion-story-badge"
            height = { 51 }
            id = "svg-discussion-story-badge"
            role = "img"
            version = "1.1"
            viewBox = "0 0 51 51"
            width ={51} > <circle fill = "#dbe0e8"
            cx = { 26 }
            cy = { 26 }
            r = { 25 }
            />
            <path fill-rule="evenodd" d="m33.674 24.568c0 0-.106.329-1.101.963l-9.179 3.661c0 0-.056.113 0 .145 1.869 1.064 5.606 3.192 5.606 3.192l-3.209 5.621c0 0-.294.531.529.692.823.161 6.703.811 6.703.811 0 0-.555 2.115-4.02 2.5-3.468.384-5.213 0-5.213 0 0 0-.562 1.88.242 2.864.804.983-1.419 4.996-1.64 5.712.925.148 11.195 1.884 19.902-5.812 8.66-7.617 8.707-16.93 8.707-18.32 0-6.164-1.613-11.912-6.482-17.376 0 0-6.579 6.02-10.841 15.348m8.604 4.444c1.518 0 2.749-1.231 2.749-2.748 0-1.518-1.231-2.748-2.749-2.748-1.518 0-2.749 1.231-2.749 2.748 0 1.518 1.231 2.748 2.749 2.748m-26.755 7.434c0 0-5.859-8.905-6.228-14.708 0 0 17.596-7.774 24.19-19.573-1.773-.604-4.279-1.167-7.49-1.167-3.211 0-10.533.538-17.15 6.837-8.224 7.824-7.842 16.744-7.842 19.15 0 1.926.513 4.16.513 4.16 0 0 8.633 4.985 14.01 5.299" fill="#9099a7"/> 
            </svg>
            </a> 
            </div> 
            <UpvoteIcon id = {this.props.id}  upvotes={this.props.Upvotes}  increaseVote={this.props.increaseVote}>
            </UpvoteIcon>
            
            <div className="list-story-grouper list-story-main-grouper">
            <a href={this.props.url} alt={this.props.Content} className="montana-item-title" story_title={this.props.Content}> {this.props.Content} 
            <span className="list-story-domain"></span>
            </a>
        <div className="montana-item-meta">
        <a href="stories/75708-should-your-team-be-using-figma.html" className="list-story-comment-count">5
        comments</a><span className="montana-item-meta-bullet">•</span>
          <abbr className="list-story-time-ago time-ago" data-time={1476969696} title="2016-10-20T13:21:36Z">3 hours ago</abbr><span>from <a href="users/1721/chris-meyers.html" data-card={1721}> Xyz</a>, AL2 , Sapient</span>
          </div>
          </div>
         <StarIcon />

         </li>



        )
    }
}

export default NewsList;
