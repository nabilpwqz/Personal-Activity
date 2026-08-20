/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 2)
 * Module: TypeScript / algorithms
 * Version: 2.0.0
 */

export interface ITrieAutoSuggestV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV2<T = any> {
  private readonly config: ITrieAutoSuggestV2Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new TrieAutoSuggestV2<number>('test-2');
instance2.addItem(20);
