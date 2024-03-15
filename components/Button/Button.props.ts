import {ReactNode} from "react";
import {DetailedHTMLProps} from "react";
import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    appearance: 'primary' | 'ghost',
    arrow?: 'right' | 'down' | 'none';
}