import React, { useState } from 'react';
import TemplateForm from './TemplateForm'; // Updated path

const GeneratedTemplate = () => {
  const [templateData, setTemplateData] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleGenerateTemplate = (data) => {
    setTemplateData(data);
    setIsPreviewVisible(true);
  };

  const handleOkClick = () => {
    setIsPreviewVisible(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Template Generator</h1>
      {!isPreviewVisible && (
        <TemplateForm onGenerateTemplate={handleGenerateTemplate} />
      )}
      {isPreviewVisible && (
        <div>
          <h2>Generated Template Preview</h2>
          <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
            <h3>{templateData.title}</h3>
            <p>{templateData.description}</p>
            <img src={templateData.imageUrl} alt="Template" style={{ width: '100%' }} />
            <p><strong>Case Study:</strong> {templateData.caseStudy}</p>
          </div>
          <button onClick={handleOkClick}>OK</button>
        </div>
      )}
    </div>
  );
};

export default GeneratedTemplate;
