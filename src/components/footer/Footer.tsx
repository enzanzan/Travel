import * as React from 'react';
import { Layout, Typography } from 'antd';

interface IFooterProps {
}

const { Title } = Typography;
export const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <Layout.Footer>
      <Title level={3} style={{ textAlign: 'center' }}>
        版权所有 @ Enzan 旅游网
      </Title>
    </Layout.Footer>
  );
};
