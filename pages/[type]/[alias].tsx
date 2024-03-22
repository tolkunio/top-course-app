import {TopLevelCategory} from "@/interfaces/page.interface";
import {MenuItem} from "@/interfaces/menu-interface";
import {withLayout} from "@/Layout/Layout";
import {TopPageModel} from "@/interfaces/page.interface";
import {ProductModel} from "@/interfaces/product-interface";

interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}
const Course = ({menu,page,products}:TopPageProps) => {
    return (
        <div>
            {products && products.length}
        </div>
    );
};
export default withLayout(Course);
export const getStaticPaths=()=>{
    
}
export const getStaticProps=()=>{

}

