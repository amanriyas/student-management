/**
 * Generic in-memory repository to demonstrate:
 * - Generics (T, K)
 * - constraint where T extends { id: string }
 * - utility types examples in comments
 */

export type WithId = { id: string };

export class Repository<T extends WithId> {
  protected items: Map<string, T> = new Map();

  create(item: T): T {
    this.items.set(item.id, item);
    return item;
  }

  getById(id: string): T | undefined {
    return this.items.get(id);
  }

  update(id: string, patch: Partial<T>): T | undefined {
    const existing = this.items.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...patch } as T;
    this.items.set(id, updated);
    return updated;
  }

  delete(id: string): boolean {
    return this.items.delete(id);
  }

  list(): T[] {
    return Array.from(this.items.values());
  }

  // Example of a typed search function with key restricted to T's keys (K extends keyof T)
  findBy<K extends keyof T>(key: K, value: T[K]): T[] {
    return this.list().filter((item) => item[key] === value);
  }
}
