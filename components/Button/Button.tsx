import s from './Button.module.css'
import {ButtonProps} from "@/components/Button/Button.props";
import cn from 'classnames';
import {Arrow} from "@/assets/icons";

const Button = ({children, appearance, arrow='none',className, ...rest}: ButtonProps) => {
    return (
        <button className={cn(s.button, className ? className : '', {
            [s.primary]: appearance == 'primary',
            [s.ghost]: appearance == 'ghost'
        })}{...rest}>
            {children}
            {
                arrow!=='none' && <span className={cn(s.arrow,{
                    [s.down]:arrow==='down',
                    [s.right]:arrow=='right'
                })
                }><Arrow/></span>
            }
        </button>
    );
};

export default Button;
