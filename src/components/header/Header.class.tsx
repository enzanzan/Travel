import React, { useState } from 'react';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useHistory, useLocation, useParams, useRouteMatch, withRouter, RouteComponentProps } from 'react-router-dom'
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect, useSelector } from 'react-redux'; // useSelector 相当于connect
import { Dispatch } from 'redux'
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import store, { RootState } from '../../redux/store';
import { LanguageState } from '../../redux/language/languageReducer';
import { t } from 'i18next';
import { addLanguageActionCreator, changeLanguageActionCreator } from '../../redux/language/languageActions';

interface State extends LanguageState { }

const { Title, Text } = Typography;
const { Search } = Input;


type PropsType = RouteComponentProps & // react-router 路由props类型
  WithTranslation &  // i18n props类型
  ReturnType<typeof mapStateToProps> & // redux store 映射类型
  ReturnType<typeof mapDispatchToProps>  // redux dispatch 映射类型

const HeaderComponent: React.FunctionComponent<PropsType> = (props) => {

  const history = useHistory();   // 获得history的路由数据
  const location = useLocation();  // 当前路径的信息
  const params = useParams(); // 获得url参数
  const match = useRouteMatch(); // 路径匹配的数据

  const storeState = store.getState();
  const [language, setLanguage] = useState(storeState.language)
  const [languageList, setlanguageList] = useState(storeState.languageList)

  store.subscribe(() => {
    const storetate = store.getState();
    setLanguage(storetate.language)
    setlanguageList(storetate.languageList)
  })

  const menuClickHandler = (e: any) => {
    console.log(e);
    if (e.key === "new") {
      // 处理新语言添加action 
      props.addLanguage("新语言", "new_lang");
    } else {
      props.changeLanguage(e.key);
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
              <Menu onClick={() => { menuClickHandler }}>
                {props.languageList.map(value => {
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
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu>
    </div>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    language: state.language,
    languageList: state.languageList
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = changeLanguageActionCreator(code);
      dispatch(action);
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code);
      dispatch(action);
    }
  }
}
export const Header = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(HeaderComponent)));