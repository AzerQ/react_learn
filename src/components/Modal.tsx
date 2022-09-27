import React from "react";
// Тип внутреннего компонента формы
interface ModalProps{
    // Внутренний компонент модалки
    children: React.ReactNode;
    // Заголовок модалки
    title: string;
    // Закрытие модалки при клике на темное поле
    onClose: ()=>void
}

// Модальное окно
export function Modal({children, title, onClose} : ModalProps) {
    return (
        <>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
            onClick={onClose}>
            </div>
            <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-center mb-2">{ title }</h1>
                {children}
            </div>
        </>
    )
}