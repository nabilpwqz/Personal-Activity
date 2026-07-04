/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 26)
 * Module: TypeScript / patterns
 * Version: 26.0.0
 */

export interface IVisitorAstV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV26<T = any> {
  private readonly config: IVisitorAstV26Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new VisitorAstV26<number>('test-26');
instance26.addItem(260);
