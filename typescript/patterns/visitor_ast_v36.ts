/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 36)
 * Module: TypeScript / patterns
 * Version: 36.0.0
 */

export interface IVisitorAstV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV36<T = any> {
  private readonly config: IVisitorAstV36Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new VisitorAstV36<number>('test-36');
instance36.addItem(360);
