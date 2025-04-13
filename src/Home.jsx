import { useContext } from "react"
import App from "./App"
import { AppContext } from "./context";
import { useGlobalContext } from "./context";


const Home = () => {

  const name = useGlobalContext();

  return (
    <>
    
    <div>Home</div>
    <p>{name}</p>
    
    </>
    
  )
}

export default Home