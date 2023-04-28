import React from 'react';
import Clock from './Clock';
import Card from './Card';

export default function Business ({topHeadlines}) {
   
    const renderArticles = topHeadlines.map(
        article => <Card key={article.title} {...article} />)
    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center', color: "#A4A71E"}}>Business News<Clock /></h1>
        {renderArticles  }
        </div>);
}
