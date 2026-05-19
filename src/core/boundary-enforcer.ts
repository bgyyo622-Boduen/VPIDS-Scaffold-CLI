import * as fs from "fs";

export class BoundaryEnforcer {
  // 嚴格檢視：定義不可變更的系統級簽章 (Invariant Signature)
  private static readonly REQUIRED_SIGNATURE = "[VPIDS_GOVERNANCE_SHELL]";

  public static verifyIntegrity(targetFilePath: string): void {
    if (!fs.existsSync(targetFilePath)) {
      throw new Error(`[VPIDS_FATAL] Protected boundary file missing: ${targetFilePath}`);
    }

    const content = fs.readFileSync(targetFilePath, "utf-8");
    
    // 嚴格檢視：O(1) 的字串比對，拒絕任何模糊推論。若簽章消失，立即拋出致命錯誤阻斷提交。
    if (!content.includes(this.REQUIRED_SIGNATURE)) {
      throw new Error(
        `[VPIDS_VIOLATION] The governance shell in ${targetFilePath} has been compromised. ` +
        `LLMs are prohibited from modifying the mandatory architectural constraints.`
      );
    }

    console.log(`[VPIDS_VERIFIED] Boundary integrity preserved for: ${targetFilePath}`);
  }
}
