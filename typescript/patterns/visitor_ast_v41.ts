/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 41)
 * Module: TypeScript / patterns
 * Version: 41.0.0
 */

export interface IVisitorAstV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV41<T = any> {
  private readonly config: IVisitorAstV41Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new VisitorAstV41<number>('test-41');
instance41.addItem(410);
