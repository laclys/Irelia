import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem, MoreTopics } from '../style'

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')} >
                <img className="topic-pic" src={item.get('imgURL')} alt="item-pic"/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        <MoreTopics>更多热门专题 > </MoreTopics>
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)