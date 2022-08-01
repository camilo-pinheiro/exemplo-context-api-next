import { useOutdoor } from "../contexts/OutdoorContext";
import Outdoor from "./outdoor";

export default function Home(meuOutdoorRenderizadoPeloGetStaticProps) {
  console.log(JSON.stringify(meuOutdoorRenderizadoPeloGetStaticProps));
  const { defineOutdoor } = useOutdoor();

  //se eu quiser mudar o estado, posso utilizar a função aqui
  const passarValorOutdoor = () => {
    defineOutdoor(meuOutdoorRenderizadoPeloGetStaticProps.outdoor);
  }

  return (
    <>
      <Outdoor />
      <button onClick={() => passarValorOutdoor()}> Change Outdoor</button>
    </>
  )
  
}

export async function getStaticProps() {
//o getStaticProps renderiza valores para o componente

let outdoor; 
await fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => outdoor = data);
//renderizo serverside values e retorno para o componente

  return {
    props: {
      outdoor,
    },
  }
}