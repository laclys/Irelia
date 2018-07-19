import { fromJS } from 'immutable'


const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgURL: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '旅行·在路上',
      imgURL: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 3,
      title: '历史',
      imgURL: '//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 4,
      title: 'IT·互联网',
      imgURL: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 5,
      title: '手绘',
      imgURL: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 6,
      title: '故事',
      imgURL: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 7,
      title: '读书',
      imgURL: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
  ]
})

export default (state = defaultState, action) => {

  switch (action.type) {
    default:
      return state
  }
}