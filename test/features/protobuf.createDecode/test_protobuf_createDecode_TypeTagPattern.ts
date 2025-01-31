import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_decode_TypeTagPattern = _test_protobuf_decode(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)({
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    encode: typia.protobuf.createEncode<TypeTagPattern>(),
});
