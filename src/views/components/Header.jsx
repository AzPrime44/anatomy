import {Col} from 'antd';
import logo from '../../asserts/images/logo_ucad.webp';
import fmpo from '../../asserts/images/fmpo.jpg';

function Header() {
  return (
    <Col offset={1} span={22} className="d-flex justify-content-center mb-4">
      <img src={fmpo} alt="logo" style={{width: '800px', height: '100px'}} />
    </Col>
  );
}

export default Header;
