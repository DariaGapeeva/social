import React from 'react';
import styled from 'styled-components';

const DayNow = styled.div`
  font-size: 13px;
  color: grey;
  text-align: right;
`;

const Data = () => {
  let now = new Date();
  let months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return (
    <DayNow>
      {`${now.getDate()}  ${months[now.getMonth()]} ${now.getFullYear()} `}
    </DayNow>
  );
};

export default Data;
