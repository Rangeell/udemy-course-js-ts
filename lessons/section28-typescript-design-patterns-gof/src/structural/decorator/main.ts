/*
Nesta aula prática, implementamos o padrão de projeto Decorator construindo um sistema de customização e precificação de produtos (camisetas). Acompanhamos como a composição e o envelopamento (wrapping) de objetos permitem estender funcionalidades de forma dinâmica.

No campo da engenharia de software e da arquitetura orientada a objetos, o padrão de projeto estrutural Decorator (GoF) destaca-se pela capacidade de adicionar responsabilidades e comportamentos a objetos individuais de forma dinâmica em tempo de execução. Diferente da herança estática, na qual as funcionalidades são fixadas compiladamente em subclasses rígidas, a decoração permite envelopar (wrap) instâncias dinamicamente. Isso contorna problemas clássicos de alto acoplamento e inflexibilidade estrutural.

Nesta aula prática, ministrada pelo professor Luiz Otávio Miranda, o domínio de aplicação escolhido é o de e-commerce de vestuário e produtos. O elemento central do domínio é uma camiseta simples (`TShirt`), que pode receber incrementos dinâmicos como estampas e customizações. Sem o padrão Decorator, a modelagem desse cenário exigiria uma subclasse para cada combinação possível de recursos (por exemplo, `TShirtWithStamp`, `TShirtWithCustomization`, `TShirtWithStampAndCustomization`), levando a uma explosão incontrolável de subclasses na hierarquia do sistema.

Ao adotar a estrutura clássica proposta pelo livro da Gangue dos Quatro (Gang of Four - GoF), o objetivo didático é demonstrar como a composição recursiva de *wrappers* resolve esse problema de escalabilidade. Através dessa abordagem, o produto base é encapsulado por decoradores que compartilham a mesma interface, viabilizando o empilhamento ilimitado de funcionalidades sem alterar a classe concreta original.
*/

import { ProductCustomizationDecorator } from './products/product-customization-decorator';
import { ProductStampDecorator } from './products/product-stamp-decorator';
import { TShirt } from './products/t-shirt';

// Instância simples
const tShirt = new TShirt();
console.log(tShirt.getName(), tShirt.getPrice());

// Instância decorada com uma estampa
const tShirtWithStamp = new ProductStampDecorator(tShirt);
console.log(tShirtWithStamp.getName(), tShirtWithStamp.getPrice());

// Empilhamento duplo de decoradores de estampa
const tShirtStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
console.log(tShirtStampFrontAndBack.getName(), tShirtStampFrontAndBack.getPrice());

// Instância decorada com customização
const customizedTShirt = new ProductCustomizationDecorator(tShirt);
console.log(customizedTShirt.getName(), customizedTShirt.getPrice());
