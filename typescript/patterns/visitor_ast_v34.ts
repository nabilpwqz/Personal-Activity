/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 34)
 * Module: TypeScript / patterns
 * Version: 34.0.0
 */

export interface IVisitorAstV34Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV34<T = any> {
  private readonly config: IVisitorAstV34Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v34') {
    this.config = { id, version: 34, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV34Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance34 = new VisitorAstV34<number>('test-34');
instance34.addItem(340);
