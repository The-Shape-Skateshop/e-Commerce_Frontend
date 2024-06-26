import React from "react";
import SearchPageGrid from "../components/global/SearchPageGrid";
import { useParams } from "react-router-dom";

export default function Search() {

    const { productname } = useParams()
    // pega esse product name e manda pra API

    // antes de dar o fetch na API tem que verificar se a string digitada no input
    // é igual a String do redux. Se for ele nao precisa fazer uma nova solicitação
    // a API, basta mostrar os resultados da ultima (tratar erro de quando nao passar
    // nada)

    // em vez de true tem que esperar a promisse virar um objeto quando da o fetch
    return <SearchPageGrid productname={productname} />

}