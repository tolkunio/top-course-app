import s from './Layout.module.css';
import cn from "classnames";
import {LayoutProps} from "@/Layout/Layout.props";
import SideBar from "@/Layout/SideBar/SideBar";
import Header from "@/Layout/Header/Header";
import Footer from "@/Layout/Footer/Footer";
import {FunctionComponent} from "react";
import {Component} from "react";
import {JSX} from "react";
import {AppContextProvider} from "@/context/app.context";
import {IContext} from "@/context/app.context";
import {HomeProps} from "@/pages";

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <div className={s.content}>
                <SideBar/>
                <main>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    );
};

export const withLayout = <T extends Record<string, unknown> & IContext>(Component: ({
                                                                                         menu,
                                                                                         fistCategory

                                                                                     }: HomeProps) => React.JSX.Element) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...process}/>
                </Layout>
            </AppContextProvider>

        )
    }
}
