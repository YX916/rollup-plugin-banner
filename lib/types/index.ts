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
