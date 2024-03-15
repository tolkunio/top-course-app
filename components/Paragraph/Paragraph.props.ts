import {ReactNode} from "react";
import {DetailedHTMLProps} from "react";
import {HTMLAttributes} from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size: 'small' | 'medium' | 'large',
    children: ReactNode
}