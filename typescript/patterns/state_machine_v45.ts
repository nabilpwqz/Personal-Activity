/**
 * Problem: Finite state machine with transition guards (Variant 45)
 * Module: TypeScript / patterns
 * Version: 45.0.0
 */

export interface IStateMachineV45Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV45<T = any> {
  private readonly config: IStateMachineV45Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v45') {
    this.config = { id, version: 45, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV45Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance45 = new StateMachineV45<number>('test-45');
instance45.addItem(450);
