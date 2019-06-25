/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Card } from './Styles';

const ServiceList = props => {
  const { description, level, _id } = props.act;
  const { deleteHandler } = props;
  return (
    <Card>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Level:</strong> {level}
      </p>
      <i className="far fa-edit" />
      <i className="fas fa-trash-alt" onClick={() => deleteHandler(_id)} />
    </Card>
  );
};

export default ServiceList;
