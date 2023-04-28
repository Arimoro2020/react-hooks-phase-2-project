import React from 'react';
import Clock from './Clock';
import Card from './Card';

export default function Arts ({topHeadlines}) {
    
    const renderArticles = topHeadlines.map(
        article => <Card key={article.title} {...article} /> );

    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center', color: "#A4A71E"}}>Arts News<Clock /></h1>
        {renderArticles  }
        </div>);
}
