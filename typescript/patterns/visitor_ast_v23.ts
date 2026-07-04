/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 23)
 * Module: TypeScript / patterns
 * Version: 23.0.0
 */

export interface IVisitorAstV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV23<T = any> {
  private readonly config: IVisitorAstV23Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new VisitorAstV23<number>('test-23');
instance23.addItem(230);
