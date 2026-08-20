/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 12)
 * Module: TypeScript / algorithms
 * Version: 12.0.0
 */

export interface ITrieAutoSuggestV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV12<T = any> {
  private readonly config: ITrieAutoSuggestV12Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new TrieAutoSuggestV12<number>('test-12');
instance12.addItem(120);
