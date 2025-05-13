import { ShipmentWithDetails } from '../types';

export const shipmentData: ShipmentWithDetails[] = [
  {
    cnpj: '01001001000100',
    minuta: '1234',
    nomeRemetente: 'ACME COMERCIO EXP E IMP DE MAT MED LTDA (MATRIZ)',
    nomeDestinatario: 'FUNDACAO COMPRADORA',
    dataEmissao: '30-04-2025',
    nfe: '1234',
    volume: 3,
    peso: 30,
    detalhes: [
      {
        dtOcorrencia: '05/05/2025',
        etapa: 'ENTREGUE',
        nome: 'MARIA',
        historico: ''
      },
      {
        dtOcorrencia: '05/05/2025',
        etapa: 'EM ROTA',
        nome: '',
        historico: ''
      },
      {
        dtOcorrencia: '05/05/2025',
        etapa: 'ENTRADA NA UNIDADE DE ENTREGA',
        nome: '',
        historico: ''
      },
      {
        dtOcorrencia: '30/04/2025',
        etapa: 'EMISSAO DACTE',
        nome: '',
        historico: 'ENVIO TRANSPORTADO PELO DACTE 12345 EMITIDO EM 30/04/2025 17:05'
      },
      {
        dtOcorrencia: '30/04/2025',
        etapa: 'EM TRANSFERENCIA',
        nome: '',
        historico: ''
      }
    ]
  },
  {
    cnpj: '02002002000100',
    minuta: '1235',
    nomeRemetente: 'MERCK BRASIL',
    nomeDestinatario: 'HOSPITAL DE TESTE',
    dataEmissao: '30-04-2025',
    nfe: '1235',
    volume: 3,
    peso: 30,
    detalhes: [
      {
        dtOcorrencia: '05/05/2025',
        etapa: 'ENTREGUE',
        nome: 'JOSE',
        historico: ''
      },
      {
        dtOcorrencia: '05/05/2025',
        etapa: 'EM ROTA',
        nome: '',
        historico: ''
      },
      {
        dtOcorrencia: '05/05/2025',
        etapa: 'ENTRADA NA UNIDADE DE ENTREGA',
        nome: '',
        historico: ''
      },
      {
        dtOcorrencia: '30/04/2025',
        etapa: 'EMISSAO DACTE',
        nome: '',
        historico: 'ENVIO TRANSPORTADO PELO DACTE 12346 EMITIDO EM 30/04/2025 17:05'
      },
      {
        dtOcorrencia: '30/04/2025',
        etapa: 'EM TRANSFERENCIA',
        nome: '',
        historico: ''
      }
    ]
  },
];

export const searchShipmentByMinuta = (minuta: string): ShipmentWithDetails | undefined => {
  return shipmentData.find(shipment => shipment.minuta === minuta);
};

export const searchShipmentByCnpjAndNfe = (cnpj: string, nfe: string): ShipmentWithDetails | undefined => {
  return shipmentData.find(shipment => shipment.cnpj === cnpj && shipment.nfe === nfe);
};