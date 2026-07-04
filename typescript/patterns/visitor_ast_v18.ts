/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 18)
 * Module: TypeScript / patterns
 * Version: 18.0.0
 */

export interface IVisitorAstV18Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV18<T = any> {
  private readonly config: IVisitorAstV18Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v18') {
    this.config = { id, version: 18, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV18Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance18 = new VisitorAstV18<number>('test-18');
instance18.addItem(180);
