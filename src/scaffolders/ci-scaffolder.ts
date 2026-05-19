import * as path from "path";
import { RigidTemplater } from "../core/rigid-templater";

export class CiScaffolder {
  constructor(
    private projectName: string,
    private outputDir: string,
    private templateDir: string
  ) {}

  public generateSecurePipeline(): void {
    console.log("[VPIDS_PHASE] Deploy: Establishing Software Bill of Materials (SBOM) pipeline...");
    
    const ciTemplateDir = path.join(this.templateDir, "ci");
    const ciOutputDir = path.join(this.outputDir, ".github/workflows");

    RigidTemplater.renderAndWrite(
      path.join(ciTemplateDir, "sbom-pipeline.yml.hbs"),
      path.join(ciOutputDir, "vpids-security-gate.yml"),
      { projectName: this.projectName }
    );
  }
}
