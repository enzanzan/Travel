import * as React from 'react';
import { Layout, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;
export const Footer: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Layout.Footer>
      <Title level={3} style={{ textAlign: 'center' }}>
        {t("tooter.detail")}
      </Title>
    </Layout.Footer>
  );
};
