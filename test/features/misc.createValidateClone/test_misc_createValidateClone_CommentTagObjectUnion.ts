import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_validateClone_CommentTagObjectUnion =
    _test_misc_validateClone("CommentTagObjectUnion")<CommentTagObjectUnion>(
        CommentTagObjectUnion,
    )(typia.misc.createValidateClone<CommentTagObjectUnion>());
