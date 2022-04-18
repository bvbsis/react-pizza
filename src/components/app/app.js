import "../../scss/app.scss";
import Header from "../header/header";
import pizzaLogo from "../../assets/img/pizza-logo.svg";
import Categories from "../categories/categories";
import Card from "../card/card";
import { data } from "../../assets/data/data";

function App() {
  return (
    <div className="wrapper">
      <Header
        logo={pizzaLogo}
        heading="React Pizza"
        description="Вкуснейшая пицца на просторах сети"
        totalPrice={520}
        count={4}
      />
      <div className="content">
        <div className="container">
          <Categories />
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {data.map((pizza) => (
              <Card src={pizza.src} name={pizza.name} price={pizza.price} count={pizza.count} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
