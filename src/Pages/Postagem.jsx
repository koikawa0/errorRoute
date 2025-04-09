import { useParams } from "react-router-dom"

export default function Postagem() {
  const { nome, descricao } = useParams()
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