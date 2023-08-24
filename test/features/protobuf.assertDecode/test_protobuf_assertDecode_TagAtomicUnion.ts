import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_assertDecode_TagAtomicUnion =
    _test_protobuf_assertDecode("TagAtomicUnion")<TagAtomicUnion>(
        TagAtomicUnion,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TagAtomicUnion>(input),
        encode: typia.protobuf.createEncode<TagAtomicUnion>(),
    });