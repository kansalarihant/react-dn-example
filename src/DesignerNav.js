import React from 'react';

class DesignerNav extends React.Component {
   constructor(props){
    super(props)
    this.sortUpvotes = this.sortUpvotes.bind(this);
  }

  sortUpvotes(){
    this.props.sortByUpvotes();
  }
  render(){
    return (
          <nav id="header-sub-navigation-container">
            <div className="wrap padded">
              <ul id="sub-navigation-list-items">
                <div id="sub-navigation-visible-items">
                  <li><a href="#" className="active" onClick={this.sortUpvotes}> Top </a>
                  </li>
                  <li><a href="#">Starred</a></li>
                </div>
              </ul>
            </div>
          </nav>

    )
  }
}
export default DesignerNav;
