// Write your own implementation of EventEmitter class (Publisher/Subscriber). It should behave like the following:

// const emitter = new MyEventEmitter();
// emitter.registerHandler('usedUpdated', () => console.log('User was updated'));
// emitter.emitEvent('usedUpdated'); // User was updated

class MyEventEmitter {
  private events: Record<string, ()=> void> = {}

  registerHandler(handlerName: string, callback: () => void) {
    this.events[handlerName] = callback;
  }

  emitEvent(handlerName: string) {
    if (this.events[handlerName]){
      this.events[handlerName]();
    }
  }
}

const emitter = new MyEventEmitter();
emitter.registerHandler('usedUpdated', () => console.log('User was updated'));
emitter.emitEvent('usedUpdated'); // User was updated