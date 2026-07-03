/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 2)
 * Module: TypeScript / patterns
 * Version: 2.0.0
 */

export interface IVisitorAstV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV2<T = any> {
  private readonly config: IVisitorAstV2Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new VisitorAstV2<number>('test-2');
instance2.addItem(20);
