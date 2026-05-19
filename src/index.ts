import { Command } from "commander";
import * as path from "path";
import { BffScaffolder } from "./scaffolders/bff-scaffolder";
import { IacScaffolder } from "./scaffolders/iac-scaffolder";

const program = new Command();

program
  .name("vpids")
  .description("VPIDS Framework: Zero Trust Architecture Enforcer for AI Vibe Coding")
  .version("1.0.0");

program
  .command("init <project-name>")
  .description("Initialize a Zero Trust sandbox for AI-assisted development")
  .action((projectName: string) => {
    console.log(`[VPIDS_GOVERNANCE] Initializing Zero Trust boundary for project: ${projectName}`);
    
    // 顯式解析環境變數與路徑，拒絕底層的隱性耦合
    const currentWorkingDir = process.cwd();
    const projectOutputDir = path.join(currentWorkingDir, projectName);
    const templateRootDir = path.join(__dirname, "../src/templates");

    // 依賴注入 (Dependency Injection)
    const iacScaffolder = new IacScaffolder(projectName, projectOutputDir, templateRootDir);
    iacScaffolder.generateIsolationLayer();

    const bffScaffolder = new BffScaffolder(projectName, projectOutputDir, templateRootDir);
    bffScaffolder.generateProtectedRoutes();

    console.log(`[VPIDS_SUCCESS] Extensional boundaries established. AI generation may now proceed within the sandbox.`);
  });

program.parse(process.argv);
