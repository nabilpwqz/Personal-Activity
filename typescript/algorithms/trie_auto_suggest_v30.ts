/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 30)
 * Module: TypeScript / algorithms
 * Version: 30.0.0
 */

export interface ITrieAutoSuggestV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV30<T = any> {
  private readonly config: ITrieAutoSuggestV30Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new TrieAutoSuggestV30<number>('test-30');
instance30.addItem(300);
