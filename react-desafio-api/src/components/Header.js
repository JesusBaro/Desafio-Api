// catalogo de personagens
// aumentar tamanho da imagem com transition
// input com filter
import React, {Component} from 'react';
import * as S from "../Style.js";

export default class Api extends Component{

render (){
  return(
   <S.HeaderApi>
    <h1>{this.props.HeaderTitulo}</h1>
    <img src={this.props.LogoImage} alt="Logo Rick e Morty"/>
   </S.HeaderApi>
  )
}
}