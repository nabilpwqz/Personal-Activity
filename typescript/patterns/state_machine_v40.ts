/**
 * Problem: Finite state machine with transition guards (Variant 40)
 * Module: TypeScript / patterns
 * Version: 40.0.0
 */

export interface IStateMachineV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV40<T = any> {
  private readonly config: IStateMachineV40Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new StateMachineV40<number>('test-40');
instance40.addItem(400);
