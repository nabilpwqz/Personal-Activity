/**
 * Problem: Type-safe SQL/JSON filter query builder (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface IQueryBuilderV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class QueryBuilderV3<T = any> {
  private readonly config: IQueryBuilderV3Config;
  private items: T[] = [];

  constructor(id: string = 'query_builder-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IQueryBuilderV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new QueryBuilderV3<number>('test-3');
instance3.addItem(30);
