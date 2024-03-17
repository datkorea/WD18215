import React from "react";
function Header() {
  return (
    <div className="header">
      <div className="menu">HotCoffee</div>
      <div className="menu-right">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/articles">Articles</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;