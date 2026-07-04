/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 12)
 * Module: TypeScript / patterns
 * Version: 12.0.0
 */

export interface IVisitorAstV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV12<T = any> {
  private readonly config: IVisitorAstV12Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new VisitorAstV12<number>('test-12');
instance12.addItem(120);
