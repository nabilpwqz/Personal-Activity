/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 5)
 * Module: TypeScript / patterns
 * Version: 5.0.0
 */

export interface IVisitorAstV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV5<T = any> {
  private readonly config: IVisitorAstV5Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new VisitorAstV5<number>('test-5');
instance5.addItem(50);
