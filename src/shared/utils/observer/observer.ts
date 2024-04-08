type AnyFn = (...args: any) => any;

export class Observer {
  subscribers: Map<AnyFn, AnyFn> = new Map();

  subscribe(callback: AnyFn) {
    this.subscribers.set(callback, callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  notify() {
    this.subscribers.forEach((sub) => {
      sub();
    });
  }
}
