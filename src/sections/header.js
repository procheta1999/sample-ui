import React from 'react';
import '../App.css';
import { PageHeader , Button, Row, Col, Space} from 'antd';
const Header = () =>{
    return(
        <PageHeader classname="site-page-header-responsive" 
     title="Logo"
     style={{paddingRight:115,marginBottom:30}}
     extra={[
      <Button key="5" type="link" className="button-header">Home</Button>,
      <Button key="4" type="link" className="button-header">How It Works</Button>,
      <Button key="3" type="link" className="button-header">Features</Button>,
        <Button key="2" type="link" className="button-header">Pricing</Button>,
        <Button key="1" type="primary" style={{backgroundColor:'#4a4ef7',borderColor:'#4a4ef7',borderRadius:'0.375rem',fontWeight:'500'}}>
          Create Account
        </Button>,
     ]}
     ></PageHeader>
    )
}
export default Header;