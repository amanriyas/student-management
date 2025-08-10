/**
 * A simple logging decorator for classes and methods.
 * Shows experimental decorator syntax and metadata usage.
 */

export function LogClass(prefix = "LOG") {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      constructor(...args: any[]) {
        super(...args);
        console.log(`${prefix}: Constructed ${constructor.name} with`, args);
      }
    };
  };
}

export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  if (typeof original === "function") {
    descriptor.value = function (...args: any[]) {
      console.log(`Method ${propertyKey} called with`, args);
      const result = original.apply(this, args);
      console.log(`Method ${propertyKey} returned`, result);
      return result;
    };
  }
  return descriptor;
}
