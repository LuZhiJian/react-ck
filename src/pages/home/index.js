import React from 'react'
import './index.less'
import Svg from "@components/SvgIcon";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="toolbar">
          <span className="place">
            <span>全国</span>
            <Svg iconName="down" fill="#333" iconClass="icon-down" />
          </span>
          <form className="search">
            <button>
              <Svg iconName="search" fill="#999" iconClass="icon-search" />
            </button>
            <input type="search" placeholder="搜索" />
          </form>
        </div>
      </div>
    )
  }
}

export default Home;
