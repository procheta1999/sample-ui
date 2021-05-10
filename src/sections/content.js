import React from 'react';
import '../App.css';
import { PageHeader , Button, Row, Col, Space} from 'antd';
import colors from '../colors/color';
const Content = () =>{
    return(
        <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className='col-content'><h1 className="header-text" style={{color:colors.content}}>Build this rad landing page from scratch</h1>
        <p className="subheader" style={{color:colors.title}}>This is the subheader section where you describe the basic benefits of your product</p>
        <Button className="create-account" style={{backgroundColor:colors.account,borderColor:colors.account,color:colors.write}}>
         Create your account now
       </Button>
       <br></br>
       <br></br>
       <sub className="subtext" style={{color:colors.subtext}}>No credit card required.</sub>
        </Col>
        {/* <Col span={4} className='col-content'>hello</Col> */}
        <Col span={4} className="exception"><img className="img-content" src="https://source.unsplash.com/collection/404339/800x600"></img></Col>
        <Col span={4} className='col-content'></Col>
      </Row>
    )
}
export default Content;