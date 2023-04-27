import React from 'react';
import Clock from './Clock';
import Card from './Card';

function World ({topHeadlines}) {

    const renderArticles = topHeadlines.map(
        article => <Card key={article.id} {...article} />)
    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center'}}>World News <Clock /></h1>
        {renderArticles  }
        </div>);
}
export default World;