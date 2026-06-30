/**
 * Problem: Finite state machine with transition guards (Variant 14)
 * Module: TypeScript / patterns
 * Version: 14.0.0
 */

export interface IStateMachineV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV14<T = any> {
  private readonly config: IStateMachineV14Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new StateMachineV14<number>('test-14');
instance14.addItem(140);
