import React from 'react';
import Clock from './Clock';
import Card from './Card';

export default function Business ({topHeadlines}) {
   
    const renderArticles = topHeadlines.map(
        article => <Card key={article.id} {...article} />)
    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center'}}>Business News<Clock /></h1>
        {renderArticles  }
        </div>);
}
