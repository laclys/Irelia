import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import { actionCreators } from './store'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SreachInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
      } from './style'

class Header extends Component {

  getListArea () {
    const { focused, list } = this.props
    if (focused) {
      return (
        <SreachInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map(item => {
                return <SearchInfoItem key={ item } >{ item }</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SreachInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, handleInputBlur, handleInputFocus } = this.props
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
            in={focused}
            classNames="slide"
          >
            <NavSearch
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={focused ? 'focused' : ''}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
          { this.getListArea() }
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

const mapStateToprops = (state) => {
  return {
    focused: state.getIn(['header', 'focused']), // 等价state.get('header').get('focused')
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Header)