import { useParams } from "react-router-dom"
import Titulo from "../Components/Titulo"
import Conteudo from "../Components/Conteudo"
import Campo from "../Components/Campo"

export default function Postagem() {
  const { nome, descricao } = useParams()
  console.log("Parametros foram recebidos", nome, descricao)
  return <>
  <Titulo nome="Mergulhando no React"/>
  <Campo>
    <Conteudo
    foto="/images3.jpg"
    nome={"@"+nome}
    descricao={descricao}
    />
  </Campo>
  </>
}