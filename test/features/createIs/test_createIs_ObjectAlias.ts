import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_is_ObjectAlias = _test_is("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
)(typia.createIs<ObjectAlias>());
