import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { SizeMe } from "react-sizeme";
import { Helmet } from "react-helmet";

// import "../node_modules/react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class StockMarket extends Component {
  render() {
    return (
      <div>
        <div className="Resume">
          <SizeMe>
            {({ size }) => (
              <Document file={"SamerTradingGuide.pdf"}>
                <Page
                  pageNumber={1}
                  onLoadSuccess={this.removeTextLayerOffset}
                  width={size.width ? size.width : 1}
                />
              </Document>
            )}
          </SizeMe>

          <SizeMe>
            {({ size }) => (
              <Document file={"SamerTradingGuide.pdf"}>
                <Page
                  pageNumber={2}
                  onLoadSuccess={this.removeTextLayerOffset}
                  width={size.width ? size.width : 1}
                />
              </Document>
            )}
          </SizeMe>

          <SizeMe>
            {({ size }) => (
              <Document file={"SamerTradingGuide.pdf"}>
                <Page
                  pageNumber={3}
                  onLoadSuccess={this.removeTextLayerOffset}
                  width={size.width ? size.width : 1}
                />
              </Document>
            )}
          </SizeMe>

          <SizeMe>
            {({ size }) => (
              <Document file={"SamerTradingGuide.pdf"}>
                <Page
                  pageNumber={4}
                  onLoadSuccess={this.removeTextLayerOffset}
                  width={size.width ? size.width : 1}
                />
              </Document>
            )}
          </SizeMe>
          <SizeMe>
            {({ size }) => (
              <Document file={"SamerTradingGuide.pdf"}>
                <Page
                  pageNumber={5}
                  onLoadSuccess={this.removeTextLayerOffset}
                  width={size.width ? size.width : 1}
                />
              </Document>
            )}
          </SizeMe>
          <SizeMe>
            {({ size }) => (
              <Document file={"SamerTradingGuide.pdf"}>
                <Page
                  pageNumber={6}
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
export default StockMarket;
