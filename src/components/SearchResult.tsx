import React from 'react';
import { ShipmentWithDetails } from '../types';
import ShipmentsTable from './ShipmentsTable';

interface SearchResultProps {
  isLoading: boolean;
  error: string | null;
  searchResults: ShipmentWithDetails[];
}

const SearchResult: React.FC<SearchResultProps> = ({
  isLoading,
  error,
  searchResults,
}) => {
  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {!isLoading && !error && searchResults.length > 0 && (
        <ShipmentsTable shipments={searchResults} />
      )}
    </>
  );
};

export default SearchResult; 