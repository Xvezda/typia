import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagArray } from "../../../structures/TagArray";

export const test_misc_isPrune_TagArray = _test_misc_isPrune(
    "TagArray",
)<TagArray>(TagArray)((input: any): input is TagArray => {
    const is = (input: any): input is TagArray => {
        const $is_uuid = (typia.misc.createIsPrune as any).is_uuid;
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 === input.items.length &&
            input.items.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
                (elem: any) =>
                    "number" === typeof elem &&
                    Number.isFinite(elem) &&
                    3 <= elem,
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            7 >= input.both.length &&
            input.both.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            10 >= input.equal.length &&
            input.equal.every(
                (elem: any) =>
                    "number" === typeof elem &&
                    Number.isFinite(elem) &&
                    10 <= elem &&
                    10 >= elem,
            );
        return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: TagArray): void => {
        const $io1 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 === input.items.length &&
            input.items.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
                (elem: any) => "number" === typeof elem && 3 <= elem,
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            7 >= input.both.length &&
            input.both.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            10 >= input.equal.length &&
            input.equal.every(
                (elem: any) =>
                    "number" === typeof elem && 10 <= elem && 10 >= elem,
            );
        const $is_uuid = (typia.misc.createIsPrune as any).is_uuid;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po1(elem);
            });
        const $po0 = (input: any): any => {
            if (Array.isArray(input.value)) $pp0(input.value);
            for (const key of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "items" === key ||
                    "minItems" === key ||
                    "both" === key ||
                    "equal" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});