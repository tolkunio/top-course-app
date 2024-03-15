import s from './SideBar.module.css';
import cn from "classnames";
import {SideBarProps} from "@/Layout/SideBar/SideBar.props";

const SideBar = ({...rest}: SideBarProps) => {
    return (
        <div {...rest}>
            SideBar
        </div>
    );
};

export default SideBar;
