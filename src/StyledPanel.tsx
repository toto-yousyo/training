export default function StyledPanel({ children }) {
  return (
    <div className="m-12 w-fit border border-black bg-white p-5 shadow">
      {children}
    </div>
  );
}
