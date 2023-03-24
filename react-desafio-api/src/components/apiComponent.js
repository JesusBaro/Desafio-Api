//importar api
import React,{Component} from "react";
import axios from "axios";

const ApiData = axios.create({
    baseURL : "https://rickandmortyapi.com/api/character"
});

export default class ApiComponent extends Componente{

    state={
        ApiInformation:[]
    };

    GetApiInformation= async()=>{
        const Apiresults = await ApiData.get();
        console.log(results.data.results);

        const ApiItens = Apiresults.data.results.map((item) =>{
            
        })
    }

    render(){
        return(
            <>
            </>
        )
    }
}