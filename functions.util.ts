export const StrIncludes = (arg: string, inc: string) => {
    return arg.indexOf (inc) ? true : false;
}

export const StrIncludesEs6 = (arg: string, inc: string) => {
    return arg.includes(inc)? true : false;
}