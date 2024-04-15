export class AsaasAPIError extends Error {
  constructor(public message: string, public cause?: Error, public data?: any) {
    super(message);
    Error.captureStackTrace(this, AsaasAPIError);
  }
}
