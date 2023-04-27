import React from 'react';
import Clock from './Clock';
import Card from './Card';

function Health ({topHeadlines}) {
    


    const renderArticles = topHeadlines.map(
        article => <Card key={article.id} {...article} />)

        
    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center'}}>Health News <Clock /></h1>
        {renderArticles  }
        </div>);
}
export default Health;