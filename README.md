## LLVM bindings for Deno

Low-level bindings to the LLVM C interface using Deno FFI.

**SAFETY** Using this module will make the Deno sandbox pretty much useless.
Only use if you are 100% aware of what you are doing.

## Implementation status

I usually implement parts of modules based on my personal need. Accepting
contributions to add more bindings.

- [ ] Analysis
- [ ] Bit reader
- [ ] Bit writer
- [ ] Transforms
- [x] Core (WIP)
- [ ] Memory buffers
- [ ] Pass registry
- [ ] Pass managers
- [ ] Threading
- [ ] Disassembler
- [ ] Error handling
- [ ] Execution Engine
- [ ] Initialization
- [ ] Target info
- [ ] LTO

## Documentation

Refer to the official [LLVM documentation](https://llvm.org/docs/Reference.html)

## License

Licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or
  http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
