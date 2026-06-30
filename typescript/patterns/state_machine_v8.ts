/**
 * Problem: Finite state machine with transition guards (Variant 8)
 * Module: TypeScript / patterns
 * Version: 8.0.0
 */

export interface IStateMachineV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV8<T = any> {
  private readonly config: IStateMachineV8Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new StateMachineV8<number>('test-8');
instance8.addItem(80);
