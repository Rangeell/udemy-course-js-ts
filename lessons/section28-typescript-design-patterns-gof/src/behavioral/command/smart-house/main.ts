/*
Nesta aula prática, aplicamos o padrão de projeto Command simulando um sistema de Casa Inteligente (Smart Home). O objetivo é desacoplar o objeto que dispara a ação (o aplicativo ou controle remoto — Invoker) da lógica real de execução que ocorre nos dispositivos físicos (lâmpadas inteligentes — Receiver), utilizando comandos encapsulados como objetos.

Esta aula abrange a implementação prática e 100% orientada a código do padrão de projeto Command (Comportamental GoF) utilizando TypeScript. O objetivo é abstrair a execução de tarefas em objetos independentes, permitindo desacoplar a origem da requisição (botão/controle) de quem realmente executa a ação (dispositivo inteligente).
*/

import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouserLight } from './smart-house-light';

// Podemos usar tanto a luz (Receiver), quanto o comando (Command) diretamente

// Receivers (Luzes da Casa)
const bedroomLight = new SmartHouserLight('Luz do Quarto');
const bathdroomLight = new SmartHouserLight('Luz do Banheiro');

// Usando o Receiver Diretamente
bedroomLight.on(); // Luz do Quarto agora está ON!
bedroomLight.off(); // Luz do Quarto agora está OFF!

// Commands Concretos
const bedroomPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomPowerCommand = new LightPowerCommand(bathdroomLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);

// Usando os Commands diretamente
bedroomPowerCommand.execute(); // Luz do Quarto agora está ON!
bedroomPowerCommand.undo(); // Luz do Quarto agora está OFF!

bathroomPowerCommand.execute(); // Luz do Banheiro agora está ON!
bathroomPowerCommand.undo(); // Luz do Banheiro agora está OFF!

// Involker (Aplicativo da Casa)
const smartHouseApp = new SmartHouseApp();

// Usando o Invoker diretamente (seguindo o padrão de projeto)

// Mapeamento dos botões
smartHouseApp.addCommand('btn-1', bedroomPowerCommand); // Passamos o 'id' e o comando que queremos executar
smartHouseApp.addCommand('btn-2', bathroomPowerCommand); // Passamos o 'id' e o comando que queremos executar
smartHouseApp.addCommand('btn-3', bedroomLightIntensityCommand); // Passamos o 'id' e o comando que queremos executar

// Executando e desfazendo ações pelos botões
smartHouseApp.executeCommand('btn-1'); // Luz do Quarto agora está ON!
smartHouseApp.undoCommand('btn-1'); // Luz do Quarto agora está OFF!

smartHouseApp.executeCommand('btn-2'); // Luz do Banheiro agora está ON!
smartHouseApp.undoCommand('btn-2'); // Luz do Banheiro agora está OFF!

smartHouseApp.executeCommand('btn-3'); // Intensidade de Luz do Quarto: 51
smartHouseApp.undoCommand('btn-3'); // Intensidade de Luz do Quarto: 50

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-3'); // Não passa de 100
  // smartHouseApp.undoCommand('btn-3'); // Não passa de 0
}
