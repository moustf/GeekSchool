import { Link } from "react-router-dom";
import { profileNavLinkInterface } from "../../interfaces";

const Nav = ({
  path,
  name,
  newPath,
  handleClicked,
  activeColor,
  testPath,
}: profileNavLinkInterface) => (
  <Link
    to={path}
    onClick={() => handleClicked(path)}
    className={newPath === testPath ? activeColor : undefined}
  >
    {name}
  </Link>
);

export default Nav;
