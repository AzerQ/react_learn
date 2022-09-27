import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";
// Кастомный хук для загрузки продуктов
export function useProducts() {
    // Состояние продуктов в приложении.
    const [products, setProducts] = useState<IProduct[]>([]);
    // Состояние для индикации загрузки.
    const [loading, setLoading] = useState(false);
    // Состояние ошибки в запросе.
    const [error, setError] = useState('');

    // Добавление продукта
    function addProduct(product: IProduct){
        setProducts(prev=> [...prev, product])
    }

    // Асинхронный запрос на сервер API, получение данных в JSON.
    async function fetchProducts() {
        // Попытка загрузить данные
        try{
            setError('');
            // Загрузка начинается.
            setLoading(true);
            const response =
                await axios.get<IProduct[]>("https://fakestoreapi.com/products?limit=10")
            console.log(response);
            // Получение массива продуктов из данных запроса (response.data).
            setProducts(response.data)
            // Загрузка завершена.
            setLoading(false);
        }
            // При ошибки загрузке данных.
        catch(e: unknown){
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    // Выполняется один раз, при загрузке компонента.
    useEffect(() => {
        fetchProducts()
    }, []);
    return { products, error, loading, addProduct}
}
