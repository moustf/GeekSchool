import { Link } from "react-router-dom";

interface AsideLinkInterface {
  icon: any;
  text: string;
  path: string;
  activeColor: string;
  newPath: string | null;
  handleClicked: any;
}

const AsideLink = ({
  icon,
  text,
  path,
  handleClicked,
  activeColor,
  newPath,
}: AsideLinkInterface) =>
  /^\/class\/[0-9]\/?$/.test(String(newPath)) ? (
    <Link
      to={path}
      onClick={() => handleClicked(path)}
      className={path.endsWith("/stats") ? activeColor : undefined}
    >
      {icon}
      {text}
    </Link>
  ) : (
    <Link
      to={path}
      onClick={() => handleClicked(path)}
      className={newPath === path ? activeColor : undefined}
    >
      {icon}
      {text}
    </Link>
  );

export default AsideLink;
