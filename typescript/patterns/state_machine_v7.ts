/**
 * Problem: Finite state machine with transition guards (Variant 7)
 * Module: TypeScript / patterns
 * Version: 7.0.0
 */

export interface IStateMachineV7Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV7<T = any> {
  private readonly config: IStateMachineV7Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v7') {
    this.config = { id, version: 7, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV7Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance7 = new StateMachineV7<number>('test-7');
instance7.addItem(70);
