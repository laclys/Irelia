import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
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
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handlePageChange } = this.props
    const jsList = list.toJS()
    const pageList = []

    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={i} >{ jsList[i] }</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SreachInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handlePageChange(page, totalPage, this.spinIcon )}
            >
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SreachInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, handleInputBlur, handleInputFocus, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
      <Nav>
        <NavItem className="left active" >首页</NavItem>
        <NavItem className="left" >下载App</NavItem>
        {
          login ? <NavItem className="right" onClick={() => logout()} >退出</NavItem> :
            <Link to='/login'>
              <NavItem className="right" >登陆</NavItem>
            </Link>
        }
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
              className={focused ? 'focused' : ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe631;</i>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0 ) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handlePageChange(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      originAngle ? originAngle = parseInt(originAngle, 10) : originAngle = 0
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Header)