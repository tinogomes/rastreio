import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchFormProps {
  onSearch: (params: { type: 'minuta' | 'cnpjNfe', minuta?: string, cnpj?: string, nfe?: string }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchType, setSearchType] = useState<'minuta' | 'cnpjNfe'>('minuta');
  const [minuta, setMinuta] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [nfe, setNfe] = useState<string>('');

  const handleSearchTypeChange = (type: 'minuta' | 'cnpjNfe') => {
    setSearchType(type);
    handleClear();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchType === 'minuta' && minuta) {
      onSearch({ type: 'minuta', minuta });
    } else if (searchType === 'cnpjNfe' && cnpj && nfe) {
      onSearch({ type: 'cnpjNfe', cnpj, nfe });
    }
  };

  const handleClear = () => {
    setMinuta('');
    setCnpj('');
    setNfe('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Localize sua Remessa</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-6 mb-4">
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="searchType" 
              className="form-radio h-4 w-4 text-indigo-600"
              checked={searchType === 'cnpjNfe'}
              onChange={() => handleSearchTypeChange('cnpjNfe')}
            />
            <span className="ml-2 text-gray-700">CNPJ e NFE</span>
          </label>
          
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="searchType" 
              className="form-radio h-4 w-4 text-indigo-600"
              checked={searchType === 'minuta'}
              onChange={() => handleSearchTypeChange('minuta')}
            />
            <span className="ml-2 text-gray-700">Minuta</span>
          </label>
        </div>
        
        {searchType === 'minuta' ? (
          <div className="mb-4">
            <input
              type="number"
              placeholder="Número da Minuta"
              className="searchNumber w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={minuta}
              onChange={(e) => setMinuta(e.target.value)}
            />
          </div>
        ) : (
          <div className="space-y-3">
            <input
              type="number"
              placeholder="CNPJ"
              className="searchNumber w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <input
              type="number"
              placeholder="NFE"
              className="searchNumber w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={nfe}
              onChange={(e) => setNfe(e.target.value)}
            />
          </div>
        )}
        
        <div className="flex space-x-3 mt-4">
          <button
            type="submit"
            className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </button>
          
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            <X className="h-4 w-4 mr-2" />
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;