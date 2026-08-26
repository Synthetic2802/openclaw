import type { RegisterNativeHookRelayParams } from "../agents/harness/native-hook-relay-types.js";
// Private retained native-hook relay capability for bundled runtime owners.
import {
  hasNativeHookRelayInvocation,
  registerRetainedNativeHookRelay,
  type NativeHookRelayRetention,
} from "../agents/harness/native-hook-relay.js";

export type RetainedNativeHookRelayParams = RegisterNativeHookRelayParams & {
  retention: NativeHookRelayRetention;
};

/** Reads native relay invocation ownership for bundled runtime consumers. */
export function hasNativeHookRelayInvocationForBundledRuntime(
  params: Parameters<typeof hasNativeHookRelayInvocation>[0],
): boolean {
  return hasNativeHookRelayInvocation(params);
}

/** Registers a bundled-only relay that may retain host policy for direct children. */
export function registerRetainedNativeHookRelayForBundledRuntime(
  params: RetainedNativeHookRelayParams,
) {
  return registerRetainedNativeHookRelay(params);
}
