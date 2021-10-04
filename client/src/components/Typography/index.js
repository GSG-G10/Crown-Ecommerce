import "./style.css";

export function Heading({ children, className }) {
  return <h2 className={className}>{children}</h2>;
}
export function Para({ children }) {
  return <p className="paragraph">{children}</p>;
}
