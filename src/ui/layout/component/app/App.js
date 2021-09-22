import ItemDetailContainer from "../../../section/components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../../../section/components/itemListContainer/ItemListContainer";
import Footer from "../footer/Footer";
import Header from "../header/Header";


const App = () => {



    return (
        <>
            <Header/>
            <ItemListContainer/>
            <ItemDetailContainer/>
            <Footer/>
        </>
    )
}

export default App;