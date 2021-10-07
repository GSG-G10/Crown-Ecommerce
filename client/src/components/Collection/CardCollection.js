/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import { Heading5, Heading4 } from '../Typography';
import './style.css';

function CardCollection({ image, typeCategory, descriptoin }) {
  return (
    <div className="card-container">
      <img src={image} alt={descriptoin} />
      <div className="card-details">
        <Heading5>SHOP ALL YALA </Heading5>
        <Heading4>{typeCategory}</Heading4>
        <button className="button">VIEW COLLECTION</button>
      </div>
    </div>
  );
}

export default CardCollection;
