import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { coffeeMenu, dessertMenu } from "./data";
import coffeIcon from "./assets/coffee.jpg";
import pieIcon from "./assets/pie.jpg";

function App() {
  return (
    <>
      <Header />
      <Menu title="Coffee" icon={coffeIcon} menu={coffeeMenu} />
      <Menu title="Desserts" icon={pieIcon} menu={dessertMenu} />
      <Footer />
    </>
  );
}

export default App;
