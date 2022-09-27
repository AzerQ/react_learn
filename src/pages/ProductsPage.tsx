import {useProducts} from "../hooks/products";
import {useContext} from "react";
import {ModalContext} from "../context/ModalConext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {
    // Подключаем наш хук, для получения данных.
    const {loading, error, products, addProduct} = useProducts();
    // Видимость модального окна
    //const [modal, setModal] = useState(false);
    const {modal, open, close: close} = useContext(ModalContext);
    // Товар добавлен
    const createHandler = (product: IProduct) => {
        close();
        addProduct(product);
    }
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {
                // Проход по элементам массива products: IProduct[],
                // с вызовом и отрисовкой компонета Product.
                products.map(product => <Product product={product} key={
                    product.id
                }/>)
            }
            {modal && <Modal onClose={close} title="Create new Item">
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
            {/*Кнопка создать модальное окно*/}
            <button className="fixed bottom-10 righ-10 bg-red-300
            text-white text-2xl px-4 py-2 rounded-full"
                    onClick={open}
            >+
            </button>
        </div>
    );
}