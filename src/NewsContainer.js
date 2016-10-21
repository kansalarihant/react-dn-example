import React from 'react';
import NewsList from './NewsList';

class NewsContainer extends React.Component{
  render(){
    var posts = this.props.PostList.map(newsDetail => {
        return (
          <NewsList
            key={newsDetail.id}
            increaseVote = {this.props.increaseVote}
            {...newsDetail}
          />
        );
    });
    return(
      <div id="page-main-content" className="wrap paded">
     <div id="page-main-content-inner" role="main">
       <div className="montana-list" id="top-stories-list">

         <ul className="montana-list-items">
          {posts}       
            </ul>
       </div>
     </div>
   </div>
    )
  }
}

export default NewsContainer;
