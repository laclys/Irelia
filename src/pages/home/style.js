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
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`
/**
 * Topic Component Style
 */

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
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