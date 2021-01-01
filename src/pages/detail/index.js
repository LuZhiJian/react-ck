import React from 'react';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  render() {
    return (
      <div className="detail-wrapper">
        详情<a href="#/">返回首页</a>
        <Link to="/">返回首页2</Link>
      </div>
    )
  }
}

export default Detail;
