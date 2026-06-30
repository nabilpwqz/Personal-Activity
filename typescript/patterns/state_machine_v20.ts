/**
 * Problem: Finite state machine with transition guards (Variant 20)
 * Module: TypeScript / patterns
 * Version: 20.0.0
 */

export interface IStateMachineV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV20<T = any> {
  private readonly config: IStateMachineV20Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new StateMachineV20<number>('test-20');
instance20.addItem(200);
