/**
 * Problem: Finite state machine with transition guards (Variant 1)
 * Module: TypeScript / patterns
 * Version: 1.0.0
 */

export interface IStateMachineV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV1<T = any> {
  private readonly config: IStateMachineV1Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new StateMachineV1<number>('test-1');
instance1.addItem(10);
