import {withLayout} from "@/Layout/Layout";
import {JSX} from "react";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "@/interfaces/menu-interface";
import {API} from "@/helpers/api";

function Home({menu,fistCategory}: HomeProps): JSX.Element {
    return (
        <>
            <div>

            </div>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const menu = await axios.post<MenuItem[]>(
        API.topPage.find, {
            firstCategory
        }).then((res)=>res.data)
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

export interface HomeProps {
    menu: MenuItem[],
    fistCategory: number
}