import Logo from "./Assets/cyol_logo.png"
import './App.css';
import Navbutton from "./Components/Navbutton";

function App() {

  const buttons = [
    {
      title:"Download product brochure",
      class:"col-12"
    },

    {
      title:"Download product brochure",
      class:"col-6"
    },

    {
      title:"Download product brochure",
      class:"col-6"
    },
  ]

  return (
    <div className="App">
        <div className="Header">
            <img src={Logo}/>
        </div>

        <div className="Navigations px-3 px-sm-5">
            <div className="row g-2 pt-5">
                {buttons.map((button) => (
                    <div className={button.class}>
                        <Navbutton Button={button}/>
                    </div>
                ))}

                <div className="Requesting mt-4 d-flex flex-column align-items-center">
                  <p className="text-center">Unlock the full potential of our product</p>
                  <a href="https://cyol.vercel.app/?request=1"><button>Request Demo</button></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
