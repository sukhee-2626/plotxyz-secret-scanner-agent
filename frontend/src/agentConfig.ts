export type FieldType = "text" | "textarea" | "number" | "checkbox";

export interface AgentField {
  name: string;
  label: string;
  type: FieldType;
  rows?: number;
  placeholder?: string;
}

export interface AgentConfig {
  slug: string;
  title: string;
  tagline: string;
  purpose: string;
  accent: string;
  features: string[];
  limitations: string[];
  fields: AgentField[];
  sample: Record<string, string | number | boolean>;
  repo: string;
}

export const agent: AgentConfig = {
  "slug": "plotxyz-secret-scanner-agent",
  "title": "Secret Scanner",
  "tagline": "Find credentials before they leak.",
  "purpose": "Scans supplied source code for hardcoded API keys, tokens, passwords, private keys, and database connection strings, with severity ratings.",
  "accent": "#fb7185",
  "features": [
    "Pattern-based secret detection",
    "Severity-ranked findings",
    "File and line context"
  ],
  "limitations": [
    "Heuristics can miss unusual formats or false positives.",
    "The agent does not scan remote repositories."
  ],
  "fields": [
    {
      "name": "code",
      "label": "Source code",
      "type": "textarea",
      "rows": 10,
      "placeholder": ""
    },
    {
      "name": "file",
      "label": "File name (for context)",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    }
  ],
  "sample": {
    "code": "import requests\nAPI_KEY = \"sk-1234567890abcdef1234567890abcdef\"\nDB_URL = \"postgres://admin:secret123@db.internal:5432/prod\"\n\ndef fetch():\n    return requests.get(\"https://api.example.com\", headers={\"Authorization\": f\"Bearer {API_KEY}\"})",
    "file": "src/config.py"
  },
  "repo": "https://github.com/sukhee-2626/plotxyz-secret-scanner-agent"
};
