import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

const App = () => {
  return (
    <div
      className="
        flex flex-col items-center
      "
    >
      <HomeComponent />
      <SecondComponent />
      {/* <ThirdComponent /> */}
      <FooterComponent />
    </div>
  );
};

export default App;
