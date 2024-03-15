import s from './Layout.module.css';
import cn from "classnames";
import {LayoutProps} from "@/Layout/Layout.props";
import SideBar from "@/Layout/SideBar/SideBar";
import Header from "@/Layout/Header/Header";
import Footer from "@/Layout/Footer/Footer";
import {FunctionComponent} from "react";
import {Component} from "react";
import {JSX} from "react";
import Main from "@/Layout/Main/Main";

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <div className={s.content}>
                <SideBar/>
                <Main>
                    {children}
                </Main>
            </div>
            <Footer/>
        </>
    );
};

export const withLayout=<T extends Record<string,unknown>>(Component:FunctionComponent<T>)  =>{
    return function  withLayoutComponent(props:T):JSX.Element{
        return (
            <Layout>
                <Component {...process}/>
            </Layout>
        )
    }
}
