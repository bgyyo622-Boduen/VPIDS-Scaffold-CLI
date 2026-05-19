import * as path from "path";
import { RigidTemplater } from "../core/rigid-templater";

export class BffScaffolder {
  // 嚴格檢視：所需依賴皆透過介面顯式宣告，確保模組的獨立性與可測試性
  constructor(
    private projectName: string,
    private outputDir: string,
    private templateDir: string
  ) {}

  public generateProtectedRoutes(): void {
    console.log("[VPIDS_PHASE] Prompting: Pre-allocating Middleware shells for BFF...");
    
    const bffTemplateDir = path.join(this.templateDir, "bff");
    const bffOutputDir = path.join(this.outputDir, "bff/src/middlewares");

    // 嚴格檢視：呼叫決定性渲染器，注入的 Context 為空物件 {}，因為底層外殼不容許動態竄改
    RigidTemplater.renderAndWrite(
      path.join(bffTemplateDir, "middleware.ts.hbs"),
      path.join(bffOutputDir, "auth-middleware.ts"),
      {}
    );

    RigidTemplater.renderAndWrite(
      path.join(bffTemplateDir, "idempotency.ts.hbs"),
      path.join(bffOutputDir, "idempotency-middleware.ts"),
      {}
    );
  }
}
