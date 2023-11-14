import { writable, type Writable } from "svelte/store";

export const isWindowOpen: Writable<boolean> = writable(false);