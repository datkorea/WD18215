import React from "react";
function Header() {
  return (
    <div className="header">
      <div className="menu">HotCoffee</div>
      <div className="menu-right">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/src/component/Article/Articles.tsx">Articles</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;