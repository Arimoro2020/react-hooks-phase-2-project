import React from 'react';
import Clock from './Clock';
import Card from './Card';

function Health ({topHeadlines}) {
    


    const renderArticles = topHeadlines.map(
        article => <Card key={article.title} {...article} />)

        
    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center', color: "#A4A71E"}}>Health News <Clock /></h1>
        {renderArticles  }
        </div>);
}
export default Health;