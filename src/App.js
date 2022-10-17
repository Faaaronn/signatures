import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [signature, setSignature] = useState('');
  const canvas = useRef(null);
  useEffect(() => {
    console.log(canvas.current.toDataURL());
    setSignature(canvas.current.toDataURL());
  }, [canvas.current]);
  return (
    <div className='App'>
      <SignatureCanvas
        ref={canvas}
        canvasProps={{ width: 300, height: 150, className: 'sigCanvas' }}
      />
      <div className='buttons'>
        <span
          className='button'
          onClick={() => setSignature(canvas.current.toDataURL())}>
          Potwierdź podpis
        </span>
        <span className='button' onClick={() => canvas?.current?.clear()}>
          Wyczyść
        </span>
        <CopyToClipboard
          text={signature}
          onCopy={() => {
            toast.success('Skopiowano podpis do schowka!');
          }}>
          <span className='button'>Skopiuj podpis</span>
        </CopyToClipboard>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
