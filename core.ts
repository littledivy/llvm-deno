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

  // Core->Instruction Builders
  "LLVMCreateBuilder": {
    parameters: [],
    result: "pointer",
  },
  "LLVMCreateBuilderInContext": {
    parameters: ["pointer"],
    result: "pointer",
  },
});