import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import SecondComponent from "./components/SecondComponent";

const App = () => {
  return (
    <div
      className="
        flex flex-col items-center
      "
    >
      <HomeComponent />
      <SecondComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
