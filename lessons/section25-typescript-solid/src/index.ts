/*
Vantagens e Desvantagens do S.O.L.I.D.

Vantagens:
  - Código modular -> SOC (Separation of Concerns/Concepts):
    Através da separação de conceitos, dividimos o sistema em módulos específicos. Isso facilita a localização de falhas e garante que cada componente tenha apenas uma razão para mudar, conforme discutido no Princípio de Responsabilidade Única.

  - Código reutilizável (D.R.Y. -> Don't Repeat Yourself):
    Ao extrair lógicas para classes especializadas, como uma classe de Desconto, podemos reutilizá-la em múltiplos contextos: no cálculo de um produto individual, no carrinho de compras ou em promoções sazonais, sem duplicar a regra de negócio.

  - Código "testável" e de baixo acoplamento:
    A Inversão de Dependência permite que as classes dependam de abstrações (protocolos/interfaces). Isso viabiliza o uso de "mocks" em testes unitários, isolando o comportamento da classe sem depender de bancos de dados ou APIs externas.

  - Alta Coesão via Delegação:
    O SOLID combate as "God Classes" (classes que fazem tudo). Tomemos como exemplo a classe `Checkout`: ela possui alta coesão porque, embora coordene o processo de finalização, ela não executa todas as tarefas internamente. Ela delega a verificação do carrinho, o envio de mensagens e a persistência para outras classes especializadas.

  - Expansão Sem Efeitos Colaterais:
    O sistema torna-se extensível. Podemos adicionar novos tipos de clientes, como `IndividualCustomer` e `EnterpriseCustomer`, ou novos métodos de notificação (SMS, WhatsApp), criando novas classes que respeitam os protocolos existentes sem tocar no código que já está em produção.

  - Fácil Manutenção.

Desvantagens:
  - Aumento da Complexidade e da Carga Cognitiva:
    Criação de mais arquivos, abstrações, classes e interfaces indiretas. O desenvolvedor precisa navegar por diversos arquivos e interfaces para compreender um único fluxo de negócio.

  - Maior Volume de Código:
    O volume de linhas e arquivos necessários cresce consideravelmente para fazer a mesma tarefa.

    A aplicação rigorosa do SOLID aumenta drasticamente o volume de código digitado e a quantidade de classes no projeto, o que pode dificultar o aprendizado para novos membros da equipe.

  - Tempo de Desenvolvimento:
    Leva-se substancialmente mais tempo para desenhar a arquitetura em comparação a uma implementação direta.

A estratégia recomendada é: "Faça funcionar primeiro, refatore depois." Não tente prever todas as interfaces necessárias antes de entender o problema.

Guia de Passos Práticos:
  1. Construa o MVP: Resolva o problema de forma direta, garantindo que o código seja funcional e atenda aos requisitos imediatos.

  2. Identifique os Pontos de Dor: Só aplique o SOLID quando você sentir a necessidade real de expansão ou quando a manutenção do código atual começar a se tornar difícil.

  3. Refatoração Constante: Utilize a refatoração incremental para elevar a qualidade do código organicamente. O SOLID deve surgir da necessidade de evolução do software, não de uma imposição inicial.

Para evitar que o SOLID se torne uma armadilha de complexidade, o arquiteto deve utilizar princípios que prezam pela simplicidade e entrega de valor imediato:

- YAGNI (You Ain't Gonna Need It): Não implemente abstrações para problemas que você ainda não tem. Se a necessidade de expansão for apenas hipotética, mantenha o código simples.
- KISS (Keep It Simple, Stupid): A simplicidade deve ser o objetivo final. Um código simples é mais fácil de manter, testar e integrar do que uma arquitetura super-modularizada e desnecessária.
- DRY (Don't Repeat Yourself): Focado em eliminar a duplicidade de lógica, garantindo que cada conhecimento tenha uma representação única no sistema.
- MVP (Minimum Viable Product): O foco inicial deve ser validar a hipótese de negócio. Um código funcional e simples no ar é mais valioso do que um código perfeito que nunca foi lançado.

Lembre-se: Um código nunca está pronto; ele está sempre em um estado de refatoração. A maturidade de um sistema é medida pela sua capacidade de ser ajustado continuamente para equilibrar a entrega de valor hoje com a sustentabilidade de amanhã.
*/
