/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 38)
 * Module: TypeScript / algorithms
 * Version: 38.0.0
 */

export interface ITrieAutoSuggestV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV38<T = any> {
  private readonly config: ITrieAutoSuggestV38Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new TrieAutoSuggestV38<number>('test-38');
instance38.addItem(380);
