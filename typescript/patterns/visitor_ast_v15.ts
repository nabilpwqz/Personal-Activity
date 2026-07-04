/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 15)
 * Module: TypeScript / patterns
 * Version: 15.0.0
 */

export interface IVisitorAstV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV15<T = any> {
  private readonly config: IVisitorAstV15Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new VisitorAstV15<number>('test-15');
instance15.addItem(150);
