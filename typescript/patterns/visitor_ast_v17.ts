/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 17)
 * Module: TypeScript / patterns
 * Version: 17.0.0
 */

export interface IVisitorAstV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV17<T = any> {
  private readonly config: IVisitorAstV17Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new VisitorAstV17<number>('test-17');
instance17.addItem(170);
