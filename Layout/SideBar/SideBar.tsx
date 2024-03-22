import s from './SideBar.module.css';
import {SideBarProps} from "@/Layout/SideBar/SideBar.props";
import Menu from "@/Layout/Menu/Menu";

const SideBar = ({...rest}: SideBarProps) => {
    return (
        <aside className={s.sidebar} {...rest}>
            <input className={s.input} placeholder={'search'}/>
            <div className={s.content}>
                <div className={s.icons}>

                </div>
                <div className={s.info}>
                   <Menu/>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
