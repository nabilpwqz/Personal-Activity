/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 28)
 * Module: TypeScript / patterns
 * Version: 28.0.0
 */

export interface IVisitorAstV28Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV28<T = any> {
  private readonly config: IVisitorAstV28Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v28') {
    this.config = { id, version: 28, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV28Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance28 = new VisitorAstV28<number>('test-28');
instance28.addItem(280);
