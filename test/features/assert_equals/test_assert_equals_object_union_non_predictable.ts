import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_union_non_predictable =
    _test_assert_equals(
        "union object",
        ObjectUnionNonPredictable.generate,
        (input) => TSON.assertEquals(input),
    );
