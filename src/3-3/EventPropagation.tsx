export default function EverntPropagation() {
  const handleParent = () => alert(`#parent run...`);
  const handleMy = () => alert(`#my run...`);
  const handleChild = () => alert(`#Child run...`);

  return (
    <div
      id="parent"
      className="ml-12 h-80 w-80 border border-black p-2"
      onClick={handleParent}
    >
      parent element
      <div
        id="my"
        onClick={handleMy}
        className="ml-11 h-70 w-70 border border-amber-800 p-1"
      >
        current element
        <a
          id="child"
          href="https://wings.msn.to"
          className="ml-10 h-50 w-50 border border-gray-700 p-2"
          onClick={handleChild}
        >
          child element
        </a>
      </div>
    </div>
  );
}
