import * as path from "path";
import { RigidTemplater } from "../core/rigid-templater";

export class IacScaffolder {
  constructor(
    private projectName: string,
    private outputDir: string,
    private templateDir: string
  ) {}

  public generateIsolationLayer(): void {
    console.log("[VPIDS_PHASE] Deploy: Generating Cloud-Native & Supply Chain Security boundaries...");
    
    const iacTemplateDir = path.join(this.templateDir, "iac");
    const iacOutputDir = path.join(this.outputDir, "infrastructure");

    RigidTemplater.renderAndWrite(
      path.join(iacTemplateDir, "rds-private.tf.hbs"),
      path.join(iacOutputDir, "rds-private.tf"),
      { projectName: this.projectName }
    );

    RigidTemplater.renderAndWrite(
      path.join(iacTemplateDir, "cloudflare-waf.tf.hbs"),
      path.join(iacOutputDir, "cloudflare-waf.tf"),
      { projectName: this.projectName }
    );
  }
}
