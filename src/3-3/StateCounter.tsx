export default function StateCounter({ step, onUpdate }) {
  const handleClick = () => onUpdate(step);
  return (
    <button className="" onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
}
