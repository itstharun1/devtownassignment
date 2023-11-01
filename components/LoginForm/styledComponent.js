import styled from 'styled-components'

export const Para = styled.p`
  font-family: 'Roboto';
  margin-top: 36px;
  font-size: 14px;
  line-height: 28px;
  color: #64748b;
  margin-bottom: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 0;
    text-align: left;
  }
`

export const H1 = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  margin-top: 0px;
  font-size: 36px;
  color: #1e293b;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 46px;
    text-align: left;
  }
`
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 50px;
  width: 90%;
  max-width: 1110px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 96px;
  }
`
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
