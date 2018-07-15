import * as constant from './constants'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case constant.SEARCH_FOCUS:
      return state.set('focused', true)
    case constant.SEARCH_BLUR:
      return state.set('focused', false)
    case constant.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constant.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constant.CHANGE_PAGE:
      return state.set('page', action.page)
    case constant.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    default:
      return state
  }
}