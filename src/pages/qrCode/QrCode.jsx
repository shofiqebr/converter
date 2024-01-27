import { useState } from "react";
import QRCode from 'qrcode'


const QrCode = () => {
    const [url, setUrl] =useState('');
    const [qrcode, setQrcode] = useState('')

    const GenerateQRCode =()=> {
        QRCode.toDataURL(url,(err,url)=>{
            if(err) return console.error(err);
            
            // console.log(url);
            setQrcode(url)
        })

    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Qr Code Generator</h1>
            <input type="text"  placeholder="link" value={url} 
            onChange={(e) => setUrl(e.target.value)}/>

            <button className="rounded-full" onClick={GenerateQRCode}>Generate</button>
            <img src={qrcode} />

        </div>
    );
};

export default QrCode;