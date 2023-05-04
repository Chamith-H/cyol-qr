import Logo from "./Assets/cyol_logo.png"
import './App.css';
import Navbutton from "./Components/Navbutton";

function App() {

  const buttons = [
    {
      title:"Download the product brochure",
      class:"col-12",
      subClass:"Brochure",
      navigater:""
    },

    {
      title:"Visit our website",
      class:"col-6",
      subClass:"Website",
      navigater:"https://cyol.vercel.app/"
    },

    {
      title:"Product overview",
      class:"col-6",
      subClass:"Overview",
      navigater:""
    },
  ]

  return (
    <div className="App">
        <div className="Header">
            <img src={Logo}/>
        </div>

        <div className="Navigations px-3 px-sm-5">
          <div className="Background mt-3 mt-sm-5">
            <div className="row g-0 Align-Background">
                {buttons.map((button) => (
                    <div className={button.class}>
                      <a href={button.navigater}>
                        <Navbutton Button={button} Styler={button.subClass}/>
                      </a>
                    </div>
                ))}
            </div>
          </div>

            <div className="Requesting mt-4 d-flex flex-column align-items-center">
                  <p className="text-center">Unlock the full potential of our product</p>
                  <a href="https://cyol.vercel.app/?request=1"><button>Request Demo</button></a>
            </div>
            
        </div>
    </div>
  );
}

export default App;
