/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 6)
 * Module: TypeScript / algorithms
 * Version: 6.0.0
 */

export interface ITrieAutoSuggestV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV6<T = any> {
  private readonly config: ITrieAutoSuggestV6Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new TrieAutoSuggestV6<number>('test-6');
instance6.addItem(60);
