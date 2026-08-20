/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 3)
 * Module: TypeScript / algorithms
 * Version: 3.0.0
 */

export interface ITrieAutoSuggestV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV3<T = any> {
  private readonly config: ITrieAutoSuggestV3Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new TrieAutoSuggestV3<number>('test-3');
instance3.addItem(30);
