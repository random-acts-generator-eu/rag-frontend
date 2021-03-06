/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = props => {
  const { description, level, _id } = props.act;
  const { deleteHandler } = props;
  return (
    <tr>
      <td> {description} </td>
      <td> {level} </td>
      <td>
        <Link to={`/service_list/edit/${_id}`}>
          <i className="far fa-edit" />
        </Link>
        <i className="fas fa-trash-alt" onClick={() => deleteHandler(_id)} />
      </td>
    </tr>
  );
};

export default ServiceList;
