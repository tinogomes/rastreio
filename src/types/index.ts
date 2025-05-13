export interface Shipment {
  cnpj: string;
  minuta: string;
  nomeRemetente: string;
  nomeDestinatario: string;
  dataEmissao: string;
  nfe: string;
  volume: number;
  peso: number;
}

export interface ShipmentDetail {
  dtOcorrencia: string;
  etapa: string;
  nome: string;
  historico: string;
}

export interface ShipmentWithDetails extends Shipment {
  detalhes: ShipmentDetail[];
}