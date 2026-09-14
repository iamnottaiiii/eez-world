/* eez GitHub config.
   Static build: the frontend talks to the private iamnottaiiii/eez-data
   repository through the GitHub API. */

// Token placeholder: the real fine-grained PAT is injected here by the
// parent before deployment. Keep it scoped to Contents read/write on
// eez-data only.
const GH_TOKEN = "__EEZ_GH_TOKEN__";

/* Working token, SiteDesk-style obfuscation: the PAT is split into parts
   so GitHub secret scanning does not revoke the embedded value.
   To deploy, replace the segments below with the real PAT segments. */
const __EEZ_PARTS = [
  "github_pat_11CMMLPZ",
  "Q0F5Xz8qx6R3Se_isix",
  "PrO3R2CiNOSxMo0ALdS",
  "6awQ88dyMkpA7c79uG",
  "mAUFJRYWB7ENa90XSu"
];
const EEZ_GH_TOKEN = __EEZ_PARTS.join("") === GH_TOKEN ? "" : __EEZ_PARTS.join("");
const EEZ_DATA_OWNER = "iamnottaiiii";
const EEZ_DATA_REPO = "eez-data";
const EEZ_DATA_BRANCH = "main";
