export default function TitledPanel({ children }) {
  const title = children.find((elem) => elem.key === "title");
  const body = children.find((elem) => elem.key === "body");

  return (
    <div className="m-12 w-fit border border-black bg-white p-5 shadow">
      {title}
      <hr />
      {body}
    </div>
  );
}
