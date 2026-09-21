/*
O `useInterval` é uma abstração, não uma necessidade do React. Ele faz sentido quando queremos reutilizar e encapsular a lógica de `setInterval` + `clearInterval` em vários componentes.
*/

import { useEffect, useRef } from 'react';

// C representa o tipo da função callback para preservar sua assinatura exata
export function useInterval<C extends () => void>(
  callback: C,
  delay: number | null,
): void {
  const savedCallback = useRef<C | null>(null); // O useRef é tipado com a função de callback recebida

  // Armazena o callback mais recente no useRef
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Gerencia o ciclo de vida do intervalo
  useEffect(() => {
    function tick() {
      // Verificação de segurança com Optional Chaining para garantir que a referência existe (não seja null)
      savedCallback.current?.();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      // Limpeza automática para evitar vazamento de memória (memory leaks)
      return () => clearInterval(id);
    }
  }, [delay]);
}
