/**
 * Problem: Visitor pattern on syntax tree nodes (Variant 7)
 * Module: TypeScript / patterns
 * Version: 7.0.0
 */

export interface IVisitorAstV7Config {
  id: string;
  version: number;
  active: boolean;
}

export class VisitorAstV7<T = any> {
  private readonly config: IVisitorAstV7Config;
  private items: T[] = [];

  constructor(id: string = 'visitor_ast-v7') {
    this.config = { id, version: 7, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IVisitorAstV7Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance7 = new VisitorAstV7<number>('test-7');
instance7.addItem(70);
