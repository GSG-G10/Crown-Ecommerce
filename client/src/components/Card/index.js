import { Card } from "antd";
const { Meta } = Card;

function CardWrapper({
  key,
  data: { id, title, category, image1, price, onClick },
}) {
  console.log(image1);
  return (
    <div className="container-card" id={id}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={image1} />}
      >
        <Meta title={title} description="Crown-Ecommerce.com" />
      </Card>
    </div>
  );
}

export default CardWrapper;
