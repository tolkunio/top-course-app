import s from './Footer.module.css';
import cn from "classnames";
import {FooterProps} from "@/Layout/Footer/Footer.props";
import Spantag from "@/components/Spantag/Spantag";


const Footer = ({...props}: FooterProps) => {
    return (
        <footer className={s.footer}>
            <div className={s.flexWrapper}>
                <div className={s.leftside}>
                    <span className={s.span}>
                        OwlTop © 2020 - 2021 Все права защищены
                    </span>
                </div>
                <div className={s.rightside}>
                    <span className={s.span}>Пользовательское соглашение</span>
                    <span className={s.span}>Политика конфиденциальности</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
