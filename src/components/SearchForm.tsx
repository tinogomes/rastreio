import React, { useEffect, useRef, useState } from 'react';
import { FileBadge, FilePen, Search, X } from 'lucide-react';
import SearchField from './SearchField';

interface SearchFormProps {
  onSearch: (params: { type: 'minuta' | 'cnpjNfe', minuta?: string, cnpj?: string, nfe?: string }) => void,
  onClear: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, onClear }) => {
  const [searchType, setSearchType] = useState<'minuta' | 'cnpjNfe'>('minuta');
  const [minuta, setMinuta] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [nfe, setNfe] = useState<string>('');
  const minutaSearchField = useRef<HTMLInputElement>(null);
  const cnpjSearchField = useRef<HTMLInputElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);

  const setFocusBySearchType = (type: string | undefined) => {
    if (type == 'minuta') {
      minutaSearchField.current?.focus();
    } else {
      cnpjSearchField.current?.focus();
    }
  }

  useEffect(() => {
    setFocusBySearchType(searchType);
  }, [searchType]);

  const handleSearchTypeChange = (type: 'minuta' | 'cnpjNfe') => {
    setSearchType(type);
    // Limpa apenas os campos de busca, mantendo os resultados
    setMinuta('');
    setCnpj('');
    setNfe('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchType === 'minuta' && minuta) {
      onSearch({ type: 'minuta', minuta });
      searchButton.current?.focus();
    } else if (searchType === 'cnpjNfe' && cnpj && nfe) {
      onSearch({ type: 'cnpjNfe', cnpj, nfe });
      searchButton.current?.focus();
    }
  };

  const handleClear = () => {
    setFocusBySearchType(searchType);
    setMinuta('');
    setCnpj('');
    setNfe('');
    onClear();
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
            <FilePen className="h-4 w-4 mr-2" /> Minuta
          </button>
          <button
            onClick={() => handleSearchTypeChange('cnpjNfe')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              searchType === 'cnpjNfe'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <FileBadge className="h-4 w-4 mr-2" />
            CNPJ e NFE
          </button>
        </nav>
      </div>

      <form onSubmit={handleSubmit}>
        {searchType === 'minuta' ? (
          <div className="mb-4">
            <SearchField
              ref={minutaSearchField}
              id="minuta"
              label="Número da Minuta"
              type="number"
              value={minuta}
              onChange={(e) => setMinuta(e.target.value)}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <SearchField
              ref={cnpjSearchField}
              id="cnpj"
              label="CNPJ"
              type="number"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <SearchField
              id="nfe"
              label="NFE"
              type="number"
              value={nfe}
              onChange={(e) => setNfe(e.target.value)}
            />
          </div>
        )}
        
        <div className="flex space-x-3 mt-4">
          <button
            ref={searchButton}
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