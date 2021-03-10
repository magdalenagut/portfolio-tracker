import React, { Component } from "react";

class News extends Component {
  state = {
    newsData: [
      {
        id: "1",
        img: "https://picsum.photos/300/201",
        title: "Sample title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae expedita modi cumque aliquid assumenda molestias quisquam repellendus iusto recusandae soluta officia ea consequuntur animi laudantium eaque quo vel eligendi, dolore doloribus harum. Necessitatibus laudantium, dolorem ipsa vero magnam accusamus! Rerum odio molestias quos inventore excepturi quam accusantium totam saepe.",
      },
      {
        id: "2",
        img: "https://picsum.photos/300/202",
        title: "Sample title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae expedita modi cumque aliquid assumenda molestias quisquam repellendus iusto recusandae soluta officia ea consequuntur animi laudantium eaque quo vel eligendi, dolore doloribus harum. Necessitatibus laudantium, dolorem ipsa vero magnam accusamus! Rerum odio molestias quos inventore excepturi quam accusantium totam saepe.",
      },
      {
        id: "3",
        img: "https://picsum.photos/300/203",
        title: "Sample title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae expedita modi cumque aliquid assumenda molestias quisquam repellendus iusto recusandae soluta officia ea consequuntur animi laudantium eaque quo vel eligendi, dolore doloribus harum. Necessitatibus laudantium, dolorem ipsa vero magnam accusamus! Rerum odio molestias quos inventore excepturi quam accusantium totam saepe.",
      },
      {
        id: "4",
        img: "https://picsum.photos/300/204",
        title: "Sample title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae expedita modi cumque aliquid assumenda molestias quisquam repellendus iusto recusandae soluta officia ea consequuntur animi laudantium eaque quo vel eligendi, dolore doloribus harum. Necessitatibus laudantium, dolorem ipsa vero magnam accusamus! Rerum odio molestias quos inventore excepturi quam accusantium totam saepe.",
      },
      {
        id: "5",
        img: "https://picsum.photos/300/205",
        title: "Sample title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae expedita modi cumque aliquid assumenda molestias quisquam repellendus iusto recusandae soluta officia ea consequuntur animi laudantium eaque quo vel eligendi, dolore doloribus harum. Necessitatibus laudantium, dolorem ipsa vero magnam accusamus! Rerum odio molestias quos inventore excepturi quam accusantium totam saepe.",
      },
      {
        id: "6",
        img: "https://picsum.photos/300/206",
        title: "Sample title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae expedita modi cumque aliquid assumenda molestias quisquam repellendus iusto recusandae soluta officia ea consequuntur animi laudantium eaque quo vel eligendi, dolore doloribus harum. Necessitatibus laudantium, dolorem ipsa vero magnam accusamus! Rerum odio molestias quos inventore excepturi quam accusantium totam saepe.",
      },
      {
        id: "7",
        img: "https://picsum.photos/300/207",
        title: "Sample title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae expedita modi cumque aliquid assumenda molestias quisquam repellendus iusto recusandae soluta officia ea consequuntur animi laudantium eaque quo vel eligendi, dolore doloribus harum. Necessitatibus laudantium, dolorem ipsa vero magnam accusamus! Rerum odio molestias quos inventore excepturi quam accusantium totam saepe.",
      },
      {
        id: "8",
        img: "https://picsum.photos/300/208",
        title: "Sample title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae expedita modi cumque aliquid assumenda molestias quisquam repellendus iusto recusandae soluta officia ea consequuntur animi laudantium eaque quo vel eligendi, dolore doloribus harum. Necessitatibus laudantium, dolorem ipsa vero magnam accusamus! Rerum odio molestias quos inventore excepturi quam accusantium totam saepe.",
      },
    ],
  };

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
