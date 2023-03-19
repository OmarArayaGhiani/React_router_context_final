import "../css/home.css"

import MyCard from "../components/card"

const Home = () => {
  return (
    <>
      <div className="home-bg home-flex">
        <h1>¡Pizzería Mamma Mia!</h1>
        <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
        <hr />
      </div>
      <MyCard />
    </>
  )
}

export default Home
