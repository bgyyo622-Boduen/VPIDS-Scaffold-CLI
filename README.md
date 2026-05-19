# VPIDS Scaffold | Zero Trust Vibe Coding CLI

> An Architecture Enforcer for AI-Native Software Development Life Cycles.
> 專為 AI 原生軟體開發生命週期設計的架構強制器。

## Introduction / 專案簡介

[EN]
VPIDS-Scaffold is a Command Line Interface designed to initialize enterprise-grade projects under the VPIDS governance framework. It prevents "Security Blindness" and "Hallucinated Dependencies" by pre-generating an unalterable Zero Trust sandbox before the LLM writes a single line of business logic. 

[ZH]
VPIDS-Scaffold 是一個命令列工具，旨在依據 VPIDS 治理框架初始化企業級專案。透過在 LLM 撰寫任何業務邏輯前，預先生成不可竄改的零信任沙盒，徹底防堵「安全盲信」與「虛構依賴」等威脅。

## Mechanistic Interventions / 系統強制機制

[EN]
This CLI does not generate mere boilerplate; it establishes absolute topological boundaries:
1. **Network Isolation (IaC):** Forces PostgreSQL databases into Private Subnets using Terraform, removing external routing possibilities.
2. **Edge Protection (WAF):** Deploys Cloudflare Strict SSL and Rate Limiting configurations to prevent bot carding attacks.
3. **BFF Middleware Shells:** Injects mandatory Authentication and Idempotency Key wrappers into all API routes. The AI is constrained to operate strictly within these shells.
4. **Supply Chain Verification:** Generates automated SBOM (Software Bill of Materials) pipelines to intercept AI-hallucinated malicious packages.

[ZH]
本 CLI 生成的並非普通樣板，而是絕對的拓樸邊界：
1. **網路隔離 (IaC)：** 透過 Terraform 強制將 PostgreSQL 資料庫鎖定於私有網段，消除對外路由的可能。
2. **邊界防護 (WAF)：** 部署 Cloudflare 嚴格 SSL 與限流配置，阻擋機器人盜刷攻擊。
3. **BFF 中介軟體外殼：** 於所有 API 路由強制注入身分驗證與冪等性鍵（Idempotency Key）校驗。AI 僅能在此受限的外殼內運行。
4. **供應鏈驗證：** 生成自動化的 SBOM（軟體物料清單）管線，精準攔截 AI 虛構的惡意套件。

## Usage / 使用方式

[EN]
Execute the initialization command and pass the explicitly resolved paths. The system will deploy the extensional boundaries immediately.

[ZH]
執行初始化指令並傳入顯式解析的路徑。系統將立即部署外延化邊界。

```bash
# Initialize the Zero Trust Sandbox
npx vpids init <your-project-name>
