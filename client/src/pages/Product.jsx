import React, { useEffect, useState } from "react";
import ViewerImage from "../components/ImageViwer";
import Span from "../components/Span";
import "../styles/product-page.css";
import ButtonMain from "../components/ButtonMain";
import { ShoppingCartOutlined, HeartTwoTone } from "@ant-design/icons";
import Page404 from "../components/Page404";
import Loaded from "../components/Loaded";
import { ApiCall } from "../utils/ApiCall";
import { Link } from "react-router-dom";
import ImageTag from "../components/ImageTag";

function Product({ match }) {
  const [dataProduct, setDataProduct] = useState({ data: "title" });
  const [dataMoreProduct, setDataMoreProduct] = useState([]);
  const [colorSelect, setColorSelect] = useState(0);
  const [sizeSelect, setSizeSelect] = useState(2);
  const [idProduct, setIdProduct] = useState(match.params.id);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    ApiCall(`http://localhost:8080/api/v1/product/${idProduct}`).then(
      (data) => {
        setDataProduct(data);
        setIsLoader(false);
      }
    );

    ApiCall(`http://localhost:8080/api/v1/product/more`).then((data) => {
      setDataMoreProduct(data);
    });
  }, [idProduct]);

  const selectColore = (e) => {
    setColorSelect(e);
  };

  const selectSizes = (e) => {
    setSizeSelect(e);
  };
  const newMoreProduct = (e) => {
    setIdProduct(e);
  };

  const addTocart = (e) => {
    console.log(idProduct);
  };

  return (
    <div className="wrapper_product">
      {isLoader ? (
        <div className="isLoadeing">
          <Loaded />
        </div>
      ) : (
        <>
          <div className="view_product">
            <div className="side_more_img_product">
              <ViewerImage src={dataProduct.data[0].image2} />
              <ViewerImage src={dataProduct.data[0].image3} />
              <ViewerImage src={dataProduct.data[0].image4} />
            </div>
            <div className="main_img_product">
              <ViewerImage
                className="img_center"
                src={dataProduct.data[0].image1}
              />
            </div>
            <div className="info_product_and_added">
              <Span
                className="title_product"
                text={dataProduct.data[0].title}
              />
              <Span className="line_info" text="$22.99" />
              <Span className="line_info" text="color:" />

              <div className="select_color">
                <Span
                  className={`bowl_coloe ${
                    colorSelect === 0 ? "active" : null
                  }`}
                  onClick={() => selectColore(0)}
                />
                <Span
                  className={`bowl_coloe ${
                    colorSelect === 1 ? "active" : null
                  }`}
                  onClick={() => selectColore(1)}
                />
                <Span
                  className={`bowl_coloe ${
                    colorSelect === 2 ? "active" : null
                  }`}
                  onClick={() => selectColore(2)}
                />
                <Span
                  className={`bowl_coloe ${
                    colorSelect === 3 ? "active" : null
                  }`}
                  onClick={() => selectColore(3)}
                />
                <Span
                  className={`bowl_coloe ${
                    colorSelect === 4 ? "active" : null
                  }`}
                  onClick={() => selectColore(4)}
                />
                <Span
                  className={`bowl_coloe ${
                    colorSelect === 5 ? "active" : null
                  }`}
                  onClick={() => selectColore(5)}
                />
              </div>

              <Span className="line_info" text="size:" />
              <div className="select_size">
                <Span
                  text="S"
                  className={`bowl_size ${sizeSelect === 0 ? "active" : null}`}
                  onClick={() => selectSizes(0)}
                />
                <Span
                  text="M"
                  className={`bowl_size ${sizeSelect === 1 ? "active" : null}`}
                  onClick={() => selectSizes(1)}
                />
                <Span
                  text="L"
                  className={`bowl_size ${sizeSelect === 2 ? "active" : null}`}
                  onClick={() => selectSizes(2)}
                />
                <Span
                  text="XL"
                  className={`bowl_size ${sizeSelect === 3 ? "active" : null}`}
                  onClick={() => selectSizes(3)}
                />
                <Span
                  text="XX"
                  className={`bowl_size ${sizeSelect === 4 ? "active" : null}`}
                  onClick={() => selectSizes(4)}
                />
                <Span
                  text="3X"
                  className={`bowl_size ${sizeSelect === 5 ? "active" : null}`}
                  onClick={() => selectSizes(5)}
                />
              </div>

              <div className="btn_add_Cart">
                <div className="toaddcartclas" onClick={addTocart}>
                  <ButtonMain className="btn_add_to_cart">
                    <ShoppingCartOutlined twoToneColor="#eb2f96" />
                    <Span text="Add to cart" />
                  </ButtonMain>
                </div>
                <HeartTwoTone twoToneColor="#eb2f96" />
              </div>
            </div>
          </div>
          <div className="more_products_like">
            <Span className="more_like_product" text="more like:" />
            <div className="wrapper_more_img">
              {dataMoreProduct.map((prod, i) => {
                return (
                  <ImageTag
                    onClick={() => newMoreProduct(prod.id)}
                    key={i}
                    className="banar_nore_img"
                    src={prod.img}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
