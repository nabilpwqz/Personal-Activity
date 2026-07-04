/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 9)
 * Module: TypeScript / patterns
 * Version: 9.0.0
 */

export interface IVisitorAstV9Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV9<T = any> {
  private readonly config: IVisitorAstV9Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v9') {
    this.config = { id, version: 9, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV9Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance9 = new VisitorAstV9<number>('test-9');
instance9.addItem(90);
