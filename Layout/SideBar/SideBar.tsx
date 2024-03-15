import s from './SideBar.module.css';
import cn from "classnames";
import {SideBarProps} from "@/Layout/SideBar/SideBar.props";
import Spantag from "@/components/Spantag/Spantag";

const SideBar = ({...rest}: SideBarProps) => {
    return (
        <aside className={s.sidebar} {...rest}>
            <input  className={s.input} placeholder={'search'}/>
            <div className={s.content}>
                <div className={s.icons}>

                </div>
                <div className={s.info}>
                    <Spantag size={'l'}>Курсы</Spantag>
                    <Spantag size={'xs'}>Дизайн</Spantag>
                    <Spantag size={'s'}>Photoshop</Spantag>
                    <Spantag size={'s'}>AfterEffect</Spantag>
                    <Spantag size={'s'}>Illustrator</Spantag>
                    <Spantag size={'s'}>Figma</Spantag>
                    <Spantag size={'xs'}>РАЗРАБОТКА</Spantag>
                    <Spantag size={'xs'}>АНАЛИТИКА</Spantag>
                    <Spantag size={'xs'}>МАРКЕТИНГ</Spantag>
                    <Spantag size={'l'}>Сервисы</Spantag>
                    <Spantag size={'l'}>Книги</Spantag>
                    <Spantag size={'l'}>Товары</Spantag>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
