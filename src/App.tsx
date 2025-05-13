import { useState } from 'react';
import Layout from './components/Layout';
import SearchForm from './components/SearchForm';
import ShipmentsTable from './components/ShipmentsTable';
import { ShipmentWithDetails } from './types';
import { searchShipmentByMinuta, searchShipmentByCnpjAndNfe } from './data/shipments';

function App() {
  const [searchResults, setSearchResults] = useState<ShipmentWithDetails[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (params: { 
    type: 'minuta' | 'cnpjNfe', 
    minuta?: string, 
    cnpj?: string, 
    nfe?: string 
  }) => {
    let result: ShipmentWithDetails | undefined;

    if (params.type === 'minuta' && params.minuta) {
      result = searchShipmentByMinuta(params.minuta);
    } else if (params.type === 'cnpjNfe' && params.cnpj && params.nfe) {
      result = searchShipmentByCnpjAndNfe(params.cnpj, params.nfe);
    }

    setSearchResults(result ? [result] : []);
    setHasSearched(true);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <SearchForm onSearch={handleSearch} onClear={() => setHasSearched(false)} />
        
        {hasSearched && (
          <ShipmentsTable shipments={searchResults} />
        )}
      </div>
    </Layout>
  );
}

export default App;