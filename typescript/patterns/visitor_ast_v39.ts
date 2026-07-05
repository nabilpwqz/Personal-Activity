/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 39)
 * Module: TypeScript / patterns
 * Version: 39.0.0
 */

export interface IVisitorAstV39Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV39<T = any> {
  private readonly config: IVisitorAstV39Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v39') {
    this.config = { id, version: 39, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV39Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance39 = new VisitorAstV39<number>('test-39');
instance39.addItem(390);
