declare module 'papaparse' {
    export interface ParseError {
        type: string;
        code: string;
        message: string;
        row: number;
    }

    export interface ParseMeta {
        delimiter: string;
        linebreak: string;
        aborted: boolean;
        fields: string[];
        truncated: boolean;
    }

    export interface ParseResult<T> {
        data: T[];
        errors: ParseError[];
        meta: ParseMeta;
    }

    export interface ParseConfig<T> {
        delimiter?: string;
        newline?: string;
        quoteChar?: string;
        escapeChar?: string;
        header?: boolean;
        dynamicTyping?: boolean | { [key: string]: boolean };
        preview?: number;
        encoding?: string;
        worker?: boolean;
        comments?: boolean | string;
        step?: (results: ParseResult<T>, parser: any) => void;
        complete?: (results: ParseResult<T>, file?: File) => void;
        error?: (error: ParseError, file?: File) => void;
        download?: boolean;
        skipEmptyLines?: boolean | 'greedy';
        chunk?: (results: ParseResult<T>, parser: any) => void;
        fastMode?: boolean;
        beforeFirstChunk?: (chunk: string) => string | void;
        withCredentials?: boolean;
        transform?: (value: string, field: string | number) => any;
    }

    export function parse<T>(input: string | File, config?: ParseConfig<T>): ParseResult<T>;
}
