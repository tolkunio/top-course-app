import {createContext} from "react";
import {MenuItem} from "@/interfaces/menu-interface";
import {TopLevelCategory} from "@/interfaces/page.interface";
import {useState,PropsWithChildren} from "react";

export interface IContext {
    menu: MenuItem[],
    firstCategory: TopLevelCategory,
    setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<IContext>({menu: [], firstCategory: TopLevelCategory.Courses});
export const AppContextProvider = ({menu, firstCategory, children}: PropsWithChildren<IContext> ) => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const setMenu=(newMenu:MenuItem[])=>{
        setMenuState(newMenu);
    }
    return <AppContext.Provider value={{menu:menuState,firstCategory,setMenu}}>
        {children}
    </AppContext.Provider>
}