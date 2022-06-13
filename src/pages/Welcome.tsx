import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'更快更强的民族库资源，已经发布。'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          资源查看{' '}
          <a
            href='/minzusearch'
            rel="chapter"
            target="_self"
          >
            欢迎使用
          </a>
        </Typography.Text>
        <CodePreview>yc-craft.cn</CodePreview>

        <Typography.Text strong>
          {' '} 登录后查看更多资源！
        </Typography.Text>


      </Card>
    </PageContainer>
  );
};

export default Welcome;
