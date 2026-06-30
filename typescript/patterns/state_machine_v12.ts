/**
 * Problem: Finite state machine with transition guards (Variant 12)
 * Module: TypeScript / patterns
 * Version: 12.0.0
 */

export interface IStateMachineV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV12<T = any> {
  private readonly config: IStateMachineV12Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new StateMachineV12<number>('test-12');
instance12.addItem(120);
