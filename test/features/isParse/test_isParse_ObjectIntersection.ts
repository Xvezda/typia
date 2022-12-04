import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectIntersection = _test_isParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => TSON.isParse<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);
