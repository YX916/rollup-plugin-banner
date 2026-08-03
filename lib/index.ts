import fs from "fs";
import { resolve } from "path";
import { OutputOptions, OutputBundle } from "rollup";

export interface BannerPluginOptions {
  /**
   * 输出文件头部插入 banner 注释文本
   * @example '/*! copyright 2026 *\\/'
   */
  header?: string;

  /**
   * 输出文件尾部插入 banner 注释文本
   * @example '/* End of file *\\/'
   */
  footer?: string;
}

export default function RollupBanner(options: BannerPluginOptions): any {
  const header: string | undefined = options.header;
  const footer: string | undefined = options.footer;
  const includeRegexp: RegExp = new RegExp(/\.(css|[mc]?js)$/i);
  const excludeRegexp: RegExp = new RegExp(/vendor/);
  return {
    name: "plugin-banner",
    async writeBundle(options: OutputOptions, bundle: OutputBundle) {
      if (typeof options.dir === undefined) {
        return;
      }
      const rootDir: string = options.dir || "";
      for (const module of Object.entries(bundle)) {
        const fileName: string = module[0];
        const filePath: string | undefined = resolve(rootDir, fileName);
        if (includeRegexp.test(fileName) && !excludeRegexp.test(fileName)) {
          try {
            let data = fs.readFileSync(filePath, {
              encoding: "utf8",
            });
            data = data.replace(/(\n|\r\n)$/, "");
            if (typeof header !== undefined) {
              data = `${header}\n${data}`;
            }
            if (typeof footer !== undefined) {
              data = `${data}\n${footer}`;
            }
            // Save
            fs.writeFileSync(filePath, data);
          } catch (e) {
            console.error(e);
          }
        }
      }
    },
  };
}
