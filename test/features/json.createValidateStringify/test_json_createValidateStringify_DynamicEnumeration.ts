import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_validateStringify_DynamicEnumeration =
    _test_json_validateStringify("DynamicEnumeration")<DynamicEnumeration>(
        DynamicEnumeration,
    )(typia.json.createValidateStringify<DynamicEnumeration>());
