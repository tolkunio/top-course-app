import s from './Header.module.css';

import {HeaderProps} from "@/Layout/Header/Header.props";
import Owl from "@/assets/icons/components/Owl";

const Header = ({...props}: HeaderProps) => {
    return (
        <div className={s.header} {...props}>
            <div className={s.flexWrapper}>
                <Owl/>
                <div className={s.title}>
                    <span className={s.main}>OWL</span>
                    <span className={s.subMain}>top</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
