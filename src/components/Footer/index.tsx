import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '杨仕博出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '民族库',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/></>,
          href: 'https://github.com',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: 'good',
          href: '',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
