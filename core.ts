export default Deno.dlopen("/usr/lib/llvm-12/lib/libLLVM.so", {
  // Core
  "LLVMShutdown": {
    parameters: [],
    result: "void",
  },
  "LLVMCreateMessage": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMDisposeMessage": {
    parameters: ["pointer"],
    result: "void",
  },

  // Core -> Contexts
  "LLVMContextCreate": {
    parameters: [],
    result: "pointer",
  },
  "LLVMGetGlobalContext": {
    parameters: [],
    result: "pointer",
  },
  "LLVMContextDispose": {
    parameters: ["pointer"],
    result: "void",
  },

  // Core -> Modules
  "LLVMModuleCreateWithName": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMModuleCreateWithNameInContext": {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  // Core -> Types
  "LLVMInt1TypeInContext": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMInt8TypeInContext": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMInt16TypeInContext": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMInt32TypeInContext": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMInt64TypeInContext": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMInt128TypeInContext": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMIntTypeInContext": {
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  "LLVMInt1Type": {
    parameters: [],
    result: "pointer",
  },
  "LLVMInt8Type": {
    parameters: [],
    result: "pointer",
  },
  "LLVMInt16Type": {
    parameters: [],
    result: "pointer",
  },
  "LLVMInt32Type": {
    parameters: [],
    result: "pointer",
  },
  "LLVMInt64Type": {
    parameters: [],
    result: "pointer",
  },
  "LLVMInt128Type": {
    parameters: ["i32"],
    result: "pointer",
  },

  // Core -> Types -> Function
  "LLVMFunctionType": {
    parameters: ["pointer", "pointer", "i32", "i32"],
    result: "pointer",
  },

  // Core -> Modules
  "LLVMAddFunction": {
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },

  // Core -> Instruction Builders
  "LLVMCreateBuilder": {
    parameters: [],
    result: "pointer",
  },
  "LLVMCreateBuilderInContext": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMDisposeBuilder": {
    parameters: ["pointer"],
    result: "void",
  },
  "LLVMPositionBuilderAtEnd": {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  "LLVMBuildRetVoid": {
    parameters: ["pointer"],
    result: "pointer",
  },
  "LLVMBuildRet": {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  "LLVMDumpModule": {
    parameters: ["pointer"],
    result: "void",
  },
  "LLVMBuildAdd": {
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "pointer",
  },

  // Core->Values->Constants->Scalar
  "LLVMConstInt": {
    parameters: ["pointer", "i64", "i32"],
    result: "pointer",
  },

  // Core -> Basic Block
  "LLVMAppendBasicBlockInContext": {
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
});
