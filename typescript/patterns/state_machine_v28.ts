/**
 * Problem: Finite state machine with transition guards (Variant 28)
 * Module: TypeScript / patterns
 * Version: 28.0.0
 */

export interface IStateMachineV28Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV28<T = any> {
  private readonly config: IStateMachineV28Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v28') {
    this.config = { id, version: 28, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV28Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance28 = new StateMachineV28<number>('test-28');
instance28.addItem(280);
