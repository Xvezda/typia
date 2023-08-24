import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_isStringify_ArrayAny = _test_json_isStringify(
    "ArrayAny",
)<ArrayAny>(ArrayAny)(typia.json.createIsStringify<ArrayAny>());