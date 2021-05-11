import React from 'react';
import '../App.css';
import { PageHeader , Button, Row, Col, Space} from 'antd';
import colors from '../colors/color';
const Content = () =>{
    return(
        <center><Row justify="space-around" gutter={4}>
        <Col xl={9} lg={8} md={12} xs={20} order={1} className='col-content'><h1 className="header-text" style={{color:colors.content}}>Build this rad landing page from scratch</h1>
        <p className="subheader" style={{color:colors.title}}>This is the subheader section where you describe the basic benefits of your product</p>
        <Button className="create-account" style={{backgroundColor:colors.account,borderColor:colors.account,color:colors.write}}>
         Create your account now
       </Button>
       <sub className="subtext" style={{color:colors.subtext}}>No credit card required.</sub>
        </Col>
        {/* <Col span={4} className='col-content'>hello</Col> */}
        <Col xl={14} lg={16} md={12} xs={20} order={2} className="exception"><img className="img-content" src="https://source.unsplash.com/collection/404339/800x600"></img></Col>
        {/* <Col span={4} className='col-content'></Col> */}
      </Row></center>
    )
}
export default Content;