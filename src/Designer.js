import React from 'react';
import DesignerNav from './DesignerNav';
import NewsContainer from './NewsContainer';
import NewsDetails from './data/NewsDetails';


class Designer extends React.Component {
	constructor(props){
    super(props);
    this.increaseVote = this.increaseVote.bind(this);
    this.sortByUpvotes = this.sortByUpvotes.bind(this);

    this.state = {
      PostList : NewsDetails
    }
  }

  increaseVote(id){
  
    var PostList = this.state.PostList.slice(0).map(newsItem => Object.assign({},newsItem));

    var newsDetails = PostList.find(newsDetails => newsDetails.id === id);
    
    

    newsDetails.Upvotes++;

    this.setState({
      PostList
    });
  }

  sortByUpvotes(){
    var PostList = this.state.PostList.slice(0).map(newsDetails => Object.assign({},newsDetails));

    function compare(a,b){
      if (a.Upvotes > b.Upvotes)
        return -1;
      if (a.Upvotes < b.Upvotes)
        return 1;
      return 0;
    }

    PostList.sort(compare);

    this.setState({
      PostList
    });
  }
  render() {
    return (
    <div className="stories-index">
      <DesignerNav sortByUpvotes={this.sortByUpvotes}/>
      <NewsContainer PostList={this.state.PostList} increaseVote={this.increaseVote} />
    </div>
    );
  }
}

export default Designer;
