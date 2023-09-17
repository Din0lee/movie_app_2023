import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating : 4.5
  },
  {
    id : 2,
    name : "Samgyeopsal",
    image : "http://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    rating : 5
  },
  {
    id : 3,
    name : "Doncasu",
    image : "https://cdn.funshop.co.kr/products/0000076768/vs_image800.jpg",
    rating : 4.8
  },
  {
    id : 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating : 4.9
  }
]

function Food({name,picture,rating}){
  return <div>
    <h2>I Like {name}</h2>
    <img src= {picture} alt={name} />
    <h4>{rating}/5.0</h4>
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
