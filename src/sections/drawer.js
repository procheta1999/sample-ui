import React, {useState} from 'react';
import '../App.css';
import { Drawer, Button, PageHeader } from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import colors from '../colors/color';
const Burger=()=>{
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return(
<>
<PageHeader
    className="site-page-header"
    style={{backgroundColor:colors.account,color:colors.write}}
    title="Logo"
    extra={[
      <Button key="3" icon={<MenuOutlined style={{color:colors.write,fontSize:20}}/>} type="link" onClick={showDrawer}>
    </Button>
    ]}
  />
     
      <Drawer
          placement='top'
          onClose={onClose}
        visible={visible}
        bodyStyle={{ backgroundColor:colors.account }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
</>
    )
}
export default Burger