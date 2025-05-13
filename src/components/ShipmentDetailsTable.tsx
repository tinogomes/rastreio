import React from 'react';
import { ShipmentDetail } from '../types';

interface ShipmentDetailsTableProps {
  details: ShipmentDetail[];
}

const ShipmentDetailsTable: React.FC<ShipmentDetailsTableProps> = ({ details }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <h3 className="bg-indigo-100 text-indigo-800 px-4 py-2 font-medium text-sm">Histórico de Rastreamento</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
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
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{detail.dtOcorrencia}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{detail.etapa}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{detail.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{detail.historico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentDetailsTable;