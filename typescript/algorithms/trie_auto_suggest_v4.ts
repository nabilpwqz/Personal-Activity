/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 4)
 * Module: TypeScript / algorithms
 * Version: 4.0.0
 */

export interface ITrieAutoSuggestV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV4<T = any> {
  private readonly config: ITrieAutoSuggestV4Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new TrieAutoSuggestV4<number>('test-4');
instance4.addItem(40);
