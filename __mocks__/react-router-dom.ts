import { vi } from "vitest";

const useNavigate = vi.fn(() => vi.fn());
const useLocation = vi.fn();
const NavLink = vi.fn();

export * from "react-router-dom";
export { useNavigate, useLocation, NavLink };
