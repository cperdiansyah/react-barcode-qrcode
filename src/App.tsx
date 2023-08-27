import QrCode from './generator/QrCode';
import Barcode from './generator/Barcode';

function App() {
  return (
    <>
      <QrCode value='https://reactjs.org/' />

      <Barcode value='12345678' flat={false} />
    </>
  );
}

export default App;
