import { List, Col, Row } from "antd";
import React, { useRef, useEffect } from "react";
import "./styles.scss";
const Index = (props) => {
  const { item, handleDetail } = props;
  const refImg = useRef();
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const obersever = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.getAttribute("data-src");
        } else {
          // entry.target.src = 'https://via.placeholder.com/300x196'
        }
      }
    }, options);

    if (refImg.current) obersever.observe(refImg.current);

    return () => {
      if (refImg.current) obersever.unobserve(refImg.current);
    };
  }, [refImg.current]);

  return (
    <List.Item className="new-item" onClick={() => handleDetail(item)}>
      <Row>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className={`new-item__image`}>
            <img
              ref={refImg}
              src="https://via.placeholder.com/400x210"
              data-src={item.urlToImage}
              alt={item.urlToImage}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <div className="item-new__content">
            <h2 className="item-new__content-title">{item.title}</h2>
            <span className="new-item__content-author">{item.author}</span>
            <div
              className="new-item__content-desc"
              //   dangerouslySetInnerHTML={{__html: item.description}}
            >
              {item.description}
            </div>
          </div>
        </Col>
      </Row>
    </List.Item>
  );
};

export default Index;
