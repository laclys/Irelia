import React from 'react'
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

const getListArea = (show) => {
  if (show) {
    return (
      <SreachInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SreachInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => (
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
            in={props.focused}
            classNames="slide"
          >
            <NavSearch
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
              className={props.focused ? 'focused' : ''}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
          {getListArea(props.focused)}
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']) // 等价state.get('header').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)