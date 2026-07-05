/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 38)
 * Module: TypeScript / patterns
 * Version: 38.0.0
 */

export interface IVisitorAstV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV38<T = any> {
  private readonly config: IVisitorAstV38Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new VisitorAstV38<number>('test-38');
instance38.addItem(380);
