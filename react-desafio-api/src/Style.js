//estilização
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
`
export const Main = styled.main`
    background-color: black;
`
export const HeaderApi = styled.header`
    height: 20vh;
    display:flex;
    justify-content:center;
    align-items: center;
    @media (min-width: 200px) and (max-width: 501px){
        height: 30vh;
        flex-direction:column;
        justify-content:space-evenly;
        align-items: center;
    }
h1{
    color: red;
    font-size:3rem;
    font-family: 'Montserrat Alternates', sans-serif;
    color:white;
    font-weight:700;
}
img{
    width: 30vw;
    @media (min-width: 200px) and (max-width: 501px){
        width: 80vw;  
    }
}
`
export const SectionUlApi = styled.ul`
    display:flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
`
export const SectionCardApi = styled.section`
    width:25vw;
    height:65vh;
    margin:1rem;
    display:flex;
    justify-content: space-around;
    flex-direction:column;
    align-items: center;
    @media (min-width: 200px) and (max-width: 501px) {
        width:100%; 
        height: 50vh;
}
h3{
    text-align:center;
    flex-direction:row;
    font-weight:700;
    font-size:1.6rem;
    font-family: 'Montserrat Alternates', sans-serif;
    color:white;
}
div{
    width:70%;
    @media (min-width: 200px) and (max-width: 501px){
        width:90%;  
    }
}
li{
    list-style: none;
    font-size:0.9rem;
    text-align:left;
    font-family: 'Montserrat Alternates', sans-serif;
     color:white;
    @media (min-width: 200px) and (max-width: 501px){
        font-size:1.1rem;
     }
}
`
export const ImageCard = styled.img`
    width:14vw; 
    border-radius:10%;
    transition: ease-in 0.1s;
    &:hover{
        width:16vw; 
        box-shadow:grey 0.8rem 0.4rem 0rem 0rem;
 }
 @media (min-width: 200px) and (max-width: 501px){
    width:50vw; 
    border-radius:10%;
    transition: ease-in 0.1s;
    &:hover{
        width:52vw; 
        box-shadow: 0.8rem 0.4rem 0rem 0rem white;
    }
}
 `

export const Traco = styled.hr`
    color:white;
    width:30vh;
    @media (min-width: 200px) and (max-width: 501px){
        width:40vh; 
}`