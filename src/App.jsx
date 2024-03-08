import MainImg from './assets/IMAGE.png'
import Main from './assets/main.png'
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
            <p>Welcome to the next generation of mobile commerce and customer engagement. Meet your mobile customers where they want to be met.</p>
            <img src={MainImg} alt="" />
          </div>
          <div className="right">
            <img src= {Main} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
