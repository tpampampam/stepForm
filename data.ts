import { DataItem } from "./src/utils/types";




export const questions: DataItem[] = [
    { type: 'single', question: 'Какой ваш любимый цвет?', options: ['Красный', 'Зеленый', 'Синий'] },
    { type: 'multiple', question: 'Какие фрукты вы любите?', options: ['Яблоко', 'Банан', 'Апельсин'] },
    { type: 'short', question: 'Как тебя зовут?' },
    { type: 'long', question: 'Расскажи о себе' },
];