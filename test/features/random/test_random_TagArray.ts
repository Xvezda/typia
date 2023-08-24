import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagArray } from "../../structures/TagArray";

export const test_random_TagArray = _test_random("TagArray")<TagArray>(
    TagArray,
)({
    random: () => typia.random<TagArray>(),
    assert: typia.createAssert<TagArray>(),
});