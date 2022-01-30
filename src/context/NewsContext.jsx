import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = ({children}) => {
    const [data, setData] = useState();
    const apiKey = "03953063446b40668f4e14826682ff0a";

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/everything?q=Apple&from=2022-01-30&sortBy=popularity&apiKey=${apiKey}`
            )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <NewsContext.Provider value={{ data }}>
            {children}
        </NewsContext.Provider>
    );
};