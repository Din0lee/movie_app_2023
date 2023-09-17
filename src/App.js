
function Food({name,picture}){
  return <div>
    <h2>I Like {name}</h2>
    <img src= {picture} />
  </div>
}

const foodILike = [
  {
    name : "Kimchi",
    image : "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name : "Samgyeopsal",
    image : "http://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },
  {
    name : "Doncasu",
    image : "https://cdn.funshop.co.kr/products/0000076768/vs_image800.jpg"
  },
  {
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}/>;
}

function App() {
  return (
    <div className="App">
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
