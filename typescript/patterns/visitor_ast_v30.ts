/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 30)
 * Module: TypeScript / patterns
 * Version: 30.0.0
 */

export interface IVisitorAstV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV30<T = any> {
  private readonly config: IVisitorAstV30Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new VisitorAstV30<number>('test-30');
instance30.addItem(300);
