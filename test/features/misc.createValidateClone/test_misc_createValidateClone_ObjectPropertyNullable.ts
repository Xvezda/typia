import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_validateClone_ObjectPropertyNullable =
    _test_misc_validateClone("ObjectPropertyNullable")<ObjectPropertyNullable>(
        ObjectPropertyNullable,
    )(typia.misc.createValidateClone<ObjectPropertyNullable>());
