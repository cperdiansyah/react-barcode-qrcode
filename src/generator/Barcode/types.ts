export interface BarcodeProps extends JsBarcode.BaseOptions {
  value: string;
  width?: number;
  height?: number;
  format?: FormatBarcode;
  displayValue?: boolean;
  flat?: boolean;
  font?: FontBarcode;
  renderType?: 'svg' | 'canvas';
}

type FormatBarcode =
  | 'CODE39'
  | 'CODE128'
  | 'CODE128A'
  | 'CODE128B'
  | 'CODE128C'
  | 'EAN13'
  | 'EAN8'
  | 'EAN5'
  | 'EAN2'
  | 'UPC'
  | 'ITF14'
  | 'ITF'
  | 'MSI'
  | 'MSI10'
  | 'MSI11'
  | 'MSI1010'
  | 'MSI1110'
  | 'pharmacode'
  | 'codabar';

type FontBarcode = 'monospace' | 'sans-serif' | 'serif' | 'fantasy' | 'cursive';
