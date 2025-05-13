import { useState } from 'react';
import { ShipmentWithDetails } from '../types';
import { searchShipmentByMinuta, searchShipmentByCnpjAndNfe } from '../data/shipments';

interface UseShipmentsReturn {
  searchResults: ShipmentWithDetails[];
  isLoading: boolean;
  error: string | null;
  searchShipments: (params: {
    type: 'minuta' | 'cnpjNfe';
    minuta?: string;
    cnpj?: string;
    nfe?: string;
  }) => Promise<void>;
  clearResults: () => void;
}

export const useShipments = (): UseShipmentsReturn => {
  const [searchResults, setSearchResults] = useState<ShipmentWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchShipments = async (params: {
    type: 'minuta' | 'cnpjNfe';
    minuta?: string;
    cnpj?: string;
    nfe?: string;
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulando um delay de rede
      await new Promise(resolve => setTimeout(resolve, 400));

      let result: ShipmentWithDetails | undefined;

      if (params.type === 'minuta' && params.minuta) {
        result = searchShipmentByMinuta(params.minuta);
      } else if (params.type === 'cnpjNfe' && params.cnpj && params.nfe) {
        result = searchShipmentByCnpjAndNfe(params.cnpj, params.nfe);
      }

      if (!result) {
        setError('Nenhuma remessa encontrada com os dados fornecidos.');
        setSearchResults([]);
      } else {
        setSearchResults([result]);
      }
    } catch (err) {
      setError('Ocorreu um erro ao buscar as remessas. Tente novamente.');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setError(null);
  };

  return {
    searchResults,
    isLoading,
    error,
    searchShipments,
    clearResults,
  };
}; 