import Nav from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import "./styles/titulo.css";

const App = () => {
    return (
        <header>    
            <h1 className="title">
                FERRETERIA ALVEAR
            </h1> 
            <Nav/>
            <ItemListContainer greeting= "Bienvenido a Ferreteria Virtual"/>
        </header>  
    )
}

export default App;