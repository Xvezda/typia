import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_isDecode_TypeTagType = _test_protobuf_isDecode(
    "TypeTagType",
)<TypeTagType>(TypeTagType)({
    isDecode: (input) => typia.protobuf.isDecode<TypeTagType>(input),
    encode: typia.protobuf.createEncode<TypeTagType>(),
});
