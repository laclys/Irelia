import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active" >首页</NavItem>
          <NavItem className="left" >下载App</NavItem>
          <NavItem className="right" >登陆</NavItem>
          <NavItem className="right" >
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
                className={this.props.focused ? 'focused' : ''}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting" >
            <i className="iconfont" >&#xe601;</i>
            写文章
          </Button>
          <Button className="reg" >注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)