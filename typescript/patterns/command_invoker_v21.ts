/**
 * Problem: Command pattern with undo/redo action history (Variant 21)
 * Module: TypeScript / patterns
 * Version: 21.0.0
 */

export interface ICommandInvokerV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class CommandInvokerV21<T = any> {
  private readonly config: ICommandInvokerV21Config;
  private items: T[] = [];

  constructor(id: string = 'command_invoker-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ICommandInvokerV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new CommandInvokerV21<number>('test-21');
instance21.addItem(210);
