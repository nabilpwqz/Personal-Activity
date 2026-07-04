/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 11)
 * Module: TypeScript / patterns
 * Version: 11.0.0
 */

export interface IVisitorAstV11Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV11<T = any> {
  private readonly config: IVisitorAstV11Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v11') {
    this.config = { id, version: 11, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV11Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance11 = new VisitorAstV11<number>('test-11');
instance11.addItem(110);
