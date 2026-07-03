/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 4)
 * Module: TypeScript / patterns
 * Version: 4.0.0
 */

export interface IVisitorAstV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV4<T = any> {
  private readonly config: IVisitorAstV4Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new VisitorAstV4<number>('test-4');
instance4.addItem(40);
