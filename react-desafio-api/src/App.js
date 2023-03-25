// aqui onde vou chamar os components
import React, {Component} from 'react';
import Header from "./components/Header.js"
import ApiComponent from "./components/apiComponent.js";
import * as S from "./Style.js";

export default class Api extends Component{
render (){
  return(
    <S.Main>
    <S.GlobalStyle/>
    <Header
    LogoImage="https://nothingbutgeek.com/wp-content/uploads/2017/06/RAM_LOGO_FINAL.jpg"
     HeaderTitulo = "Catálogo"
     />
    <ApiComponent/>
{/* -------------------- */}


    </S.Main>
  )
}
}