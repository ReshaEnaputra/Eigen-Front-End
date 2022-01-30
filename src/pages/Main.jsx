import React, { useContext, useEffect } from "react";
import css from './styles/main.module.css'
import WebFont from 'webfontloader';
import { NewsContext } from "../context/NewsContext";
import NewsCard from './components/Card'

const Main = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Avenir']
            }
        });
    }, []);
    const { data } = useContext(NewsContext);
    
    if(data){
        var news = data;
        console.log(news);
    }

  return(
    <>
        <div className={css.navbar}>
            <h1 className={css.header}>NewsAPI</h1>
        </div>
        <div className={css.container}>
            {news?.articles.map((news) => (
                <NewsCard data={news} key={news.url} />
                ))}
            <NewsCard/>
        </div>
    </>
  );
};

export default Main;
