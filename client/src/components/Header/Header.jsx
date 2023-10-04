import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgBackspace, CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { Search } from "react-router-dom";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [scroled, setscroled] = useState(false);
  const [showcart, setshowcart] = useState(false);
  const handelScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setscroled(true);
    } else setscroled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scroled ? "sticky-header" : ""}`}>
        <div className="header-component">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>

          <div className="center">DivineDealsIndia</div>
          <div className="right">
            <TbSearch />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setshowcart(true)}>
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart setshowcart={setshowcart} />}
    </>
  );
};

export default Header;
