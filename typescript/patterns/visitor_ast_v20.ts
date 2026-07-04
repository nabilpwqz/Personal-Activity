/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 20)
 * Module: TypeScript / patterns
 * Version: 20.0.0
 */

export interface IVisitorAstV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV20<T = any> {
  private readonly config: IVisitorAstV20Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new VisitorAstV20<number>('test-20');
instance20.addItem(200);
