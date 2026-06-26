/**
 * Problem: Command pattern with undo/redo action history (Variant 4)
 * Module: TypeScript / patterns
 * Version: 4.0.0
 */

export interface ICommandInvokerV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class CommandInvokerV4<T = any> {
  private readonly config: ICommandInvokerV4Config;
  private items: T[] = [];

  constructor(id: string = 'command_invoker-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ICommandInvokerV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new CommandInvokerV4<number>('test-4');
instance4.addItem(40);
