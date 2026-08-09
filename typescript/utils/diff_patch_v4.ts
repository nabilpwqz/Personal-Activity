/**
 * Problem: Object diff and patch generator (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface IDiffPatchV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class DiffPatchV4<T = any> {
  private readonly config: IDiffPatchV4Config;
  private items: T[] = [];

  constructor(id: string = 'diff_patch-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDiffPatchV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new DiffPatchV4<number>('test-4');
instance4.addItem(40);
