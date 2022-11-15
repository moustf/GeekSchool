interface dashboardCardInterface {
  length: number | string;
  name: string;
  color: string;
}

const DashboardCard = ({ length, name, color }: dashboardCardInterface) => (
  <div className="statistics-card" style={{ background: color }}>
    <h1>{name}</h1>
    <div>
      <h2>{length}</h2>
      <p>{name}</p>
    </div>
  </div>
);

export default DashboardCard;