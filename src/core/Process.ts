// eslint-disable-next-line
class ProcessStatus<T> {}

class Idle<T> extends ProcessStatus<T> {}
class Processing<T> extends ProcessStatus<T> {}
class Success<T> extends ProcessStatus<T> {
  constructor(public value: T) {
    super();
  }
}
class Exception<T> extends ProcessStatus<T> {
  constructor(public error: Error) {
    super();
  }
}

export { ProcessStatus, Idle, Processing, Success, Exception };
