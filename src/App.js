import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [signature, setSignature] = useState('');
  const canvas = useRef(null);
  useEffect(() => {
    setSignature(canvas.current.toDataURL());
    console.log(canvas.current.toDataURL());
  }, [canvas]);
  return (
    <div className='App'>
      <SignatureCanvas
        ref={canvas}
        canvasProps={{ width: 300, height: 150, className: 'sigCanvas' }}
      />
      <div className='buttons'>
        <CopyToClipboard
          text={signature}
          onCopy={() => toast.success('Skopiowano podpis do schowka!')}>
          <span className='button'>Skopiuj podpis</span>
        </CopyToClipboard>
        <span className='button' onClick={() => canvas?.current?.clear()}>
          Wyczyść
        </span>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
