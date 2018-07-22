import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top; 30px;
  width: 625px;
  .banner-img {
    margin-top: 30px;
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
`
/**
 * Topic Component Style
 */

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px soild #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom:18px;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  color: #000;
  font-size: 14px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float:left;
    margin-right: 10px;
    height: 32px;
    width: 32px
  }
`
export const MoreTopics = styled.div`
  float: left;
  margin-left: 18px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #787878;
`

/**
 * List Component Style
 */

 export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px dolid #dcdcdc;
  img {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
 `

 export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    line-height: 18px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
 `

 export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer
 `


 /**
 * Recommend Component Style
 */

 export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
 `

 export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background:url(${(props) => props.imgURL});
  background-size: contain;
 `

 /**
 * Writer Component Style
 */
export const WriterWrapper = styled.div`
  width: 278px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 3px;

`