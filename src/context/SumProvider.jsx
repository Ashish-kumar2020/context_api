import { useState } from "react";
import { SumContext } from "./GenericContext";


export function SumProvider({children}){
    const [currUserName,setCurrUserName] = useState("Ashish");

    const updateUserName = (updatedName) =>{
        setCurrUserName(updatedName);
    }

    const value = {
        currUserName,
        setCurrUserName,
        updateUserName
    }

    return (
        <SumContext.Provider value={value}>
            {children}
        </SumContext.Provider>
    )
}