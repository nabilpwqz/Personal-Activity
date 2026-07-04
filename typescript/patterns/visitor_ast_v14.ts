/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 14)
 * Module: TypeScript / patterns
 * Version: 14.0.0
 */

export interface IVisitorAstV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV14<T = any> {
  private readonly config: IVisitorAstV14Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new VisitorAstV14<number>('test-14');
instance14.addItem(140);
