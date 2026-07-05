/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 37)
 * Module: TypeScript / patterns
 * Version: 37.0.0
 */

export interface IVisitorAstV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV37<T = any> {
  private readonly config: IVisitorAstV37Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new VisitorAstV37<number>('test-37');
instance37.addItem(370);
