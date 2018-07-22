import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <Fragment>
        {
          list.map(item => {
            return (
              <ListItem key={item.get('id')} >
                <img src={item.get('imgURL')} alt="list-item-pic"/>
                <ListInfo>
                  <h3 className='title' >{item.get('title')}</h3>
                  <p className='desc' >{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore>更多文字</LoadMore>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List)