# v6.9.0
pbjs -t static-module tablestore.proto tablestore_filter.proto tablestore_search.proto -w commonjs -o tablestore_compiled_proto.js
# flatc --version : 1.11.0
flatc --js sql.fbs