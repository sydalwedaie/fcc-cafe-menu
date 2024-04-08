import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { coffeeMenu, dessertMenu } from "./data";
import coffeIcon from "./assets/coffee.jpg";
import pieIcon from "./assets/pie.jpg";

function App() {
  return (
    <div className="m-auto w-[80%] max-w-[500px] rounded-lg bg-[burlywood] p-4 shadow-2xl">
      <Header />
      <hr className="mt-4 h-1 border-0 bg-amber-700" />
      <Menu title="Coffee" icon={coffeIcon} menu={coffeeMenu} />
      <Menu title="Desserts" icon={pieIcon} menu={dessertMenu} />
      <hr className="mt-4 h-1 border-0 bg-amber-700" />
      <Footer />
    </div>
  );
}

export default App;
