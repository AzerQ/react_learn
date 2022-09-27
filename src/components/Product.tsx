import {IProduct} from "../models";
import {useState} from "react";

// Тип передаваемых свойств коспонента продукта.
interface ProductProps {
    product: IProduct;
}

// Компонент продукта.
export function Product({product}: ProductProps) {
    // Детали о товаре
    const [details, setDetails] = useState(false);
    // Выбор стиля кнопки (Описание свернуто? да: нет)
    const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";
    // Массив классов стилей для кнопки
    const btnClasses = ["py-2 px-4 border", btnBgClassName];
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <p className="font-bold">{product.price} $</p>
            <button className={btnClasses.join(' ')} onClick={() =>
                setDetails(prev => !prev)
            }>{
                // Свернуто поле описания ? да : нет
                details ? 'Hide Details' : 'Show Details'}
            </button>
            {
                // Выбрал пользватель показ описания?
                details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{
                    fontWeight: "bold"
                }}>{product.rating?.rate}</span></p>
            </div>}

        </div>
    )
}