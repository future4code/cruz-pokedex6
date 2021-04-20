import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const HeaderContainer = styled.header`
height: 10%;
background-color: #00e5ff;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 20px;
border-bottom: 4px solid black;
position: relative;
`
export const Logo = styled.img`
  height: 60px;
  position: absolute;
  bottom: -30px;
  left:50%;
  margin-left: -30px;
  @media (max-width: 450px){
    display: none;
  }
`

export const Menu = styled.div`
  width: 30vw;
  min-width: 300px;
  background-color: pink;
`

export const Title = styled.img`
width: 12em;
padding: 20px;
@media (max-width: 450px){
    width: 5em;
}
`

export const StyledButton = styled(Button)`
@media (max-width: 450px){
    background-color: pink;
}
`

export const HomeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
`