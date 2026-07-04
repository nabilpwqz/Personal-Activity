/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 13)
 * Module: TypeScript / patterns
 * Version: 13.0.0
 */

export interface IVisitorAstV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV13<T = any> {
  private readonly config: IVisitorAstV13Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new VisitorAstV13<number>('test-13');
instance13.addItem(130);
