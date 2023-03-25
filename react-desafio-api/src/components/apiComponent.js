//importar api
import React,{Component} from "react";
import axios from "axios";
import * as S from "../Style.js" // pq nao ta importanto


const ApiData = axios.create({
    baseURL : "https://rickandmortyapi.com/api/character"
});
export default class ApiComponent extends Component{

    state={
        ApiInformation:[],
        nomes:
        ["lucas", "Luiz"],
        NameList:[]
    };

    GetApiInformation= async()=>{
        const Apiresults = await ApiData.get();
        console.log(Apiresults.data.results);

        const ApiItens = Apiresults.data.results.map((item) =>{
            return{
                ...item
            }
        })
        this.setState({
            ApiInformation: ApiItens,
            // NameList:ApiItens
        })
    };

    componentDidMount(){
        this.GetApiInformation()
    };

//----------------------------------

    FilterFn =() =>{
        this.setState({
            ApiComponent: this.state.ApiInformation.concat({
                NameList: this.state.ApiInformation
            }),
          });
        };


    render(){
        return(
 <>


            <S.SectionUlApi> 
                {this.state.ApiInformation.map((item) =>(
                       <S.SectionCardApi>
                        <h3> {item.name}</h3>
                        <S.ImageCard src= {item.image} alt={item.name}/>

                            <div>
                                <li> {item.species}</li>  
                                <li> {item.origin.name}</li> 
                                <li> {item.gender} </li>
                                <li> {item.status} </li>
                            </div>
                            <S.Traco/>
                        </S.SectionCardApi>
                ))}
            </S.SectionUlApi>
</>
        )
    }
}