import "../assets/styles/layout.css";

const Header = () => {
  return (
    <div className="header-content">
      <a href="profile"><span className="header-user-name">{"เจตน์ สระพรหม"}</span></a>
      <select className="select-language">
        <option value="th">
            TH
        </option>
        <option value="en">
            EN
        </option>
      </select>
    </div>
  );
};

export default Header;

