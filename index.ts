import * as data from "./lib/data.json";

export function getZipcodeFromAreaCode(areaCode: number): string | null {
    const info = (data as Record<string, { zipCode: string | null }>)[areaCode.toString()];
    return info && info.zipCode ? info.zipCode : null;
}

export function getDataFromAreaCode(areaCode: number): { city: string | null, state: string | null, zipCode: string | null, country: string | null } | null {
    const info = (data as Record<string, { city: string | null, state: string | null, zipCode: string | null, country: string | null }>)[areaCode.toString()];
    return info ?? null;
}
