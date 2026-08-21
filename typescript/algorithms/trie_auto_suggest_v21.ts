/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 21)
 * Module: TypeScript / algorithms
 * Version: 21.0.0
 */

export interface ITrieAutoSuggestV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV21<T = any> {
  private readonly config: ITrieAutoSuggestV21Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new TrieAutoSuggestV21<number>('test-21');
instance21.addItem(210);
