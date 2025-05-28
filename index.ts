import * as data from "./lib/data.json";

export function getZipcodeFromAreaCode(areaCode: number): string | null {
    const info = (data as Record<string, { zipCode: string | null }>)[areaCode.toString()];
    return info && info.zipCode ? info.zipCode : null;
}
