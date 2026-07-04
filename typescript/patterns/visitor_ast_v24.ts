/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 24)
 * Module: TypeScript / patterns
 * Version: 24.0.0
 */

export interface IVisitorAstV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV24<T = any> {
  private readonly config: IVisitorAstV24Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new VisitorAstV24<number>('test-24');
instance24.addItem(240);
