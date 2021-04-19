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
`

export const Title = styled.img`
width: 15em;
padding: 20px;
`

export const StyledButton = styled(Button)`
width: 25%;
font-size: 10em;
`