export function navigateTo(route, payload = {}, meta) {
  return {
    meta,
    payload,
    type: route,
  };
}
