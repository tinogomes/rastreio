import React from 'react';
import { ShipmentDetail } from '../types';

interface ShipmentDetailsTableProps {
  details: ShipmentDetail[];
}

const ShipmentDetailsTable: React.FC<ShipmentDetailsTableProps> = ({ details }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <h3 className="bg-indigo-100 text-indigo-800 px-4 py-2 font-medium text-sm">Histórico de Rastreamento</h3>
      <div className="w-full overflow-x-auto">
        <div className="min-w-0">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 hidden md:table-header-group">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dt Ocorrência
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Etapa
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Histórico
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {details.map((detail, index) => (
                <tr key={index} className="hover:bg-gray-50 block md:table-row">
                  <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                    <span className="md:hidden font-medium text-gray-500 mr-2">Data Ocorrência:</span>
                    {detail.dtOcorrencia}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                    <span className="md:hidden font-medium text-gray-500 mr-2">Etapa:</span>
                    {detail.etapa}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                    <span className="md:hidden font-medium text-gray-500 mr-2">Nome:</span>
                    {detail.nome}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-bold md:font-normal block md:table-cell">
                    <span className="md:hidden font-medium text-gray-500 mr-2">Histórico:</span>
                    {detail.historico}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetailsTable;