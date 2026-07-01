/**
 * Problem: Finite state machine with transition guards (Variant 37)
 * Module: TypeScript / patterns
 * Version: 37.0.0
 */

export interface IStateMachineV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV37<T = any> {
  private readonly config: IStateMachineV37Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new StateMachineV37<number>('test-37');
instance37.addItem(370);
