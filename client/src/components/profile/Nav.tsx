import { Link } from "react-router-dom";
import { profileNavLinkInterface } from "../../interfaces";

const Nav = ({
  path,
  name,
  newPath,
  handleClicked,
  activeColor,
  testPath,
}: profileNavLinkInterface) =>
  // ! This regex is used to match every student path that contains any id number and an optional / at the end!
  /^\/student\/[0-9]\/?$/.test(String(newPath)) ? (
    <Link
      to={path}
      onClick={() => handleClicked(path)}
      className={path.endsWith("/health") ? activeColor : undefined}
    >
      {name}
    </Link>
  ) : (
    <Link
      to={path}
      onClick={() => handleClicked(path)}
      className={newPath === testPath ? activeColor : undefined}
    >
      {name}
    </Link>
  );

export default Nav;
