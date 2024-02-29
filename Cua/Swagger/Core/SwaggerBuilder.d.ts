import { SwaggerExportSchema, Path, ExternalDocs, SwaggerSecurity } from "../type";
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
    addApiInfo(title: string, description: string, version: string): this;
    addServers(urls: string[]): this;
    addTag(tags: []): this;
    addSecurity(securityOpts: Record<string, SwaggerSecurity>): this;
    addExternalDocs(externalDocs: ExternalDocs): this;
    private insertPath;
    insertApi(url: string, method: string, data: Path): void;
}
