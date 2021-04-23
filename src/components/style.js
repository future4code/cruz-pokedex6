import styled, { keyframes } from 'styled-components'

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
  @media (max-width: 450px){
    display: none;
  }
`

export const Menu = styled.div`
  width: 30vw;
  height: 100%;
  min-width: 300px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    margin: 1em;
  }
`

export const Title = styled.img`
width: 12em;
padding: 20px;
@media (max-width: 450px){
    width: 5em;
}
`

export const ErrorContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top:4%;
p{
  width: 50%;
  font-family: 'Arial';
  text-align: center;
}

`

export const MainContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top:4%;
`
// Style Pokemon Info//

export const GridArea = styled.div`
width: 100%;
height: 80vh;
display: grid;
grid-template-columns: 10% 20% 20% 30% 20%;
grid-template-rows: 5% repeat(4,20%) 5%;
grid-gap: 2%;
justify-content: rigth;

@media(max-width: 800px) {
width:100%;
height: max-content;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
}
`

export const BoxPokemonName = styled.div`
display: grid;
grid-row: 2/6;
grid-Column:1/2;
text-align: center;

@media(max-width: 800px) {
display: flex;
width: 20%;
position: fixed;
margin-top:20%;
}
`

export const PokemonName = styled.h1`
writing-mode: vertical-rl;
text-orientation: upright;
text-transform: uppercase;
position: relative;
text-shadow: 2px 2px 8px blue;
font-weight:bold;
@media (max-width:800px){
text-shadow: 2px 2px 4px blue;
}
`

export const BoxPicture1 = styled.div`
display: grid;
grid-column: 2/3;
grid-row: 2/3;
width: 50%;
border: 1px 2px solid blue;
box-shadow: 2px 4px 10px blue;
margin-left: auto;
margin-left: auto;

@media(max-width: 800px) {
display: flex;
position: relative;
width: auto;
height: min-content;
background-color:white;
margin-left: 25%;
margin-top:4%;
} 
`

export const BoxPicture2 = styled.div`
display: grid;
grid-column: 2/3;
grid-row: 3/4;
width:50%;
border: 1px 2px solid blue;
box-shadow: 2px 4px 10px blue;
@media(max-width: 800px) {
display: flex;
position: relative;
width: auto;
height: min-content;
background-color:white;
margin-top:4%;
margin-left: 8%;
} 
`

export const BoxPicture3 = styled.div`
display: grid;
grid-column: 2/3;
grid-row: 4/5;
width:50%;
border: 1px 2px solid blue;
box-shadow: 2px 4px 10px blue;
margin-left:auto;

@media(max-width: 800px) {
  display: flex;
  position: relative;
  width: auto;
  height: min-content;
  background-color:white;
  margin-left: 25%;;
  margin-top:4%;
} 
`

export const BoxPicture4 = styled.div`
display: grid;
grid-column: 2/3;
grid-row: 5/6;
width:50%;
border: 1px 2px solid blue;
box-shadow: 2px 4px 10px blue;
@media(max-width: 800px) {
  display: flex;
  position: relative;
  width: auto;
  height: min-content;
  background-color:white;
  margin-left:2px;
  margin-top:4%;
  margin-left:8%;
} 
`


export const BoxPower = styled.div`
display: grid;
grid-column: 3/4;
grid-row: 2/6;
width: 100%;

@media(max-width: 800px) {
  width:60%;
  height: min-content;
  background-color:white;
  margin-left:25%;
  margin-top:4%;
} 
`

export const BoxType = styled.div`
display: grid;
grid-column: 4/5;
grid-row: 2/3;
width:100%;

@media(max-width: 800px) {
  display:flex;
  flex-direction:row;
  width:60%;
  min-height: 60px;
  background-color:white;
  margin-left:25%;
  margin-top:4%;
}
`

export const BoxAttack = styled.div`
display: grid;
grid-column: 4/5;
grid-row: 3/6;
width: 100%;

@media(max-width: 800px) {
  width:60%;
  height: min-content;
  background-color:white;
  margin-left:25%;
  margin-top:4%;
  margin-bottom:4%;
}

`
export const TituloCard = styled.div`
height: 6vh;
text-align: center;
@media(max-width:800px) {
  background-color:#00e5ff;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: left;
}

`

export const H1 = styled.h1`
position: relative;
margin-top: 0;
text-shadow: 1px 2px 4px blue;
@media(max-width: 800px) {
  font-size:20px;
  line-height:1;
  margin-top:4%;
  text-align:center;
} 
`

export const ItemCard = styled.div`
display:grid;
margin-left: 20%;
line-height: 2em;
@media(max-width: 800px) {
  line-height: 0.2;
  margin-top:1%;
  margin-left: 10%;
} 

`

//Battle Card Style//

export const BattleCardContainer = styled.div`
width: 200px;
height: 300px;
border: 1px  2px solid blue;
box-shadow: 2px 4px 10px blue;
flex-direction: column;
align-items: center;
margin: 20px;`



export const BattleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-transform: uppercase;
div{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
`

export const SecondPokemonContainer = styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width: 450px){
  flex-direction: column;
}
`
