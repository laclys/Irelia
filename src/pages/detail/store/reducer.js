import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  title: `有天，我终于等到了那个人`,
  content: `<img src="https://upload-images.jianshu.io/upload_images/2190281-bc603a40214d9fdf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700" alt=""/><p>还记得路上的风景美得让人窒息，有风，有水，有花，有草，有蓝天，有白云.....唯独没有看到我想要的东西，慢慢的，好像也顾不上悲伤了，只记得我要奔跑。</p><p>后来呢，总会有路边的小草跟我打招呼，也会有可爱的小树陪我一起玩，从天亮到天黑，一起笑，一起闹，白天会开心，黄昏会舍不得，我会记她们一辈子，可唯独不想停下来。</p><p>后来有一天，不怎么大的雨，不怎么吵闹的傍晚，只记得洒满夕阳的麦草里，静静地躺着一只受伤的小鸟，不由自主地，我竟放慢了脚步，有那么一瞬间，好像所有的记忆都被唤醒了，然后，那里面都是关于它的，雨大了，我却再也不想走了。</p>`
})

export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state
  }
}