import { Box } from "@mui/material";
import QrCode from "../qrCode/QrCode";


const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        
        }}>
            <Box >

            <h1>Image to PDF converter</h1>
            <Box>

            <input type="file" name="" accept=".png, .jpg, .jpeg"/>
            Upload image
            </Box>
            </Box>
            
            <img style={{width:'300px', height: '300px'}} src="./no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg " alt="" />
           <button style={{margin: '10px'}}>

       image to pdf
           </button>
           <QrCode></QrCode>
        </Box>
    );
};

export default Home;