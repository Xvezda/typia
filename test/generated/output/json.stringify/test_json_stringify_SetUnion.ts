import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { SetUnion } from "../../../structures/SetUnion";

export const test_json_stringify_SetUnion = _test_json_stringify(
    "SetUnion",
)<SetUnion>(SetUnion)((input) =>
    ((input: SetUnion): string => {
        const $string = (typia.json.stringify as any).string;
        const $number = (typia.json.stringify as any).number;
        return `[${input.map((elem: any) => "{}").join(",")}]`;
    })(input),
);
