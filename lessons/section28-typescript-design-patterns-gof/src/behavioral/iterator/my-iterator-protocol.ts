/*
Para estender os recursos do protocolo nativo e introduzir operações operacionais adicionais (como a reinicialização da iteração), define-se uma interface customizada.
*/

export interface MyIteratorProtocol<T> extends Iterator<T> {
  next(): IteratorResult<T>
  reset(): void // Método customizado adicionado ao protocolo
}
