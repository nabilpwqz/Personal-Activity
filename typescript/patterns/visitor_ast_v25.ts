/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 25)
 * Module: TypeScript / patterns
 * Version: 25.0.0
 */

export interface IVisitorAstV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV25<T = any> {
  private readonly config: IVisitorAstV25Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new VisitorAstV25<number>('test-25');
instance25.addItem(250);
