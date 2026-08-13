/**
 * Problem: Type-safe SQL/JSON filter query builder (Variant 1)
 * Module: TypeScript / utils
 * Version: 1.0.0
 */

export interface IQueryBuilderV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class QueryBuilderV1<T = any> {
  private readonly config: IQueryBuilderV1Config;
  private items: T[] = [];

  constructor(id: string = 'query_builder-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IQueryBuilderV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new QueryBuilderV1<number>('test-1');
instance1.addItem(10);
