import s from './Spantag.module.css'
import {JSX} from "react";
import {SpantagProps} from "@/components/Spantag/Spantag.props";

const Spantag = ({size,children}:SpantagProps): JSX.Element => {
   switch (size){
       case "xs":
           return <span className={s.xs}>{children}</span>;
       case "s":
           return <span className={s.s}>{children}</span>;
       case "m":
           return <span className={s.m}>{children}</span>;
       case "l":
           return <span className={s.l}>{children}</span>;
       default:
           return <></>
   }
};

export default Spantag;
