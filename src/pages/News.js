
import React, { Component } from "react";

class News extends Component { 
  state = { 
    articles: [] 
  } 

  getDataFromGitHub() { 
    const apiUrl = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42aabc8769514a8fbfa3eb3457961ae8`; 
    fetch(apiUrl) 
      .then(response => response.json()) 
      .then(data => this.setState({ articles: data.filter((item, i) => i < 9) })) 
      .catch(err => console.log(err)); 
  } 

  componentDidMount() { 
    this.getDataFromGitHub(); 
  } 

  render() { 

    
    return (
      <> 
      <div className="list">
      {this.state.articles.map((article) => (
        <div className="listItem">
          <h2>{article.author}</h2>
          <img src={article.avatar_url} alt="avatar" />
          <div>
            <a href={article.url}>Link</a>
          </div>
        </div>
      ))}
    </div>
      </>
    ); 
  } 
}

export default News;



//***********

// import React from "react";

// function News() {
//   const newsData = [
//     {
//       id: "1",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/201",
//     },
//     {
//       id: "2",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/202",
//     },
//     {
//       id: "3",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/203",
//     },
//     {
//       id: "4",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/204",
//     },
//     {
//       id: "5",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/205",
//     },
//     {
//       id: "6",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/206",
//     },
//     {
//       id: "7",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/207",
//     },
//     {
//       id: "8",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/208",
//     },
//     {
//       id: "9",
//       title: "News",
//       name: "Forbes",
//       date: "2021-04-15",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate iste reiciendis consequuntur? Adipisci facilis recusandae quisquam. Quibusdam ducimus perspiciatis suscipit accusamus rem, tenetur voluptate natus alias amet officia quo et dolorum, cumque eum assumenda in voluptatem soluta. Quas exercitationem natus cupiditate debitis est. Doloremque repudiandae a reprehenderit impedit velit.",
//       img: "https://picsum.photos/209",
//     },
//   ];

//   const news = newsData.map((item) => (
//     <div className="new" key={item.id}>
//       <img src={item.img} alt="thumb" />
//       <div className="new__content">
//         <div className="new__title__text">
//           <p className="new__title">{item.name}</p>
//           <p className="new__text">{item.text}</p>
//         </div>
//         <div className="new__name__date">
//           <p className="new__name">{item.name}</p>
//           <p className="new__date">{item.date}</p>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <>
//       <div className="news">{news}</div>
//     </>
//   );
// }

// export default News;
