import React, { useState } from 'react';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
import PDFViewer from 'pdf-viewer-reactjs'
const PdfViewer = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Sample PDF files for demonstration
  const pdfs = [
    { name: 'Sample PDF 1', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { name: 'Sample PDF 2', url: '/sample2.pdf' },
    { name: 'Sample PDF 3', url: '/sample3.pdf' },
  ];

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  return (
    <div className="pdf-viewer-container">
      <div className="accordion-container">
        <div className="accordion">
          {pdfs.map((pdf, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-button"
                onClick={() => handlePdfClick(pdf)}
              >
                {pdf.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="pdf-container">
        {/* {selectedPdf && (
          <Worker workerUrl="/pdf.worker.min.js">
            <Viewer fileUrl={selectedPdf.url} />
          </Worker>
        )} */}
        <PDFViewer
            document={{
                url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            }}
        />
      </div>
    </div>
  );
};

export default PdfViewer;
