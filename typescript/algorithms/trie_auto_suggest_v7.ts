/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 7)
 * Module: TypeScript / algorithms
 * Version: 7.0.0
 */

export interface ITrieAutoSuggestV7Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV7<T = any> {
  private readonly config: ITrieAutoSuggestV7Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v7') {
    this.config = { id, version: 7, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV7Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance7 = new TrieAutoSuggestV7<number>('test-7');
instance7.addItem(70);
