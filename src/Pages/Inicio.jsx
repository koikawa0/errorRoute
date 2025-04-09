import Titulo from "../Components/Titulo"
import Conteudo from "../Components/Conteudo"
import Campo from "../Components/Campo"

export default function Inicio() {
  return <>
  <Titulo nome="Mergulhando no React!"/>
  <Campo>
    <Conteudo
    foto="/images.jpg"
    nome="@pessoa1" 
    descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
    <Conteudo
    foto="/images2.png"
    nome="@pessoa2"
    descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  </Campo>
  </>
}