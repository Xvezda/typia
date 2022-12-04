import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_DynamicUnion = _test_assertParse(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => TSON.assertParse<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
