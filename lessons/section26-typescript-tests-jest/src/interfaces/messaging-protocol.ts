// Dependência abstrata (alto nível)
export interface MessagingProtocol {
  sendMessage(msg: string): void;
}
