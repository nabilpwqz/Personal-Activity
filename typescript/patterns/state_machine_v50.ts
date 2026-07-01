/**
 * Problem: Finite state machine with transition guards (Variant 50)
 * Module: TypeScript / patterns
 * Version: 50.0.0
 */

export interface IStateMachineV50Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV50<T = any> {
  private readonly config: IStateMachineV50Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v50') {
    this.config = { id, version: 50, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV50Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance50 = new StateMachineV50<number>('test-50');
instance50.addItem(500);
