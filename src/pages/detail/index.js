import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { } from './store'
import { actionCreators } from '../detail/store';

class Detail extends Component {

  componentDidMount() {
    this.props.getDetailData()
  }

  render() {
    return (
      <DetailWrapper>
        <Header>
          {this.props.title}
        </Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => ({
  getDetailData() {
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail)