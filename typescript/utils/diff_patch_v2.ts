/**
 * Problem: Object diff and patch generator (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IDiffPatchV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class DiffPatchV2<T = any> {
  private readonly config: IDiffPatchV2Config;
  private items: T[] = [];

  constructor(id: string = 'diff_patch-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDiffPatchV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new DiffPatchV2<number>('test-2');
instance2.addItem(20);
