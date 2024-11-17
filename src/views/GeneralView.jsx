import React, {useState} from 'react';
import {Button, Col, Row} from 'antd';
function GeneralView() {
  return (
    <div>
      <div className="w-100">
        <Col span={23} offset={1}>
          <iframe
            title="macbioidi-mauritania-thorax-2020-11-15-viewer"
            className="w-100"
            src="https://www.openanatomy.org/atlases/macbioidi/mauritania/thorax-2020-11-15/viewer/"
          ></iframe>
        </Col>
      </div>
    </div>
  );
}
export default GeneralView;
