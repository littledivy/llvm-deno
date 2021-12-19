import LLVM from "../core.ts";

function encode(value: string): Deno.UnsafePointer {
  const buffer = new TextEncoder().encode(value);
  return Deno.UnsafePointer.of(buffer);
}

const context = LLVM.symbols.LLVMContextCreate();
const module = LLVM.symbols.LLVMModuleCreateWithNameInContext(
  encode("deno_llvm\0"),
  context,
);
const builder = LLVM.symbols.LLVMCreateBuilderInContext(context);

const i64t = LLVM.symbols.LLVMInt64TypeInContext(context);

const argts = new BigInt64Array([]);
const function_type = LLVM.symbols.LLVMFunctionType(
  i64t,
  Deno.UnsafePointer.of(argts),
  argts.length,
  0,
);

const func = LLVM.symbols.LLVMAddFunction(
  module,
  encode("nop\0"),
  function_type,
);

const block = LLVM.symbols.LLVMAppendBasicBlockInContext(
  context,
  func,
  encode("entry\0"),
);

LLVM.symbols.LLVMPositionBuilderAtEnd(builder, block);

const sum = LLVM.symbols.LLVMBuildAdd(
  builder,
  LLVM.symbols.LLVMConstInt(i64t, 1, 0),
  LLVM.symbols.LLVMConstInt(i64t, 2, 0),
  encode("sum\0"),
);

LLVM.symbols.LLVMBuildRet(builder, sum);

LLVM.symbols.LLVMDumpModule(module);
