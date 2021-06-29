/*
 * semgrep-rust
 *
 * Extend the original tree-sitter Rust grammar with semgrep-specific constructs
 * used to represent semgrep patterns.
 */

const standard_grammar = require('tree-sitter-rust/grammar');

module.exports = grammar(standard_grammar, {
  name: 'rust',
});
