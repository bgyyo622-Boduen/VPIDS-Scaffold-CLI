import * as fs from "fs";
import * as path from "path";
import * as handlebars from "handlebars";

export class RigidTemplater {
  /**
   * 決定性模板渲染器
   * 確保基礎設施代碼具備絕對的拓樸穩定性
   */
  public static renderAndWrite(templatePath: string, outputPath: string, context: Record<string, any>): void {
    if (!fs.existsSync(templatePath)) {
      throw new Error(`[VPIDS_FATAL] Template not found at explicit path: ${templatePath}`);
    }

    const source = fs.readFileSync(templatePath, "utf-8");
    const template = handlebars.compile(source, { noEscape: true });
    const result = template(context);
    
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, result, "utf-8");
  }
}
