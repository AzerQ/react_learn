import React, {createContext, useState} from "react";

interface IModalContext {
    // Состояние видимости окна
    modal: boolean,
    // Функция открытия окна
    open: () => void,
    // Функция закрытия окна
    close: () => void

}// Создание контекста модального окна, заглушки методов.
export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {
    },
    close: () => {
    }
})
// Функции изменения состояния окна, реализация методов.
export const ModalState = ({children}: { children: React.ReactNode }) => {
    const [modal, setModal] = useState(false);
    const open = () => {
        setModal(true);
    };
    const close = () => {
        setModal(false);
    }
    return (
        <ModalContext.Provider value={{modal, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}