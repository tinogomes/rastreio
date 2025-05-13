import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { ShipmentWithDetails } from '../types';
import ShipmentDetailsTable from './ShipmentDetailsTable';

interface ShipmentsTableProps {
  shipments: ShipmentWithDetails[];
}

const ShipmentsTable: React.FC<ShipmentsTableProps> = ({ shipments }) => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const toggleRowExpansion = (id: string) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  if (shipments.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-700">Nenhum resultado encontrado.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CNPJ</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Minuta</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome remetente</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome destinatário</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data emissão</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NFE</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peso</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shipments.map((shipment) => {
              const isExpanded = expandedRow === shipment.minuta;
              return (
                <React.Fragment key={shipment.minuta}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleRowExpansion(shipment.minuta)}
                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.cnpj}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.minuta}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.nomeRemetente}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.nomeDestinatario}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.dataEmissao}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.nfe}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.volume}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.peso}</td>
                  </tr>
                  {isExpanded && (
                    <tr>
                      <td colSpan={9} className="px-6 py-4 bg-gray-50">
                        <div className="animate-fadeIn">
                          <ShipmentDetailsTable details={shipment.detalhes} />
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentsTable;