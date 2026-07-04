/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 22)
 * Module: TypeScript / patterns
 * Version: 22.0.0
 */

export interface IVisitorAstV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV22<T = any> {
  private readonly config: IVisitorAstV22Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new VisitorAstV22<number>('test-22');
instance22.addItem(220);
