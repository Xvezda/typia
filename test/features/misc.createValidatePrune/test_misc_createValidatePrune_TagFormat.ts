import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagFormat } from "../../structures/TagFormat";

export const test_misc_validatePrune_TagFormat = _test_misc_validatePrune(
    "TagFormat",
)<TagFormat>(TagFormat)(typia.misc.createValidatePrune<TagFormat>());