import { createContext, useState, useEffect } from "react";
import { getApiData } from "../services/apiServices";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState('br')
    const [languages, setLanguages] = useState()
    const [loanding, setLoanding] = useState(true)

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext')
                setLanguages(getTexts)
            } catch (e) {
                console.error(e)
            } finally {
                setLoanding(false)
            }
        }
        fetchLanguages()
    }, [])

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loanding }}>
            {children}
        </AppContext.Provider>
    )
}