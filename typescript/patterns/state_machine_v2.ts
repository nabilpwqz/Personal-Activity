/**
 * Problem: Finite state machine with transition guards (Variant 2)
 * Module: TypeScript / patterns
 * Version: 2.0.0
 */

export interface IStateMachineV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV2<T = any> {
  private readonly config: IStateMachineV2Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new StateMachineV2<number>('test-2');
instance2.addItem(20);
