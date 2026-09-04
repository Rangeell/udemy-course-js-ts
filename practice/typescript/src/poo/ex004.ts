/*
Exercise 004 — Notification System

Difficulty: 🟢 Easy

📝 Enunciado

    Você deverá criar um pequeno sistema de notificações utilizando interfaces e polimorfismo.

    O sistema terá diferentes tipos de notificações:
        - notificação por e-mail;
        - notificação por SMS;
        - notificação push.

    Todas elas devem possuir um comportamento em comum: enviar uma mensagem.

    Apesar de cada tipo de notificação realizar o envio de maneira diferente, o código responsável por utilizar essas notificações não deve precisar conhecer os detalhes de cada implementação.

    A ideia é começar a praticar interfaces + polimorfismo, utilizando uma mesma abstração para diferentes objetos.

🎯 Objetivo

    Crie uma interface Notification que defina o contrato que todas as notificações deverão seguir.

    Depois, crie três classes:
        - EmailNotification;
        - SmsNotification;
        - PushNotification.

    Todas deverão implementar Notification.

    Por fim, crie uma função que receba qualquer objeto que implemente Notification e solicite o envio da mensagem.

    O ponto principal é que essa função deverá trabalhar com a interface, e não com uma classe específica.

📌 Contrato do Problema
    - Considere que o destinatário e a mensagem recebidos pelas classes são sempre string válidas.
    - A mensagem deve possuir pelo menos 1 caractere.
    - A validação da mensagem faz parte do exercício.
    - Cada classe deve implementar a interface Notification.
    - A interface deve definir um método responsável pelo envio da notificação.
    - Cada tipo de notificação deve possuir sua própria implementação desse método.
    - O método deve retornar uma string indicando o envio da mensagem.
    - A função responsável por enviar uma notificação deve aceitar qualquer objeto que implemente Notification.
    - Não utilize any.
    - Não utilize herança neste exercício.
    - Não é necessário utilizar abstract.
    - Não é necessário utilizar getters/setters neste exercício.

📋 Regras
    1. Crie uma interface chamada Notification.
    2. A interface deve definir o contrato necessário para enviar uma notificação.
    3. Crie uma classe EmailNotification.
    4. Crie uma classe SmsNotification.
    5. Crie uma classe PushNotification.
    6. As três classes devem implementar Notification.
    7. Cada classe deve possuir seu próprio comportamento de envio.
    8. O destinatário deve ser armazenado na classe.
    9. O código externo não deve precisar verificar se está trabalhando com e-mail, SMS ou push para solicitar o envio.
    10. Crie uma função sendNotification que trabalhe utilizando a interface Notification.
    11. Uma mensagem vazia deve ser rejeitada.
    12. Não utilize any.
    13. Não utilize instanceof dentro de sendNotification.
    14. Não crie três funções diferentes para enviar cada tipo de notificação.
    15. A solução deve demonstrar polimorfismo.
*/

interface Notification {
    send(msg: string): string
}

class EmailNotification implements Notification {
    constructor(private email: string) { }

    send(msg: string): string {
        if (msg.length < 1) throw new Error('Mensagem inválida!');

        return `E-mail enviado para ${this.email}: ${msg}`;
    }
}

class SmsNotification implements Notification {
    constructor(private tel: string) { }

    send(msg: string): string {
        if (msg.length < 1) throw new Error('Mensagem inválida!');

        return `SMS enviado para ${this.tel}: ${msg}`;
    }
}

class PushNotification implements Notification {
    constructor(private user: string) { }

    send(msg: string): string {
        if (msg.length < 1) throw new Error('Mensagem inválida!');

        return `Push enviado para ${this.user}: ${msg}`;
    }
}

const sendNotification = (obj: Notification, msg: string): string => obj.send(msg);

//* EXAMPLES

const email = new EmailNotification('rangel@email.com');
console.log(email.send('Sua compra foi aprovada!'));
/*
Deve retornar algo indicando:
    E-mail enviado para rangel@email.com: Sua compra foi aprovada!
*/

console.log(sendNotification(email, 'A sua compra foi recusada!'));
// Deve retornar: E-mail enviado para rangel@email.com: A sua compra foi recusada!

const sms = new SmsNotification('11999999999');
console.log(sms.send('Seu código é 123456'));
/*
Deve retornar algo indicando:
    SMS enviado para 11999999999: Seu código é 123456
*/

const push = new PushNotification('user-123');
console.log(push.send('Você recebeu uma nova mensagem'));
/*
Deve retornar algo indicando:
    Push enviado para user-123: Você recebeu uma nova mensagem
*/
