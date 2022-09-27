// Интерфейс, отображающий модель данных продукта.
export interface IProduct{
    price:number;
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}