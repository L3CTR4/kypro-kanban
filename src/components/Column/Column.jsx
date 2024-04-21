import Card from "../Card/Card";

const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card category="Web Design" title="Выучить реакт" date="12.06.24" />
        <Card category="Reseatch" title="Победить всех и вся" date="12.06.24" />
        <Card category="Test" title="Test" date="02.07.24" />
      </div>
    </div>
  );
};

export default Column;
