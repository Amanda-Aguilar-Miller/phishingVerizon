import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        Choose free 2-day shipping or in-store pickup.
      </div>

      <div className="links-wrappers">
        <img src={require("./verizon.png")} />
        <div className="top-links-wrapper">
          <br />
          <a href className="wireless">
            Wireless
          </a>
          <a href className="inhome">
            In Home
          </a>
          <a href className="business">
            Business
          </a>
          <a href className="stores">
            Stores
          </a>
          <br />
          <br />
          <a href className="Phones">
            Phones
          </a>
          <a href className="Phones">
            Plans
          </a>
          <a href className="Phones">
            Deals
          </a>
          <a href className="Phones">
            Support
          </a>
          <a href className="Phones">
            5G
          </a>
          <a href className="Espanol">
            Espanol
          </a>
          <a href className="Signs">
            Sign In
          </a>
        </div>
        <div className="searchTextBoxTop">
          <input
            class="search"
            tabindex="-1"
            aria-hidden="true"
            type="text"
            name="q"
            maxLength="100"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="hrBreak">
        <hr />
      </div>
      <div className="signIn-register-wrapper">
        <div className="SignIn-Wrapper">
          <h1 className="SignIn"> Sign In</h1>
          <label className="IDToken">Mobile Number of User ID</label>
          <input
            type="text"
            className="form-control"
            aria-request="true"
            autoComplete="off"
            placeholder="Mobile Number or User ID"
          />
          <label className="PasswordToken">Password</label>
          <br />
          <input
            type="text"
            className="password-control"
            aria-request="true"
            autoComplete="off"
            placeholder="Password"
          />
          <br />
          {/* <div className="checkbox"> */}
          <input type="checkbox" id="rememberUser"></input>
          <span className="Remember">Remember me</span>
          <a href className="ForgotInfo">
            Forgot Your Info?
          </a>
          {/* </div> */}

          <br />
          <button className="signInBtn">Sign In</button>
        </div>

        <div>
          <h1 className="Register">Register</h1>
          <p className="text-wrapper">
            With Verizon, you get the convenience of managing your <br />{" "}
            account online including these great benefits:
          </p>
          <div className="list-wrapper">
            <li>View your usage</li>
            <li>Make payments</li>
            <li>Change or reset your Voice Mail password</li>
            <li>Access My Verizon on your mobile phone</li>

            <br />
            <a href className="learnMore">
              Learn More
            </a>
          </div>
          <button className="RegisterBtn">Register</button>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="AppsServicesWrapper">
          <div className="Apps">Apps & Services</div>
          <hr />
          <a href>My Verizon</a>
          <br />
          <a href> Verizon Cloud</a>
          <br />
          <a href>Smart Family</a>
          <br />
          <a href>Tech store</a>
          <br />
          <a href>Device trade-in</a>
          <br />
          <a href>Device Repair</a>
          <br />
          <a href>Call Filter</a>
          <br />
          <a href>Apple Music</a>
          <br />
          <a href>Premium Visual Voicemail</a>
          <br />
          <a href>Hum</a>
          <br />
          <div className="bottomBorderWrapper">
            <a href>See More Apps</a>
          </div>
          <br />
        </div>

        <div className="brandsWrapper">
          <div className="brands">Brands</div>
          <hr />
          <a href>Apple</a>
          <br />
          <a href>ASUS</a>
          <br />
          <a href>Google</a>
          <br />
          <a href>LG</a>
          <br />
          <a href>Motorola</a>
          <br />
          <a href>Palm</a>
          <br />
          <a href>Samsung</a>
        </div>

        <div className="FollowSubWrapper">
          <div className="follow">Follow</div>
          <hr />
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
          <br />
          <br />
          <br />
          <br />
          <div className="subs">Subscribe</div>
          <hr />
          <a href>Sign Up</a>
        </div>
        <div className="StoreLocateEndWrapper">
          <div className="locates">Store Locator</div>
          <hr />

          <input
            class="Bottom-Search"
            tabindex="-1"
            aria-hidden="true"
            type="text"
            name="q"
            maxLength="100"
            placeholder="Enter a location"
          />
        </div>
      </div>
      <div className="finalLogo">
        <img src={require("./blacklogo.png")} />
      </div>
    </div>
  );
}

export default App;
