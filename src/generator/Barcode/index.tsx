import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

import { BarcodeProps } from './types';

const Barcode: React.FC<BarcodeProps> = ({
  value,
  width = 2,
  height = 100,
  format = 'CODE128',
  displayValue = true,
  renderType = 'svg',
  ...props
}) => {
  const ENUM_BARCODE = {
    svg: (
      <BarcodeSVG
        value={value}
        width={width}
        height={height}
        format={format}
        displayValue={displayValue}
        {...props}
      />
    ),
    canvas: (
      <BarcodeCanvas
        value={value}
        width={width}
        height={height}
        format={format}
        displayValue={displayValue}
        {...props}
      />
    ),
  };

  return <>{ENUM_BARCODE[renderType]}</>;
};

const BarcodeSVG: React.FC<BarcodeProps> = (props) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, props.value, {
        format: props.format,
        width: props.width,
        height: props.height,
        displayValue: props.displayValue,
        xmlDocument: document,
        // renderer: 'svg', // Specify SVG rendering
      });
    }
  }, [
    props.value,
    props.width,
    props.height,
    props.format,
    props.displayValue,
  ]);

  return <svg ref={svgRef} {...props}></svg>;
};

const BarcodeCanvas: React.FC<BarcodeProps> = (props) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, props.value, {
        format: props.format,
        width: props.width,
        height: props.height,
        displayValue: props.displayValue,
        xmlDocument: document,
      });
    }
  }, [
    props.value,
    props.width,
    props.height,
    props.format,
    props.displayValue,
  ]);

  return <svg ref={svgRef} {...props}></svg>;
};

export default Barcode;
