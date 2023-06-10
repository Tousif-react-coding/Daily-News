import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
// import React from 'react'     //{ Component }

// // export class NewsItem extends Component {
//     const NewsItem = (props)=>{

   

//     // render() {
//         let { title, description, imageUrl, newsUrl, author, date } = props;    //this.props
//         return (
//             <div className="my-3">
//                 <div className="card" style={{ width: "18rem" }}>
//                     <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/107173548-1672802019392-gettyimages-1223718922-202006301112057ta.jpeg?v=1676850434&w=1920&h=1080":imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}...</h5>
//                         <p className="card-text">{description}...</p>
//                         <p className="card-text"><small className="text-info">By {!author ?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
//                         <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
               
//             </div>
            
//         )
//     // }
// }

// export default NewsItem
