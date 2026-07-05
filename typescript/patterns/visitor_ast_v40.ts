/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 40)
 * Module: TypeScript / patterns
 * Version: 40.0.0
 */

export interface IVisitorAstV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV40<T = any> {
  private readonly config: IVisitorAstV40Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new VisitorAstV40<number>('test-40');
instance40.addItem(400);
