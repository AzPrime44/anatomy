import React, {useState, useEffect} from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {Row, Col, Input, Skeleton, Button, Avatar} from 'antd';
import Card from './components/Cards';
import {useNavigate} from 'react-router-dom';
import {listOfModels} from './data';

export default function ChooseModel() {
  const [choix, setChoix] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredListOfModels, setFilteredListOfModels] = useState([]);

  const navigator = useNavigate();
  function selectioner() {
    const selectedModel = listOfModels.find((model) => model.id === choix);
    navigator('/visualisation', {
      state: {selectedModel: selectedModel},
    });
  }

  useEffect(() => {
    setFilteredListOfModels(
      listOfModels.filter((model) =>
        model.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);
  return (
    <div style={{width: '100%', marginTop: '10px'}}>
      <Col offset={4} span={16}>
        <div className="d-flex gap-5">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Rechercher un candidat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="large"
            style={{width: 400}}
          />
          {choix !== '' && (
            <Selected
              model={listOfModels.find((model) => model.id === choix)}
              selectioner={selectioner}
            />
          )}
        </div>
      </Col>
      <Col offset={2} span={20} style={{marginTop: '20px'}}>
        <Row gutter={[16, 16]}>
          {filteredListOfModels.length > 0 ? (
            filteredListOfModels.map((model) => (
              <Col key={model.id}>
                <Card
                  id={model.id}
                  name={model.name}
                  banner={model.image}
                  description={model.description}
                  choix={choix}
                  setChoix={setChoix}
                />
              </Col>
            ))
          ) : searchTerm === '' ? (
            <Row gutter={[16, 16]}>
              {[1, 2, 3].map((item) => (
                <Col key={item}>
                  <SkeletonCard />
                </Col>
              ))}
            </Row>
          ) : (
            <div
              className="d-flex justify-content-around"
              style={{width: '100%'}}
            >
              <svg
                width="184"
                height="152"
                viewBox="0 0 184 152"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(24 31.67)">
                    <ellipse
                      fillOpacity=".8"
                      fill="#F5F5F7"
                      cx="67.797"
                      cy="106.89"
                      rx="67.797"
                      ry="12.668"
                    ></ellipse>
                    <path
                      d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                      fill="#AEB8C2"
                    ></path>
                    <path
                      d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                      fill="url(#linearGradient-1)"
                      transform="translate(13.56)"
                    ></path>
                    <path
                      d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                      fill="#F5F5F7"
                    ></path>
                    <path
                      d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                      fill="#DCE0E6"
                    ></path>
                  </g>
                  <path
                    d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                    fill="#DCE0E6"
                  ></path>
                  <g transform="translate(149.65 15.383)" fill="#FFF">
                    <ellipse
                      cx="20.654"
                      cy="3.167"
                      rx="2.849"
                      ry="2.815"
                    ></ellipse>
                    <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
                  </g>
                </g>
              </svg>
            </div>
          )}
        </Row>
      </Col>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div>
      <Skeleton.Image active style={{width: 300, height: 200}} />
      <Skeleton
        active
        avatar
        paragraph={{
          rows: 2,
        }}
      />
    </div>
  );
}

function Selected({model, selectioner}) {
  return (
    <div className="d-flex gap-3">
      <Avatar src={model.image} size={30} />
      <h6 className="fw-bold text-center mt-1">{model.name}</h6>
      <Button type="primary" onClick={selectioner}>
        Valider
      </Button>
    </div>
  );
}
