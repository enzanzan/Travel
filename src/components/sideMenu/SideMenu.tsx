import * as React from 'react';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';
import styles from './SideMenu.module.css';
import { sideMenuList } from "./mockup";

interface ISideMenuProps {
}

export const SideMenu: React.FunctionComponent<ISideMenuProps> = (props) => {
    return (
        <Menu mode='vertical' className={styles['side-menu']}>
            {
                sideMenuList.map((item, index) => (
                    <Menu.SubMenu
                        key={`side-menu-${index}`}
                        title={<span><GifOutlined />{item.title}</span>}
                    >
                        {
                            item.subMenu.map((sitem, sindex) => (
                                <Menu.SubMenu
                                    key={`sub-menu-${sindex}`}
                                    title={<span><GifOutlined />{sitem.title}</span>}
                                >
                                    {
                                        sitem.subMenu.map((sitems, sindexs) => (
                                            <Menu.Item
                                                key={`side-sub-menu-${sindexs}`}
                                            ><span><GifOutlined />{sitems}</span></Menu.Item>
                                        ))
                                    }
                                </Menu.SubMenu>
                            ))
                        }
                    </Menu.SubMenu>
                ))
            }
        </Menu>
    )
};

