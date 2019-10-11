import React from "react";

const BottomWrappers = () => {
  return (
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
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter"></i>
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
          className="Bottom-Search"
          type="text"
          name="q"
          maxLength="100"
          placeholder="Enter a location"
        />
      </div>
    </div>
  );
};

export default BottomWrappers;
