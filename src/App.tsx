import {Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <>
            {/*Навигация по ссылкам в приложении*/}
            <Navigation/>
            {/*Маршрутизация в приложении*/}
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;
