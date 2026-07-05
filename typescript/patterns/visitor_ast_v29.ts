/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 29)
 * Module: TypeScript / patterns
 * Version: 29.0.0
 */

export interface IVisitorAstV29Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV29<T = any> {
  private readonly config: IVisitorAstV29Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v29') {
    this.config = { id, version: 29, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV29Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance29 = new VisitorAstV29<number>('test-29');
instance29.addItem(290);
