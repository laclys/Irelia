import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommennd extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map(item => {
            return <RecommendItem imgURL={item.get('imgURL')} key={item.get('id')} />
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommennd)