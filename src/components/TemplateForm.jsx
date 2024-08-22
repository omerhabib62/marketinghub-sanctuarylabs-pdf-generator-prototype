import React, { useState } from 'react';

const TemplateForm = ({ onGenerateTemplate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    caseStudy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateTemplate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Case Study:</label>
        <textarea
          name="caseStudy"
          value={formData.caseStudy}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Preview</button>
      <button type="button" onClick={() => {alert('Saved Template for future use')}}>Save</button>
    </form>
  );
};

export default TemplateForm;
