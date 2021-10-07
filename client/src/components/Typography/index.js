/* eslint-disable react/prop-types */
import './style.css';

export function Heading2({ children }) {
  return <h2 className="heading-2">{children}</h2>;
}
export function Heading4({ children }) {
  return <h4 className="heading-4">{children}</h4>;
}
export function Heading5({ children }) {
  return <h5 className="heading-5">{children}</h5>;
}

export function Para({ children }) {
  return <p className="paragraph">{children}</p>;
}
