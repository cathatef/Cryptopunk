import './App.css';
import Header from './components/Header';

import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_addresses=0xE4C3676B3F9CE81a1921000EE4223A198020e4Cd&order_direction=asc')
      setPunkListData(openSeaData.data.assets)
      console.log(openSeaData.data.assets)
    };
    return getMyNfts();
  }, [])

  return (
    <> 
    <div className='app'>
      <Header/>
        {punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
            <PunkList
              punkListData={punkListData}
              setSelectedPunk={setSelectedPunk}
            />
          </>
        )}
      {/* <Main punkListData={punkListData}/>
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/> */}
    </div>
    </>
    
  );
}

export default App;
