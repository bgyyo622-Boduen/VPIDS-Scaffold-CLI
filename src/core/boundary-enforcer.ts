import * as fs from "fs";
import * as path from "path";

export class BoundaryEnforcer {
  private static readonly REQUIRED_SIGNATURE = "[VPIDS_GOVERNANCE_SHELL]";

  /**
   * 驗證中介軟體的外殼是否遭到 LLM 的破壞或繞過
   */
  public static verifyIntegrity(targetFilePath: string): void {
    if (!fs.existsSync(targetFilePath)) {
      throw new Error(`[VPIDS_FATAL] Protected boundary file missing: ${targetFilePath}`);
    }

    const content = fs.readFileSync(targetFilePath, "utf-8");
    if (!content.includes(this.REQUIRED_SIGNATURE)) {
      throw new Error(
        `[VPIDS_VIOLATION] The governance shell in ${targetFilePath} has been compromised. ` +
        `LLMs are prohibited from modifying the mandatory architectural constraints.`
      );
    }

    console.log(`[VPIDS_VERIFIED] Boundary integrity preserved for: ${targetFilePath}`);
  }
}
