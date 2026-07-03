/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 3)
 * Module: TypeScript / patterns
 * Version: 3.0.0
 */

export interface IVisitorAstV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV3<T = any> {
  private readonly config: IVisitorAstV3Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new VisitorAstV3<number>('test-3');
instance3.addItem(30);
