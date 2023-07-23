import { useState } from 'react';
import Main from './pages/Main';
import Cover from './components/Cover';

function App() {
    const [hideCover, setHideCover] = useState(false)
    
    return (
        <>
             
            <Main /> 
            {/* <Cover hide= { hideCover } setHide= { setHideCover }/> */}
        </>
    )
}

export default App;
