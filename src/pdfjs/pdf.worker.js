import pdfjs from 'pdfjs-dist/build/pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

export default pdfjs;