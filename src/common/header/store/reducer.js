import * as constant from './constants'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case constant.SEARCH_FOCUS:
      return state.set('focused', true)
    case constant.SEARCH_BLUR:
      return state.set('focused', false)
    case constant.CHANGE_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}