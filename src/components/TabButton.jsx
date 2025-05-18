export default function TabButton({ children, isSelected, ...props }) {
  console.log("tab buttons rendered");
  return (
    <li>
      {/* ...props ile onClick olayını dinliyoruz */}
      {/* We listen to the onClick event with ...props */}
      <button className={isSelected ? "active" : null} {...props}>
        {children}
      </button>
    </li>
  );
}
