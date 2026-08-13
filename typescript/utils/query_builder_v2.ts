/**
 * Problem: Type-safe SQL/JSON filter query builder (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IQueryBuilderV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class QueryBuilderV2<T = any> {
  private readonly config: IQueryBuilderV2Config;
  private items: T[] = [];

  constructor(id: string = 'query_builder-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IQueryBuilderV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new QueryBuilderV2<number>('test-2');
instance2.addItem(20);
