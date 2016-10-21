import React from 'react';
import NewsList from './NewsList';

class NewsContainer extends React.Component{
  render(){
    return(
        <div className="montana-list" id="top-stories-list">
      <ul className="montana-list-items">
        <NewsList />
        <NewsList />
        <NewsList />
        </ul>
        </div>

    )
  }
}

export default NewsContainer;
