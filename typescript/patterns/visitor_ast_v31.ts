/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 31)
 * Module: TypeScript / patterns
 * Version: 31.0.0
 */

export interface IVisitorAstV31Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV31<T = any> {
  private readonly config: IVisitorAstV31Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v31') {
    this.config = { id, version: 31, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV31Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance31 = new VisitorAstV31<number>('test-31');
instance31.addItem(310);
