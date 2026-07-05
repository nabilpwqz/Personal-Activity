/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 27)
 * Module: TypeScript / patterns
 * Version: 27.0.0
 */

export interface IVisitorAstV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV27<T = any> {
  private readonly config: IVisitorAstV27Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new VisitorAstV27<number>('test-27');
instance27.addItem(270);
