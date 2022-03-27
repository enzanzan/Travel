import * as React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import styles from './BusinessPartners.module.css';

import carouselImage1 from "../../assets/images/facebook-807588_640.png";
import carouselImage2 from "../../assets/images/follow-826033_640.png";
import carouselImage3 from "../../assets/images/icon-720944_640.png";
import carouselImage4 from "../../assets/images/microsoft-80658_640.png";

interface PropType {
  title: JSX.Element;
}

export const BusinessPartners: React.FunctionComponent<PropType> = ({ title }) => {
  return <div className={styles.content}>
    <Divider orientation='left' >{title}</Divider>
    <Row>
      <Col span={6}>
        <img src={carouselImage1} />
      </Col>
      <Col span={6}>
        <img src={carouselImage2} />
      </Col>
      <Col span={6}>
        <img src={carouselImage3} />
      </Col>
      <Col span={6}>
        <img src={carouselImage4} />
      </Col>
    </Row>
  </div>
};

