export function getSuccess(payload: string | object | null = null, message = "ok") {
  return {
    status: 200,
    message,
    payload,
  };
}

export function getCreated(payload: string | object | null = null, message = "Created") {
  return {
    status: 201,
    message,
    payload,
  };
}
