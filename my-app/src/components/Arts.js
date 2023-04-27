import React from 'react';
import Clock from './Clock';
import Card from './Card';

export default function Arts ({topHeadlines}) {
    
    const renderArticles = topHeadlines.map(
        article => <Card key={article.id} {...article} />)

    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center'}}>Arts News<Clock /></h1>
        {renderArticles  }
        </div>);
}
