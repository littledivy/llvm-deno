import LLVM from "../core.ts";

const context = LLVM.symbols.LLVMContextCreate();
const module = LLVM.symbols.LLVMModuleCreateWithNameInContext("jit", context);
const builder = LLVM.symbols.LLVMCreateBuilderInContext(context);