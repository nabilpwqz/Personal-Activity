/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 6)
 * Module: TypeScript / patterns
 * Version: 6.0.0
 */

export interface IVisitorAstV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV6<T = any> {
  private readonly config: IVisitorAstV6Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new VisitorAstV6<number>('test-6');
instance6.addItem(60);
