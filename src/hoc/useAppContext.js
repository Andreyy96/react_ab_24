import {useContext} from "react";

import {Context} from "./ContextParams";

const useAppContext = () => useContext(Context)

export {
    useAppContext
}