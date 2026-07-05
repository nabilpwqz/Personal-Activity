/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 42)
 * Module: TypeScript / patterns
 * Version: 42.0.0
 */

export interface IVisitorAstV42Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV42<T = any> {
  private readonly config: IVisitorAstV42Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v42') {
    this.config = { id, version: 42, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV42Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance42 = new VisitorAstV42<number>('test-42');
instance42.addItem(420);
