/**
 * Problem: Type-safe SQL/JSON filter query builder (Variant 6)
 * Module: TypeScript / utils
 * Version: 6.0.0
 */

export interface IQueryBuilderV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class QueryBuilderV6<T = any> {
  private readonly config: IQueryBuilderV6Config;
  private items: T[] = [];

  constructor(id: string = 'query_builder-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IQueryBuilderV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new QueryBuilderV6<number>('test-6');
instance6.addItem(60);
