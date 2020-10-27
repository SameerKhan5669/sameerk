import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { SizeMe } from "react-sizeme";
import { Helmet } from "react-helmet";

// import "../node_modules/react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  render() {
    return (
      <div>
        <div className="Resume">
          <SizeMe>
            {({ size }) => (
              <Document file={"Resume.pdf"}>
                <Page
                  pageNumber={1}
                  onLoadSuccess={this.removeTextLayerOffset}
                  width={size.width ? size.width : 1}
                />
              </Document>
            )}
          </SizeMe>
        </div>
      </div>
    );
  }
}
export default Resume;
