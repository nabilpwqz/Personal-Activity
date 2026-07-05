/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 33)
 * Module: TypeScript / patterns
 * Version: 33.0.0
 */

export interface IVisitorAstV33Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV33<T = any> {
  private readonly config: IVisitorAstV33Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v33') {
    this.config = { id, version: 33, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV33Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance33 = new VisitorAstV33<number>('test-33');
instance33.addItem(330);
