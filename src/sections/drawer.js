import React, {useState} from 'react';
import '../App.css';
import { Drawer, Button, PageHeader , Divider} from 'antd';
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
      height={420}
          placement='top'
          onClose={onClose}
        visible={visible}
        bodyStyle={{ backgroundColor:colors.drawer,color:colors.write }}
        >
            <br></br>
         <div className="burger-contents"><span>Home</span></div>
         <Divider style={{color:colors.write}}/>
         <div className="burger-contents"><span>How It Works</span></div>
         <Divider style={{color:colors.write}}/>
         <div className="burger-contents"><span>Features</span></div>
         <Divider style={{color:colors.write}}/>
         <div className="burger-contents"><span>Pricing</span></div>
         <Divider style={{color:colors.write}}/>
         <div className="burger-contents"><span>Create Account</span></div>
         <Divider style={{color:colors.write}}/>
         <br></br>
        </Drawer>
</>
    )
}
export default Burger