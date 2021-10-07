import { Card } from "antd";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
const { Meta } = Card;
function CardWrapper({
  key,
  data: { id, title, category, image1, price, onClick },
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="container-card" id={id}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={title} src={image1} />}
        >
          <div className="container-card-title">
            <Meta title={title} />
            <h4>{price}</h4>
            <h5>for {category}</h5>
          </div>
          <div className="container-card-icon">
            <button onClick={onClick}>
              <AiOutlineHeart />
            </button>
          </div>
        </Card>
      </div>
    </Link>
  );
}

export default CardWrapper;
