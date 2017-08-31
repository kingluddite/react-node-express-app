// SurveyField constains logic to render a single label and text field
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label htmlFor="surveyField">
        {label}
      </label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBotton: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
