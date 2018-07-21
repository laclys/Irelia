import axios from 'axios'
import * as constant from './constants'

const changeHomeData = (result) => ({
  type: constant.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      dispatch(changeHomeData(res.data.data))
    })
  }
}