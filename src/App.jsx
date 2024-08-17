// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const generatePdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    // Add text
    page.drawText(`Name: ${formData.name}`, { x: 50, y: 350, size: 20 });
    page.drawText(`Address: ${formData.address}`, { x: 50, y: 300, size: 20 });

    // Add logo (if provided)
    if (formData.logo) {
      const logoBytes = await formData.logo.arrayBuffer();
      const logoImage = await pdfDoc.embedPng(logoBytes);
      page.drawImage(logoImage, { x: 450, y: 300, width: 100, height: 100 });
    }

    const pdfBytes = await pdfDoc.save();
    saveAs(new Blob([pdfBytes]), 'generated.pdf');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>PDF Generator Prototype</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Logo:
            <input
              type="file"
              name="logo"
              accept="image/png"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="button" onClick={generatePdf}>
          Generate PDF
        </button>
      </form>
    </div>
  );
}

export default App;
