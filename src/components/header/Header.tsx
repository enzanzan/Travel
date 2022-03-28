import React from 'react';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import { addLanguageActionCreator, changeLanguageActionCreator } from '../../redux/language/languageActions';
import { useSelector } from '../../redux/hooks';

const { Title, Text } = Typography;
const { Search } = Input;
export const Header: React.FunctionComponent = () => {

  const history = useHistory();   // 获得history的路由数据
  const location = useLocation();  // 当前路径的信息
  const params = useParams(); // 获得url参数
  const match = useRouteMatch(); // 路径匹配的数据
  const language = useSelector((state) => state.language);
  const languageList = useSelector((state) => state.languageList);
  const dispatch = useDispatch();
  // const dispatch = useDispatch<Dispatch<LanguageActionTypes>>();
  const { t } = useTranslation();

  const menuClickHandler = (e: any) => {
    console.log(e);
    if (e.key === "new") {
      // 处理新语言添加action 
      dispatch(addLanguageActionCreator("新语言", "new_lang"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  }

  return (
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Text>{t("header.slogan")}</Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map(value => {
                  return <Menu.Item key={value.code}>{value.name}</Menu.Item>
                })}
                <Menu.Item key={"new"}>{t("header.add_new_language")}</Menu.Item>
              </Menu>
            }
          >
            <GlobalOutlined />{language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => history.push("signIn")}>{t("header.signin")}</Button>
            <Button onClick={() => history.push("register")}>{t("header.register")}</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => history.push("/")}>
          <img src={logo} className={styles["App-logo"]} />
          <Title level={3} className={styles.title}> {t("header.title")} </Title>
        </span>
        <Search placeholder="请输入旅游目的地、主题、或关键字" enterButton className={styles['search-input']} />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  );
};