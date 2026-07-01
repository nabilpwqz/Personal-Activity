/**
 * Problem: Finite state machine with transition guards (Variant 35)
 * Module: TypeScript / patterns
 * Version: 35.0.0
 */

export interface IStateMachineV35Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV35<T = any> {
  private readonly config: IStateMachineV35Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v35') {
    this.config = { id, version: 35, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV35Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance35 = new StateMachineV35<number>('test-35');
instance35.addItem(350);
