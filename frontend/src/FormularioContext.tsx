import { createContext, useContext, useState } from "react";

interface FormContextSchema {
    values: { [key: string]: any };
    updateValue: (inputName: string, value: any) => void;
    resetValues: () => void;
}

const FormContext = createContext<FormContextSchema| undefined>({} as any)

export const useFormularioContext = () => {
    const context = useContext(FormContext);
    return context;
}

export const FormProvider = ({ children }: any) => {
    const [values, setValues] = useState<{[key: string]: any}>({})

    const updateValue = (inputName: string, value: any) => {
        setValues((prevValues) => ({
            ...prevValues,
            [inputName]: value,
        }))
    }

    const resetValues = () => {
        setValues({})
    }

    const contextValue: FormContextSchema = {
        values,
        updateValue,
        resetValues,
    }

    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    )
}