// Dependência / Contrato abstrato (alto nível)
export interface PersistencyProtocol {
  saveOrder(): void;
}
