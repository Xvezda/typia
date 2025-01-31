import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_encode_TypeTagRange = _test_protobuf_encode(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
    encode: (input) => typia.protobuf.encode<TypeTagRange>(input),
    message: typia.protobuf.message<TypeTagRange>(),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
});
