/**
 * Problem: Object diff and patch generator (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface IDiffPatchV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class DiffPatchV3<T = any> {
  private readonly config: IDiffPatchV3Config;
  private items: T[] = [];

  constructor(id: string = 'diff_patch-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDiffPatchV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new DiffPatchV3<number>('test-3');
instance3.addItem(30);
