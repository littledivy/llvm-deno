import { SYMBOLS } from "./symbols.ts";

const searchPath: string[] = [];

const SUPPORTED_VERSIONS = [14, 13, 12];

if (Deno.build.os === "linux") {
    searchPath.push(
      ...SUPPORTED_VERSIONS.map((version) =>
        `/usr/lib/llvm-${version}/lib/libLLVM.so`
      ),
    );
} else {
  throw new Error("Unsupported Operating System, consider installing a linux distro")
}
let lib!: Deno.DynamicLibrary<typeof SYMBOLS>;

for (const path of searchPath) {
  try {
    lib = Deno.dlopen(path, SYMBOLS);
    break;
  } catch (_) {
    continue;
  }
}

export { lib as default };