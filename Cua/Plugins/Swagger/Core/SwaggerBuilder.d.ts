import { SwaggerExportSchema, Path, ExternalDocs, SwaggerSecurity, Tags } from "../type";
export declare class SwaggerBuilder {
    private options;
    private pathFile;
    private securities?;
    get Options(): SwaggerExportSchema;
    get PathFile(): string;
    get Securities(): Record<string, SwaggerSecurity> | undefined;
    private static instance;
    static get Instance(): SwaggerBuilder;
    constructor();
    addPathFile(path: string): this;
    addTitle(title: string): this;
    addDescription(description: string): this;
    addVersion(version: string): this;
    addServers(urls: string[]): this;
    addTag(tags: Array<Tags | string>): this;
    addSecurity(securityOpts: Record<string, SwaggerSecurity>): this;
    addExternalDocs(externalDocs: ExternalDocs): this;
    private insertPath;
    insertApi(url: string, method: string, data: Path): void;
}
