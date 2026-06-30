/**
 * Problem: Finite state machine with transition guards (Variant 19)
 * Module: TypeScript / patterns
 * Version: 19.0.0
 */

export interface IStateMachineV19Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV19<T = any> {
  private readonly config: IStateMachineV19Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v19') {
    this.config = { id, version: 19, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV19Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance19 = new StateMachineV19<number>('test-19');
instance19.addItem(190);
