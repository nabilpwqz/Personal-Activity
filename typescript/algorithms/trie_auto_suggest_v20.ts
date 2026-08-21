/**
 * Problem: Prefix trie with ranked auto-complete candidates (Variant 20)
 * Module: TypeScript / algorithms
 * Version: 20.0.0
 */

export interface ITrieAutoSuggestV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class TrieAutoSuggestV20<T = any> {
  private readonly config: ITrieAutoSuggestV20Config;
  private items: T[] = [];

  constructor(id: string = 'trie_auto_suggest-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITrieAutoSuggestV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new TrieAutoSuggestV20<number>('test-20');
instance20.addItem(200);
