import React from 'react';
import {Card as AntDCard, Button} from 'antd';
import {Paper} from '@mui/material';
import {RadioGroup, Radio} from '@blueprintjs/core';
const {Meta} = AntDCard;

const Card = ({id, name, banner, description, choix, setChoix}) => {
  const setChecked = () => {
    setChoix(id);
  };

  return (
    <Paper
      elevation={2}
      style={{
        margin: '15px',
        padding: '5px',
      }}
      className={choix === id ? 'selected' : ''}
      onChange={() => setChoix(id)}
    >
      <RadioGroup selectedValue={choix} onChange={() => setChoix(id)}>
        <Radio value={id}>
          <AntDCard
            className={choix === id ? 'selected' : ''}
            style={{
              width: 300,
              minHeight: 280,
            }}
            hoverable={true}
            cover={
              <img
                style={{width: '300px', height: '110px', objectFit: 'contain'}}
                alt={`${name}`}
                src={banner}
              />
            }
            actions={[
              <Button onClick={setChecked} type="primary">
                visualiser
              </Button>,
            ]}
          >
            <Meta title={name} description={description} />
          </AntDCard>
        </Radio>
      </RadioGroup>
    </Paper>
  );
};

export default Card;
