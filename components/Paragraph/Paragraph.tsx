import s from './Paragraph.module.css';
import {ParagraphProps} from "@/components/Paragraph/Paragraph.props";
import cn from "classnames";

const Paragraph = ({size='medium', children,className,...rest}: ParagraphProps) => {
    return (
        <p className={cn(s.paragraph,className??'', {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
            [s.large]: size === 'large'
        })} {...rest}>
            {children}
        </p>
    );
};

export default Paragraph;
