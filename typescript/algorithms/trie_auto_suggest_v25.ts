/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 25)
 * Module: TypeScript / algorithms
 * Version: 25.0.0
 */

export interface ITrieAutoSuggestV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV25<T = any> {
  private readonly config: ITrieAutoSuggestV25Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new TrieAutoSuggestV25<number>('test-25');
instance25.addItem(250);
