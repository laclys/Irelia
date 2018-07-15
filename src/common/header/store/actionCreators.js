import * as constant from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
  type: constant.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constant.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constant.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: constant.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constant.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: constant.CHANGE_PAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('err~')
    })
  }
}