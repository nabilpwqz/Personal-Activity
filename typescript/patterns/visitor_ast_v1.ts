/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 1)
 * Module: TypeScript / patterns
 * Version: 1.0.0
 */

export interface IVisitorAstV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV1<T = any> {
  private readonly config: IVisitorAstV1Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new VisitorAstV1<number>('test-1');
instance1.addItem(10);
