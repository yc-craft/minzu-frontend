import {Image} from 'antd';
import { Card, Col, Form, List, Row, Select } from 'antd';
import type { FC } from 'react';
import { useRequest } from 'umi';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import styles from './style.less';
import { searchMinzuBy} from "@/services/ant-design-pro/api";

const { Option } = Select;
const FormItem = Form.Item;


const Minzusearch: FC = () => {

  const {data, loading, run } = useRequest((values: any) => {
    console.log('form data', values);
    return new Promise<{data: API.CurrentMinzu[]}>((resolve)=>{
      // 这里的请求需要传values里面的数据给接口
      searchMinzuBy(values).then(res=>{
        resolve({
          data: res
        })
      })
    })
  });

  console.log(data)
  const list = data || []

  const cardList = list && (
    <List<API.CurrentMinzu>
      rowKey="id"
      loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={list}
      pagination={{
        pageSize: 8,
      }}
      renderItem={(item) => {
        if (item.minzuSource == 0){
          return (
            <List.Item>
              <Card className={styles.card} hoverable cover={<Image alt={item.minzuName} src={item.minzuUrl} />}>
                <Card.Meta
                  title={<a>{item.minzuName}</a>}
                />
              </Card>
            </List.Item>
          )
        }
        else if (item.minzuSource == 2){
          return (
            <List.Item>
              <Card className={styles.card} hoverable cover={<video controls src={item.minzuUrl} />}>
                <Card.Meta
                  title={<a>{item.minzuName}</a>}
                />
              </Card>
            </List.Item>
          )
        }
        else return (
            <List.Item>
              <Card className={styles.card} hoverable cover={<audio controls src={item.minzuUrl} />}>
                <Card.Meta
                  title={<a>{item.minzuName}</a>}
                />
              </Card>
            </List.Item>
          )
      }}
    />);

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <div className={styles.coverCardList}>
      <Card bordered={true}>
        <Form
          layout="inline"
          onValuesChange={async (_, values) => {
            // 表单项变化时请求数据
            console.log(values);
            run(values)
          }}
        >
          <StandardFormRow title="民族" block style={{ paddingBottom: 11 }}>
            <FormItem name="minzuType">
              <TagSelect expandable>
                <TagSelect.Option value="白族">白族</TagSelect.Option>
                <TagSelect.Option value="藏族">藏族</TagSelect.Option>
                <TagSelect.Option value="傣族">傣族</TagSelect.Option>
                <TagSelect.Option value="回族">回族</TagSelect.Option>
                <TagSelect.Option value="傈僳族">傈僳族</TagSelect.Option>
                <TagSelect.Option value="蒙古族">蒙古族</TagSelect.Option>
                <TagSelect.Option value="苗族">苗族</TagSelect.Option>
                <TagSelect.Option value="土家族">土家族</TagSelect.Option>
                <TagSelect.Option value="彝族">彝族</TagSelect.Option>
                <TagSelect.Option value="壮族">壮族</TagSelect.Option>
              </TagSelect>
            </FormItem>
          </StandardFormRow>

          <StandardFormRow title="其它选项" grid last>
            <Row gutter={16}>
              <Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="媒体" name="minzuSource">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="0">图片</Option>
                    <Option value="1">音频</Option>
                    <Option value="2">视频</Option>
                    <Option value="3">不限</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <div className={styles.cardList}>{cardList}</div>
    </div>
  );
};

export default Minzusearch;
