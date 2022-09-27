import React, {useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const productData: IProduct = {
    id: 0,
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 23,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product:IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    // Значение текста в input.
    const [value, setValue] = useState('');
    // Ошибка параметра value input'a.
    const [error, setError] = useState('');
    // Переопределение события подтверждения формы.
    const submitHandler = async (event: React.FormEvent) => {
        setError('');
        event.preventDefault();
        // Валидация value.
        if (value.trim().length === 0) {
            setError("Please enter valid title!!!");
            return;
        }
        productData.title = value;
        // Отправка данных на червер сетодом POST
        const response =
            await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
        // Вызыв при завершениии обработки формы колл-бэк функции
        onCreate(response.data);
    }
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);
    }
    // @ts-ignore
    return (
        // Форма создания описания продукта
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error={error}/>}
            <button type="submit" className="py-2 px-4 border bg-amber-500
            hover:text-white">
                Create
            </button>
        </form>
    )
}