import React, { Component } from "react";
import NewsData from "../data/NewsData";
class News extends Component {
  state = {
    newsData: [],
  };

  componentDidMount() {
    this.setState({newsData: NewsData});
}

  render() {
    const news = this.state.newsData.map((item) => (
      <div className="news" key={item.id}>
        
          <div className="image"> 
            <img src={item.img} alt="" />
          </div>
        
        <div className="article">
          <div className="title">{item.title}</div>
          <p className="text">{item.text}</p>
        </div>
      </div>
    ));

    return <div className="news_panel">{news}</div>;
  }
}

export default News;
