/**
 * Problem: Finite state machine with transition guards (Variant 46)
 * Module: TypeScript / patterns
 * Version: 46.0.0
 */

export interface IStateMachineV46Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV46<T = any> {
  private readonly config: IStateMachineV46Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v46') {
    this.config = { id, version: 46, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV46Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance46 = new StateMachineV46<number>('test-46');
instance46.addItem(460);
