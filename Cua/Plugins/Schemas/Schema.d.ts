export declare class Schema {
    data: any;
    optional(fields: string[]): this;
    required(fields: string[]): this;
    remove(fields: string[]): this;
    add(field: any): this;
    merge(schema: Schema): this;
}
