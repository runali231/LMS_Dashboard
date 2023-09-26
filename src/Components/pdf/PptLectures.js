import React, { useState, useEffect } from 'react';

import { AddCircle } from '@material-ui/icons';
import { PlayCircleFill } from 'react-bootstrap-icons';


const PptLectures = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [iframeHeight, setIframeHeight] = useState(800);
    const [cardHeight, setCardHeight] = useState(500);

    // Sample PDF files for demonstration
    // const pdfs = [
    //   { name: 'Sample PDF 1', url: 'sample1.pdf' },
    //   { name: 'Sample PDF 2', url: 'sample2.pdf' },
    //   { name: 'Sample PDF 3', url: 'sample3.pdf' },
    // ];

    const handlePdfClick = () => {

        setSelectedPdf("https://docs.google.com/presentation/d/12jbPF9700P7uMWQSaiqnz0onECcuqtyt/edit?usp=sharing&ouid=113993613949424622203&rtpof=true&sd=true"
        )
    };
    useEffect(() => {

        const updateIframeHeight = () => {
            const windowHeight = window.innerHeight;
            setIframeHeight(windowHeight - 50);
        };

        window.addEventListener('resize', updateIframeHeight);
        updateIframeHeight();
        const updateCardHeight = () => {
            const windowHeight = window.innerHeight;
            setCardHeight(windowHeight - 80);
        };
        window.addEventListener('resize', updateCardHeight);
        updateCardHeight();
        return () => {
            window.removeEventListener('resize', updateIframeHeight);
            window.removeEventListener('resize', updateCardHeight);
        };

    }, []);
    return (
        <div className="pdf-viewer-container container-fluid">
            <div className='row'>
                <div className="col-lg-4">
                    {/* <div className="accordion-container"> */}
                    {/* <div className="accordion">
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
        </div> */}
                    <div className="card" style={{ height: `${cardHeight}px` }}>
                        <div className="card-header" style={{ "backgroundColor": "rgb(27, 90, 144)", "color": "white" }}>
                            <h4 style={{ "color": "white" }}>Training Support Documents</h4>
                        </div>
                        <div className='card-body'>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                            <strong>Module 1:</strong> &nbsp;Introduction to SQL
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body" onClick={handlePdfClick}>
                                            <ul>
                                                <li className='d-flex d-sm-flex'> <PlayCircleFill className="mt-1" />&nbsp;&nbsp; <strong>Lecture 1:</strong> Introduction To databases <p className="ml-auto">00.19</p></li>
                                                <li className='mt-3 d-flex d-sm-flex'><PlayCircleFill className="mt-1" />&nbsp;  <strong>Lecture 2:</strong> SQL server installation <p className="ml-auto">00.25</p></li>
                                                <li className='mt-3 d-flex d-sm-flex'><PlayCircleFill className="mt-1" />&nbsp;  <strong>Lecture 3:</strong> Tables in SQL <p className="ml-auto">00.05</p></li>
                                                <li className='mt-3 '> <PlayCircleFill />&nbsp; <strong>Introduction to SQL</strong> Quiz</li>
                                            </ul>


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <strong>Module 2:</strong> &nbsp;Data types and constraints
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li className='d-flex d-sm-flex'> <PlayCircleFill className="mt-1" />&nbsp;&nbsp; <strong>Lecture 1:</strong> Introduction To databases <p className="ml-auto">00.19</p></li>
                                                <li className='mt-3 d-flex d-sm-flex'><PlayCircleFill className="mt-1" />&nbsp;  <strong>Lecture 2:</strong> SQL server installation <p className="ml-auto">00.25</p></li>
                                                <li className='mt-3 d-flex d-sm-flex'><PlayCircleFill className="mt-1" />&nbsp;  <strong>Lecture 3:</strong> Tables in SQL <p className="ml-auto">00.05</p></li>
                                                <li className='mt-3 '> <PlayCircleFill />&nbsp; <strong>Introduction to SQL</strong> Quiz</li>
                                            </ul>


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <strong>Module 3:</strong> &nbsp; Operators
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li className='d-flex d-sm-flex'> <PlayCircleFill className="mt-1" />&nbsp;&nbsp; <strong>Lecture 1:</strong> Introduction To databases <p className="ml-auto">00.19</p></li>
                                                <li className='mt-3 d-flex d-sm-flex'><PlayCircleFill className="mt-1" />&nbsp;  <strong>Lecture 2:</strong> SQL server installation <p className="ml-auto">00.25</p></li>
                                                <li className='mt-3 d-flex d-sm-flex'><PlayCircleFill className="mt-1" />&nbsp;  <strong>Lecture 3:</strong> Tables in SQL <p className="ml-auto">00.05</p></li>
                                                <li className='mt-3 '> <PlayCircleFill />&nbsp; <strong>Introduction to SQL</strong> Quiz</li>
                                            </ul>


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <strong>Module 4:</strong> &nbsp; Join and Functions
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li className='d-flex d-sm-flex'> <PlayCircleFill className="mt-1" />&nbsp;&nbsp; <strong>Lecture 1:</strong> Introduction To databases <p className="ml-auto">00.19</p></li>
                                                <li className='mt-3 d-flex d-sm-flex'><PlayCircleFill className="mt-1" />&nbsp;  <strong>Lecture 2:</strong> SQL server installation <p className="ml-auto">00.25</p></li>
                                                <li className='mt-3 d-flex d-sm-flex'><PlayCircleFill className="mt-1" />&nbsp;  <strong>Lecture 3:</strong> Tables in SQL <p className="ml-auto">00.05</p></li>
                                                <li className='mt-3 '> <PlayCircleFill />&nbsp; <strong>Introduction to SQL</strong> Quiz</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                </div>
                <div className='col-lg-8' style={{ "backgroundColor": "black" }}>

                    <div className="pdf-container" >
                        {selectedPdf && (
                            <>
                                <iframe
                                    title="PDF Viewer"
                                    src={selectedPdf}
                                    width="100%"
                                    height={`${iframeHeight}px`}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PptLectures;
