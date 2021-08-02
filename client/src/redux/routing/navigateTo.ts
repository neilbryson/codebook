import type { ActionMetaLocation, Meta } from 'redux-first-router';

import { Routes } from './routesMap';

export function navigateTo(
  route: Routes,
  payload: Record<string, unknown> = {},
  meta?: Partial<ActionMetaLocation & Meta>
) {
  return {
    meta,
    payload,
    type: route,
  };
}
