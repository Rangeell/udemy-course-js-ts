export class VotationOption<T> {
  private _counter: number = 0;

  constructor(public readonly optionName: T) { }

  get counter(): number { return this._counter; }

  incrementVote(): void { this._counter++; }
}

export class Votation<T> {
  private _options: VotationOption<T>[] = [];

  constructor(
    public readonly question: string,
  ) { }

  get options(): VotationOption<T>[] { return this._options; }
  addOption(option: VotationOption<T>): void { this.options.push(option); }

  vote(optionIndex: number): void {
    this.options[optionIndex]?.incrementVote();
  }
}

export class VotationApp {
  private votations: Votation<unknown>[] = [];

  addVotation(votation: Votation<unknown>): void { this.votations.push(votation); }

  showVotations() {
    for (const votation of this.votations) {
      console.log(`${votation.question}`);

      for (const option of votation.options) {
        console.log(`${option.optionName}: ${option.counter}`);
      }

      console.log('#'.repeat(10), '\n');
    }
  }
}

// TESTS
const votation1 = new Votation('Qual sua linguagem favorita?');
const option1 = new VotationOption('Python');
const option2 = new VotationOption('JavaScript');
const option3 = new VotationOption('TypeScript');
votation1.addOption(option1);
votation1.addOption(option2);
votation1.addOption(option3);
votation1.vote(2);

const votation2 = new Votation('Qual sua cor preferida?');
const optionColor1 = new VotationOption('Vermelho');
const optionColor2 = new VotationOption('Verde');
const optionColor3 = new VotationOption('Azul');
votation2.addOption(optionColor1);
votation2.addOption(optionColor2);
votation2.addOption(optionColor3);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
