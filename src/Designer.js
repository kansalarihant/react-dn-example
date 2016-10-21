import React from 'react';
import DesignerNav from './DesignerNav';
import NewsContainer from './NewsContainer';


class Designer extends React.Component {
  render() {
    return (
    <div className="stories-index">
      <DesignerNav />
      <NewsContainer />


    </div>
    );
  }
}

export default Designer;
