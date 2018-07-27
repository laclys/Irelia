import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button} from './style'
import { actionCreators } from './store'

class Login extends PureComponent {

  render() {
    const { loginState, login } = this.props
      return !loginState ? (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" innerRef={(input) => {this.account = input}} />
            <Input placeholder="密码" type="password" innerRef={(input) => {this.password = input}} />
            <Button onClick={() => login(this.account, this.password)} >Login</Button>
          </LoginBox>
        </LoginWrapper>
      ) : <Redirect to='/' />
  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    console.log(accountElem.value, passwordElem.value)
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login)