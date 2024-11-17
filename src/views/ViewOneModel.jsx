import React, {useRef, useEffect} from 'react';
import {Row, Col, Button} from 'antd';
import {LeftOutlined} from '@ant-design/icons';
import {useNavigate, useLocation} from 'react-router-dom';

function ViewOneModel() {
  const navigator = useNavigate();
  const location = useLocation();
  const {selectedModel} = location.state;
  function goBack() {
    navigator('/');
  }

  return (
    <div className="w-100 mt-2">
      <Row>
        <div className="ms-4 d-flex">
          <LeftOutlined />
          <Button onClick={goBack}>Retourner</Button>
        </div>
      </Row>
      <Row>
        <Col span={22} offset={1}>
          <iframe
            title={selectedModel.name}
            className="w-100 iframe-display"
            src={selectedModel.iFrameLink}
          ></iframe>
        </Col>
      </Row>
    </div>
  );
}
export default ViewOneModel;
