/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 21)
 * Module: TypeScript / patterns
 * Version: 21.0.0
 */

export interface IVisitorAstV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV21<T = any> {
  private readonly config: IVisitorAstV21Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new VisitorAstV21<number>('test-21');
instance21.addItem(210);
