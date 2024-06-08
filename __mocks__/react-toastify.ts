import { vi } from "vitest";

const toast = vi.fn();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
toast.error = vi.fn();

export { toast };
