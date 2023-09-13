import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function PDFViewer(props) {
  const pdfUrl = process.env.PUBLIC_URL + props.lien;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("Number of pages:", numPages); // Add this console log
    setNumPages(numPages);
  }

  function goToPreviousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  useEffect(() => {
    console.log("pdfUrl:", pdfUrl); // Add this console log
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          <div className="d-flex justify-content-center mt-3">
            <Button variant="light" onClick={goToPreviousPage} disabled={pageNumber === 1}>
              Page précédente
            </Button>
            <p className="mx-2">
              Page {pageNumber} of {numPages}
            </p>
            <Button variant="light" onClick={goToNextPage} disabled={pageNumber === numPages}>
              Page suivante
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default PDFViewer;
