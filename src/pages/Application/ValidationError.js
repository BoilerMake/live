import React from 'react';

const ValidationError = ({ field, validation }) => {
  const show = validation.reason_field.indexOf(field) > -1;
  const fieldIndex = validation.reason_field.indexOf(field);
  const text = validation.reason_label[fieldIndex];

  return show ? (
    <div className="c-application__validation_note">{text}</div>
  ) : null;
};

export default ValidationError;
