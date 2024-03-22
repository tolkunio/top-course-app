import s from './Menu.module.css'
import {useContext} from "react";
import {AppContext} from "@/context/app.context";
import {FirstLevelMenuItem} from "@/interfaces/menu-interface";
import cn from "classnames";
import Link from "next/link";
import {firstLevelMenu} from "@/helpers/helpers";

const Menu = () => {
    const {menu, firstCategory, setMenu} = useContext(AppContext);
    // useEffect(() => {
    //     setMenu && setMenu([]);
    // },[menu])
    const buildFirstLevel = () => {
        return (
            <>
                {
                    firstLevelMenu.map(menu => (
                        <div key={menu.route}>
                            <Link className={cn(s.firstLevel, {
                                [s.firstLevelActive]: menu.id == firstCategory
                            })} href={`/${menu.route}`}>
                                    {menu.icon}
                                    <span>{menu.name}</span>
                            </Link>
                            {menu.id === firstCategory && buildSecondLevel(menu)}
                        </div>
                    ))
                }
            </>
        )
    }
    const buildSecondLevel = (firstLevelMenu: FirstLevelMenuItem) => {
        return (
            <div className={s.secondBlock}>
                {menu.map(item => (
                    <div key={item._id.secondCategory}>
                        <div className={s.secondLevel}>{item._id.secondCategory}</div>
                        <div className={cn(s.secondLevelBlock, {
                            [s.secondLevelBlockOpen]: item.isOpened
                        })}>
                            {buildThirdLevel(item.pages, firstLevelMenu.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`} className={cn(s.thirdLevel, {
                    [s.firstLevelActive]: false
                })}>
                    {p.category}
                </Link>
            ))
        )
    }
    return (
        <div className={s.menu}>
            {buildFirstLevel()}
        </div>
    );
};

export default Menu;
