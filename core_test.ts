import LLVM from "./core.ts";

Deno.test("context_create", () => {
  const context = LLVM.symbols.LLVMContextCreate();
  LLVM.symbols.LLVMContextDispose(context);
});
