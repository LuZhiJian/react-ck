import React from 'react'
import './index.less'

class Header extends React.Component {
  render () {
    return (
      <header>欢迎进入{this.props.name}的世界</header>
  	)
  }
}

export default Header


