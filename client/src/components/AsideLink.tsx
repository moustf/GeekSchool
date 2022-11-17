import { Link } from "react-router-dom";

interface AsideLinkInterface {
  icon: any;
  text: string;
  path: string;
  activeColor: string;
  newPath: string | null;
  role: string;
  handleClicked: any;
}

const AsideLink = ({
  icon,
  text,
  path,
  handleClicked,
  activeColor,
  newPath,
  role,
}: AsideLinkInterface) =>
  /^\/class\/[0-9]\/?$/.test(String(newPath)) ? (
    <Link
      to={path}
      onClick={() => handleClicked(path)}
      className={
        role === "teacher" && path.endsWith("/stats")
          ? activeColor
          : role === "student" && path.endsWith("/announcements")
          ? activeColor
          : undefined
      }
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
