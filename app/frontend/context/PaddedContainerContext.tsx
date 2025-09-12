import {createContext, Dispatch, SetStateAction} from "react";

type PaddedContainerContextType = {
    padding: boolean;
    setPadding: Dispatch<SetStateAction<boolean>>;
} | null;

export const PaddedContainerContext = createContext<PaddedContainerContextType>(null);