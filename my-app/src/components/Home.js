  import React from 'react';
import Clock from './Clock';
import Card from './Card';
import './../index.css';

function Home({topHeadlines}){

        
    const renderArticles = topHeadlines.map(
        article =>
        <Card key={article.title} {...article} />
         )
    
   
    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center', color: "#A4A71E"}}>Top Headlines <Clock /></h1>
        {renderArticles  }
        </div>);
}


export default Home;
