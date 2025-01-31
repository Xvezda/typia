import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_encode_ObjectInternal = _test_protobuf_encode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    encode: (input) => typia.protobuf.encode<ObjectInternal>(input),
    message: typia.protobuf.message<ObjectInternal>(),
    decode: typia.protobuf.createDecode<ObjectInternal>(),
});
