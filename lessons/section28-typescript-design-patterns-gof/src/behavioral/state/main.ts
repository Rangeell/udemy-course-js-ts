/*
Nesta aula prática, implementamos o padrão de projeto State construindo um fluxo de gerenciamento de Pedidos de E-Commerce (Shopping Order).

Acompanhamos como a substituição de blocos condicionais (`if/else`) por polimorfismo permite que o objeto da ordem de compra (`ShoppingOrder`) altere completamente o seu comportamento de acordo com o seu estado de pagamento atual (`Pending`, `Approved` ou `Rejected`).
*/

import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.approvePayment(); // Não aceita repetir o estado
order.shipOrder(); // Envia o pedido

order.waitPayment(); // Pendente
order.shipOrder(); // Não envia o pedido com o pagamento pendente

// Daqui pra baixo, não aceitamos mais mudanças de estados (de acordo com a regra do negócio)
order.rejectPayment(); // Rejeitado
order.rejectPayment(); // Não aceita repetir o estado
order.approvePayment(); // Rejeitado (não altera o estado)
order.waitPayment(); // Rejeitado (não altera o estado)
order.shipOrder(); // Rejeitado (não altera o estado)
