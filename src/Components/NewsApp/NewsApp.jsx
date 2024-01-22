import React, { useEffect, useState } from 'react';
import logo from "../Assets/globel2.png";
import "../NewsApp/NewsApp.css"

export default function NewsApp() {
    let[news,setNews]=useState([]);
    let a= new Date();
    let b =a.getDate();
    let d = a.getMonth();
    let f = a.getFullYear();
    let formula = f + "-" + d + "-" + b

    console.log(formula)
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=${formula}&sortBy=publishedAt&apiKey=665574fb544d4aaab8f9c96309f3adb3`)
        .then(res => res.json())
        .then(res => {

            console.log(res)
            // res.articles.map(data =>{
            //     console.log(data)
            // })
            // res.map(data => {
            //     console.log(data)
            // })
            // res.forEach(element => {
            //    console.log(element) 
            // });
            setNews(res.articles);
        })
    },[])
    
  return (
    
    <div>
        <nav>
            <div className="logo">
                <h3>Gl <span><img src={logo} alt="" /></span> bel News</h3>
            </div>
        </nav>
        <div className="newsCards" id='newsCards'>
            {
                news.map( (data,i) =>{
                    if(data.description){
                        if(data.urlToImage){
                            if(data.title){
                                    return  <div className="card" key={i}>
                                   <img src={`${data.urlToImage}`} className="card-img-top"                alt="Fissure in Sandstone"/>
                                   <div className="card-body">
                                     <h5 className="card-title">{`${data.title}`}</h5>
                                     <p className="card-text">{`${data.description}`}</p>
                                     <a href={`${data.url}`} target='_blank' className="btn
                                     btn-primary" data-mdb-ripple-init>Learn More</a>
                                   </div>
                                 </div> 
                            }
                        }
                    }
                })
            }
        </div>
        <div className="footer">
            <a href="#newsCards"><i className="fa-solid fa-arrow-up-long"></i></a>
        </div>
    </div>
  )
}
