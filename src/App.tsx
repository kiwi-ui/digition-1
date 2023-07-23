import { useState } from 'react';
import Main from './pages/Main';
import Cover from './components/Cover';

function App() {
    const [hideCover, setHideCover] = useState(false)
    
    return (
        <>
            {hideCover ? <Cover hide= { hideCover } setHide= { setHideCover }/> : <Main />}
        </>
    )
}

export default App;
