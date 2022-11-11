class CustomError extends Error {
  public status: number;

  public msg: string;

  constructor(status: number, msg: string) {
    super();
    this.status = status || 500;
    this.msg = msg || 'Internal server error!!!';
  }
}

export default CustomError;
