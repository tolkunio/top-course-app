import s from './Header.module.css';

import {HeaderProps} from "@/Layout/Header/Header.props";

const Header = ({...props}: HeaderProps) => {
    return (
        <div{...props}>
            header
        </div>
    );
};

export default Header;
