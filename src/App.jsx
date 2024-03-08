import MainImg from "./assets/IMAGE.png";
import Main from "./assets/main.png";
import Pet from "./assets/pet.svg";
import Show from "./assets/showpo.png";
import Republe from "./assets/republe.png";
import Nisbet from "./assets/nisbets.png";
import Heart from "./assets/heart.svg";
import Win from "./assets/IMAGE.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="logo">BrandName</div>
          <div>
            <ul className="nav">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Use cases</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
          <div className="login">
            <a href="#">Log in</a>
            <button className="btn">Request a demo</button>
          </div>
        </header>
        <div className="main">
          <div className="left-generation">
            <h1>Next generation</h1>
            <p>
              Welcome to the next generation of mobile commerce and customer
              engagement. Meet your mobile customers where they want to be met.
            </p>
            <img src={MainImg} alt="" />
          </div>
          <div className="right">
            <img src={Main} alt="" />
          </div>
        </div>
        <div className="doneters">
          <h3>Used by industry leaders</h3>
          <div className="donatLogos">
            <img src={Pet} alt="" />
            <img src={Show} alt="" />
            <img src={Republe} alt="" />
            <img src={Nisbet} alt="" />
            <img src={Heart} alt="" />
            <img src={Win} alt="" />
          </div>
        </div>
        <div className="mainCard">
          <h1>
            Make mobile journeys easier, faster and frictionless for your
            clients
          </h1>
       <div className="rowCards">
       <div className="card">
            <img src="https://picsum.photos/id/400/200/300" alt="" />
            <h4>Easy to use</h4>
            <p>
              A complete set of tools to enable marketing teams to easily
              curate, personalize, contextualize, send, integrate and track
              campaigns - no coding required. Our software design philosophy is
              all about the mobile end user, in particular their preference to
              Tap not Type.
            </p>
          </div>
          <div className="card">
            <img src="https://picsum.photos/id/50/200/300" alt="" />
            <h4>Revenue driving</h4>
            <p>
              A complete set of tools to enable marketing teams to easily
              curate, personalize, contextualize, send, integrate and track
              campaigns - no coding required. Our software design philosophy is
              all about the mobile end user, in particular their preference to
              curate, personalize, contextualize, send, integrate and track
            </p>
          </div>
          <div className="card">
            <img src="https://picsum.photos/id/440/200/300" alt="" />
            <h4>Integrated with your stack</h4>
            <p>
              A complete set of tools to enable marketing teams to easily
              curate, personalize, contextualize, send, integrate and track
              campaigns - no coding required
            </p>
          </div>
       </div>

        </div>
      </div>
    </>
  );
}

export default App;
