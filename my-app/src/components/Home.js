import {useState, useEffect} from 'react'
import Card from './Card'
import Clock from './Clock';
import './../index.css'


const apiKey = `M8hsBtQcuiZFM4pD0mGiDAa0UMbA0UaQ`
// let country = 'US'


function Home(){
 
    const [topHeadlines, setTopHeadlines] = useState([])


    const baseUrl = `https://api.nytimes.com/svc/topstories/v2/`
    const newsUrl = baseUrl + `home.json?api-key=${apiKey}`

  const fetchTopHeadlines = () => {
      fetch(newsUrl)
      .then(res => res.json())
      .then(headlinesData=>setTopHeadlines(headlinesData.results))
      .catch(error=>console.log(error))

   }
//    console.log(topHeadlines)

    useEffect(fetchTopHeadlines, [newsUrl]) 

   
      
    
   
    
       
     const renderArticles = topHeadlines.map(
        article => <Card key={article.id} {...article} />)
          
  
    
   
    return (<div>
        <h1 style={{textAlign: 'center', textJustify: 'center'}}>Top Headlines <Clock /></h1>
        {renderArticles  }
        </div>);
}


export default Home;
