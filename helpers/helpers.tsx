import {FirstLevelMenuItem} from "@/interfaces/menu-interface";
import {Course} from "@/assets/icons";
import {TopLevelCategory} from "@/interfaces/page.interface";
import {Service} from "@/assets/icons";
import {Book} from "@/assets/icons";
import {Goods} from "@/assets/icons";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <Course/>,
        id: TopLevelCategory.Courses
    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <Service/>,
        id: TopLevelCategory.Services
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <Book/>,
        id: TopLevelCategory.Books
    },
    {
        route: 'goods',
        name: 'Товары',
        icon: <Goods/>,
        id: TopLevelCategory.Goods
    }
]