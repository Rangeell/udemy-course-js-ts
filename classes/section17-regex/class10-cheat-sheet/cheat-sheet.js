// Encontrar todas as palavras
const palavrasRegExp = /([\w]+)/gi;

// Encontrar não números
const naoNumerosRegExp = /\D+/g;

// Checar IP
const ipRegExp = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;

// Checar CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/gm;

// Chegar telefones
const telRegExp = /^(?:\(?\d{2}\)?\s?)?(?:9\s?)?\d{4}-\d{4}$/gm;

// Checar senhas fortes
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[\s\S]{8,}$/gm;

// Checar e-mails
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm; // Permissivo
const emailRegExp2 = /[^`\s\.]+\.`?[^`\s\.]+@[^`\s]+?\.[^`\s]+|\w+/gm; // Permissivo
const emailRegExp3 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gm; // Padrão WC3

