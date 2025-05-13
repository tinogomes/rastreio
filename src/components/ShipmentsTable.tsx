import React, { useState } from 'react';
import { PanelBottomOpenIcon, PanelTopOpenIcon } from 'lucide-react';
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
      <div className="w-full overflow-x-auto">
        <div className="min-w-0">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 hidden md:table-header-group">
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
                    <tr className="hover:bg-gray-50 block md:table-row">
                      <td className="px-6 py-4 block md:table-cell:hidden">
                        <button
                          onClick={() => toggleRowExpansion(shipment.minuta)}
                          className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                        >
                          { !isExpanded && <PanelTopOpenIcon className="h-5 w-5" /> }
                          { isExpanded && <PanelBottomOpenIcon className="h-5 w-5" /> }
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                        <span className="md:hidden font-medium text-gray-500 mr-2">CNPJ:</span>
                        {shipment.cnpj}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                        <span className="md:hidden font-medium text-gray-500 mr-2">Minuta:</span>
                        {shipment.minuta}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                        <span className="md:hidden font-medium text-gray-500 mr-2">Nome remetente:</span>
                        {shipment.nomeRemetente}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                        <span className="md:hidden font-medium text-gray-500 mr-2">Nome destinatário:</span>
                        {shipment.nomeDestinatario}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                        <span className="md:hidden font-medium text-gray-500 mr-2">Data emissão:</span>
                        {shipment.dataEmissao}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                        <span className="md:hidden font-medium text-gray-500 mr-2">NFE:</span>
                        {shipment.nfe}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                        <span className="md:hidden font-medium text-gray-500 mr-2">Volume:</span>
                        {shipment.volume}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                        <span className="md:hidden font-medium text-gray-500 mr-2">Peso:</span>
                        {shipment.peso}
                      </td>
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
    </div>
  );
};

export default ShipmentsTable;