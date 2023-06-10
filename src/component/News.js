import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News

// import React, {useEffect, useState} from 'react'  //, { Component }
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';

// // export class News extends Component {
//   const News= (props)=>{
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [page, setPage] = useState(1);
//     const [totalResults, setSTotalResults] = useState(0);

// //  static defaultProps = {
// //   country: 'in' ,
// //   pageSize: 6,
// //   category: 'general',
// // }
// // static propTypes = {
// //   country: PropTypes.string,
// //   pageSize: PropTypes.number,
// //   category: PropTypes.string,
// // };
// const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// //  const capitalizeFirstLetter = (str) =>{
// //   return str.charAt(0).toUpperCase() + str.slice(1);
// // }


// //    capitalizeFirstLetter = (string) =>{
// // return string.charAt().toUppercase() + string.slice(1);
// //  };
//   // constructor(props) {
//   //   super(props);
 console.log("Hello I am a constructor from News component");
//   //   props.state = {
//   //     articles: [],
//   //     loading: false,
//   //     page: 1,
//   //   };
//   //   document.title = `${props.capitalizeFirstLetter(props.props.category)}-News`
//   // }
// const updateNews = async()=>{
//   props.setProgress(10);
//   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8caf9027477a4ff0b1787ed30c12abeb&page=${page}&pagesize=${props.props.pageSize}`;
//   setLoading(true)
//   let data = await fetch(url);
//   props.setProgress(30);
//   let parseData = await data.json()
//   props.setProgress(70);
//   setArticles(parseData.articles)
//   setTotalResults(parseData.totalResults)
//   setLoading(false)
//   props.setProgress(100);
//   //  props.setState({loading:true});
//   //  let data = await fetch(url);
//   //  let parseData = await data.json()
//   //  console.log(parseData);
//   //  setArticles(parseData.articles);
//   //  setSTotalResults(parseData.totalResults);
//   //  setLoading(false);
//   //  props.setProgress(0);
//   //  props.setState({ articles: parseData.articles,   
//   //     totalResults: parseData.totalResults,
//   //     loading:false, });
// }
//   // async updateNews(){
//   //   const url = `https://newsapi.org/v2/top-headlines?country=${props.props.country}&category=${props.props.category}&apiKey=8caf9027477a4ff0b1787ed30c12abeb&page=${props.state.page}&pagesize=${props.props.pageSize}`;
//   //   props.setState({loading:true});
//   //   let data = await fetch(url);
//   //   let parseData = await data.json()
//   //   console.log(parseData);
//   //   props.setState({ articles: parseData.articles,   
//   //      totalResults: parseData.totalResults,
//   //      loading:false, });
  
//   useEffect(() => {
//     document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
//     updateNews(); 
// //   async componentDidMount() {
// // props.updateNews();
//   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.props.country}&category=${props.props.category}
//   //   &apiKey=8caf9027477a4ff0b1787ed30c12abeb&page=1&pagesize=${props.props.pageSize}`;
//   //   props.setState({loading:true});
//   //   let data = await fetch(url);
//   //   let parseData = await data.json()
//   //   console.log(parseData);
//   //   props.setState({ articles: parseData.articles,   
//   //      totalResults: parseData.totalResults,
//   //      loading:false, });
//   //  }
//   const handlePrevClick = async () => {
//     setPage(page-1)
//     updateNews();
// }

// //  const  handlePrevClick = async () => {
// //     console.log("Previous");
// //     setPage(page+1);
// //     updateNews();
//     // props.setState({page:props.state.page -1})
//     // props.updateNews()
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.props.country}&category=${props.props.category}
//     // &apiKey=8caf9027477a4ff0b1787ed30c12abeb&page=${props.state.page + 1}&pagesize=${props.props.pageSize}`;
//     // props.setState({loading:true});
//     // let data = await fetch(url);
//     // let parseData = await data.json()
//     // console.log(parseData);
//     // props.setState({
//     //   page: props.state.page - 1,
//     //   articles: parseData.articles,
//     //   loading: false,
//     // });

//   // }
//   const handleNextClick = async () => { 
//     setPage(page+1)
//     updateNews()
// }
//   // const handleNextClick = async () => {
//     // console.log("Next");
//     // setPage(page-1);
//     // updateNews();
//     // props.setState({page:props.state.page +1});
//     // props.updateNews();
//     // if(! (props.state.page + 1 > Math.ceil(props.state.totalResults / 20)) ){
    
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${props.props.country}&category=${props.props.category}
//     //   &apiKey=8caf9027477a4ff0b1787ed30c12abeb&page=${props.state.page + 1}&pagesize=${props.props.pageSize}`;
//     //   props.setState({loading:true});
//     //   let data = await fetch(url);
//     //   let parseData = await data.json();
//     //   console.log(parseData);
     
//     //   props.setState({
//     //     page: props.state.page + 1,
//     //     articles: parseData.articles,
//     //     loading: false,
//     //   });
//     // };
  
// // const fetchMoreData = async () =>{
// // setPage(page+1)
// // const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8caf9027477a4ff0b1787ed30c12abeb&page=${page}&pagesize=${props.pageSize}`;
// // let data = await fetch(url);
// // let parseData = await data.json();
// // setArticles(articles.concat(parseData.articles));
// // setSTotalResults(parseData.totalResults)
// // };
//   /*{pr///ops.capitalizeFirstLetter(props.category)}*/////
//     // return (
//     //   <>
//     //   <div className="container">
//     //     <h1 className ="text-center"> Breaking News-Top Headlines </h1>   
//     //     {props.state.loading && <Spinner/>}
//     //     <div className="row">
//     //       {articles.map((element) => {
//     //         return <div className="col-md-4" key={element.url}>
//     //           <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage}
//     //             newsUrl={element.url} author={element.author} date={element.publishedAt} />
//     //         </div>
//     //       }
//     //       )}

//     //     </div>
//     //     <div className="container d-flex justify-content-between">
//     //       <button disabled={props.state.page <= 1} type="button" className="btn btn-dark" onClick={props.handlePrevClick}> &larr; Previous</button>
//     //       <button disabled={props.state.page + 1 > Math.ceil(props.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={props.handleNextClick}>Next &rarr;</button>
//     //     </div>
//     //   </div>
//     //   </>
//     // )
         
//         } 

//   News.defaultProps = {
//           country: 'in' ,
//            pageSize: 6,
//            category: 'general',
//          }
//          News.propTypes = {
//            country: PropTypes.string,
//            pageSize: PropTypes.number,
//            category: PropTypes.string,
//          }
// export default News
