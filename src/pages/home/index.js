import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <header>我是头部</header>
        <div className="home-content">
          <a href="#/detail/1234">详情页</a>
        </div>
        <footer>我是底部</footer>
      </div>
    )
  }
}

export default Home;
