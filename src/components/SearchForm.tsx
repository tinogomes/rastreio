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
      
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex space-x-8">
          <button
            onClick={() => handleSearchTypeChange('minuta')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              searchType === 'minuta'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Minuta
          </button>
          <button
            onClick={() => handleSearchTypeChange('cnpjNfe')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              searchType === 'cnpjNfe'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            CNPJ e NFE
          </button>
        </nav>
      </div>

      <form onSubmit={handleSubmit}>
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
          <div className="grid grid-cols-2 gap-4">
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