/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 35)
 * Module: TypeScript / patterns
 * Version: 35.0.0
 */

export interface IVisitorAstV35Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV35<T = any> {
  private readonly config: IVisitorAstV35Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v35') {
    this.config = { id, version: 35, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV35Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance35 = new VisitorAstV35<number>('test-35');
instance35.addItem(350);
