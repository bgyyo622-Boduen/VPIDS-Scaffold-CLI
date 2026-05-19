import * as path from "path";
import { RigidTemplater } from "../core/rigid-templater";

export class BffScaffolder {
  constructor(
    private projectName: string,
    private outputDir: string,
    private templateDir: string
  ) {}

  public generateProtectedRoutes(): void {
    console.log("[VPIDS_PHASE] Prompting: Pre-allocating Middleware shells for BFF...");
    
    const bffTemplateDir = path.join(this.templateDir, "bff");
    const bffOutputDir = path.join(this.outputDir, "bff/src/middlewares");

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
