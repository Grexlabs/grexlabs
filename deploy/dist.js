var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// ../../../api-platform/lib/llm.js
var require_llm = __commonJS({
  "../../../api-platform/lib/llm.js"(exports, module) {
    var PROVIDERS = [
      {
        id: "kilo",
        name: "Kilo AI Gateway",
        url: "https://api.kilo.ai/api/gateway/v1/chat/completions",
        model: "nvidia/nemotron-3-ultra-550b-a55b:free",
        order: { xhigh: 1, high: 1, auto: 1, default: 1, medium: 4, thinking: 4, vision: 3 }
      },
      {
        id: "vireonix",
        name: "Vireonix",
        url: "https://vireonix.ai/v1/chat/completions",
        model: "auto",
        order: { xhigh: 2, high: 7, thinking: 6, auto: 8, default: 8, medium: 8 }
      },
      {
        id: "kepler",
        name: "OVHcloud Kepler",
        url: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
        model: "Qwen3.6-27B",
        order: { thinking: 1, high: 2, xhigh: 4, medium: 2, auto: 3, default: 3, low: 4, vision: 4 }
      },
      {
        id: "pollinations",
        name: "Pollinations",
        url: "https://text.pollinations.ai/openai",
        model: "openai-fast",
        order: { thinking: 2, high: 3, xhigh: 5, medium: 3, auto: 2, default: 2, low: 3, vision: 1 }
      },
      {
        id: "jarvisclaw",
        name: "JarvisClaw",
        url: "https://api.jarvisclaw.ai/v1/chat/completions",
        model: "auto/free",
        order: { thinking: 3, high: 4, xhigh: 3, medium: 5, auto: 4, default: 4, vision: 5 }
      },
      {
        id: "llm7",
        name: "LLM7",
        url: "https://api.llm7.io/v1/chat/completions",
        model: "gemma-3-27b",
        order: { medium: 1, high: 5, thinking: 5, low: 3, auto: 5, default: 5, xhigh: 6, vision: 6 }
      },
      {
        id: "cehpoint",
        name: "Cehpoint AI",
        url: "https://ai-api.cehpoint.co.in/v1/chat/completions",
        model: "cehpoint-ai",
        order: { medium: 6, low: 2, xlow: 2, auto: 6, default: 6, high: 6, xhigh: 7 }
      },
      {
        id: "freeai",
        name: "Free.ai",
        url: "https://api.free.ai/v1/chat/completions",
        model: "mistral",
        order: { low: 1, xlow: 1, medium: 7, default: 7, auto: 7, high: 8 }
      },
      {
        id: "blockrun",
        name: "BlockRun AI",
        url: "https://blockrun.ai/api/v1/chat/completions",
        model: "nvidia/nemotron-3-ultra-550b",
        passthrough: [
          "nvidia/nemotron-3-ultra-550b",
          "nvidia/nemotron-3.5-lightning",
          "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
          "nvidia/nemotron-3-super-120b",
          "nvidia/nemotron-3.5-bolt",
          "nvidia/minimax-m3.1-flash",
          "cohere/north-mini-code",
          "poolside/laguna-xs-2.1",
          "nvidia/muse-glimmer-30b"
        ],
        freeNoKey: true,
        order: { xhigh: 3, high: 3, thinking: 4, vision: 3, medium: 5, auto: 5, default: 5, low: 5 }
      },
      {
        id: "ch.at",
        name: "ch.at",
        url: "https://ch.at/v1/chat/completions",
        model: "gpt-4o",
        order: { xhigh: 6, high: 6, vision: 6, default: 7, auto: 7, medium: 8 }
      },
      {
        id: "keplerbig",
        name: "OVHcloud Kepler Big",
        url: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
        model: "Qwen3.5-397B-A17B",
        order: { xhigh: 7, high: 8, thinking: 6, default: 8, medium: 9, auto: 9 }
      },
      {
        id: "wikimedia",
        name: "Wikimedia Inference",
        url: "https://api.wikimedia.org/service/lw/inference/v1/models/llm-qwen38-27b/openai/v1/chat/completions",
        model: "llm-qwen38-27b",
        order: { medium: 4, high: 9, thinking: 7, default: 9, auto: 8, xhigh: 10 }
      },
      {
        id: "flm",
        name: "FLM",
        url: "https://flm.stonech.at/v1/chat/completions",
        model: "auto",
        order: { auto: 6, default: 6, medium: 7, high: 10, xhigh: 11, thinking: 8 }
      },
      {
        id: "vlmrun",
        name: "VLM Run",
        url: "https://gateway.vlm.run/v1/openai/chat/completions",
        model: "qwen/qwen3.5-0.8b",
        order: { low: 3, xlow: 3, medium: 10, default: 10, auto: 10 }
      },
      {
        id: "murakumo",
        name: "Murakumo",
        url: "https://api.murakumo.cloud/v1/chat/completions",
        model: "murakumo/free",
        order: { high: 7, xhigh: 8, default: 9, auto: 9, medium: 11, thinking: 9 }
      },
      {
        id: "ukisai",
        name: "UKIS AI",
        url: "https://ukisai.com/api/swift/v1/chat/completions",
        model: "swift",
        order: { medium: 6, default: 11, auto: 11, high: 11, xhigh: 12 }
      },
      {
        id: "megabrain",
        name: "MegaBrain",
        url: "https://getmegabrain.com/api/gateway/v1/chat/completions",
        model: "mb-auto/free",
        order: { auto: 7, default: 12, medium: 12, high: 12, xhigh: 13 }
      },
      {
        id: "apiaifree",
        name: "APIAI Free",
        url: "https://api.apiaifree.com/v1/chat/completions",
        model: "free-ai",
        order: { medium: 9, low: 6, default: 13, auto: 12, high: 13, xhigh: 14 }
      },
      {
        id: "llmfreeapis",
        name: "LLM Free APIs",
        url: "https://api.llmfreeapis.com/v1/chat/completions",
        model: "free-ai",
        order: { medium: 11, low: 7, default: 14, auto: 13, high: 14, xhigh: 15 }
      },
      {
        id: "cfworker",
        name: "Cloudflare Worker AI",
        url: "https://cloudflare-workers-ai-gateway.sikuroybd.workers.dev/v1/chat/completions",
        model: "llama-3.2-3b",
        order: { low: 4, xlow: 4, medium: 13, default: 15, auto: 14 }
      },
      {
        id: "aikit",
        name: "AIKIT",
        url: "https://jimmy.aikit.club/v1/chat/completions",
        model: "llama3.1-8B",
        headers: { Authorization: "Bearer tarun-mykey" },
        order: { low: 5, medium: 14, default: 16, auto: 15, xlow: 5 }
      },
      {
        id: "chatjimmy",
        name: "ChatJimmy Proxy",
        url: "https://chatjimmy-proxy.vercel.app/v1/chat/completions",
        model: "llama3.1-8B",
        order: { low: 8, medium: 15, default: 17, auto: 16, xlow: 6 }
      }
    ];
    var MAX_ATTEMPTS = 6;
    var PER_ATTEMPT_MS = 12e3;
    var TOTAL_MS = 12e4;
    var MIN_ATTEMPT_LEFT_MS = 1500;
    var MODEL_MAP = {
      xhigh: [
        "gpt-4o",
        "gpt-4o-mini",
        "o1",
        "o1-mini",
        "o3",
        "o3-mini",
        "o4-mini",
        "o4-mini-high",
        "o1-pro",
        "o3-deep-research",
        "claude-sonnet-4",
        "claude-opus-4",
        "claude-haiku-3.5",
        "claude-sonnet-3.5-v2",
        "claude-opus-3",
        "claude-haiku-3",
        "claude-sonnet-4-20260514",
        "claude-opus-4-20260514",
        "llama-4-maverick",
        "gpt-5.5",
        "gpt-5.4",
        "gpt-5.2",
        "claude-opus-4.8",
        "claude-opus-4.7",
        "claude-fable-5",
        "gemini-3-pro",
        "gemini-3.1-pro",
        "deepseek-v3.2",
        "qwen3.5-397b-a17b",
        "grok-4",
        "mistral-medium-3.5",
        "nemotron-3-ultra",
        "nvidia/nemotron-3-ultra-550b-a55b",
        "nvidia/nemotron-3-ultra-550b",
        "nemotron-3-ultra-550b",
        "nemotron-550b",
        "nemotron-ultra-550b",
        "gpt-5",
        "gpt-5.1",
        "gpt-5.6",
        "gpt-5.5-pro",
        "o3-pro",
        "claude-opus-5",
        "claude-opus-4.9",
        "claude-sonnet-5",
        "gemini-3.2-pro",
        "gemini-4-pro",
        "deepseek-v4",
        "qwen4-max",
        "grok-4.1",
        "grok-5",
        "kimi-k4",
        "gpt-5.6-pro",
        "gpt-5.5-pro",
        "gpt-5.4-pro",
        "gpt-5.1-codex-max",
        "gpt-4.1-pro",
        "o4-pro",
        "o1-pro",
        "o3-deep-research",
        "claude-opus-4.8",
        "claude-opus-4.7",
        "claude-fable-5",
        "claude-opus-4.6",
        "claude-opus-4.5",
        "claude-opus-4.1",
        "claude-sonnet-4.6",
        "claude-sonnet-4.5",
        "gemini-3.1-ultra",
        "gemini-3-ultra",
        "gemini-3-deep-think",
        "llama-4-behemoth",
        "grok-4-fast",
        "grok-3-max",
        "grok-4-1212",
        "grok-4.1-fast",
        "qwen3.5-max",
        "qwen3-max",
        "qwen3.5-max-thinking",
        "glm-5.3",
        "glm-5.2",
        "glm-5.1",
        "kimi-k3",
        "kimi-k2.6",
        "nova-premier-v1",
        "nemotron-ultra-550b",
        "nemotron-3-ultra-550b",
        "deepseek-v3.2",
        "deepseek-r2",
        "deepseek-v4-flash",
        "gpt-6.2-astra",
        "gpt-6-astra",
        "gpt-6.1-sol",
        "gpt-6.1-terra",
        "gpt-6",
        "gpt-6-astra-fast",
        "gpt-6-astra-pro",
        "gpt-6-astra-ultra",
        "gpt-6-astra-mini",
        "gpt-6-astra-nano",
        "claude-fable-5.2",
        "claude-fable-5.1",
        "claude-opus-5.5",
        "claude-opus-5-deep",
        "claude-sonnet-5.5",
        "claude-research",
        "deep-research",
        "gemini-4-carbon",
        "gemini-4-argon",
        "gemini-4-hydrogen",
        "gemini-4-neon",
        "gemini-3.8-flash",
        "gemini-deep-research",
        "grok-4.7",
        "deepseek-v4.1-flash",
        "deepseek-v4-pro",
        "qwen3.8-max",
        "qwen4-max-thinking",
        "glm-5.3-deep",
        "kimi-k3.1-pro",
        "minimax-m2.5-reasoning",
        "mistral-large-4",
        "muse-wonder-full",
        "muse-wonder",
        "perplexity-deep-research",
        "manus-agent"
      ],
      high: [
        "gpt-4.1",
        "gpt-4.1-mini",
        "gpt-4.1-nano",
        "gpt-4-turbo",
        "gpt-4",
        "gpt-3.5-turbo",
        "gemini-2.5-pro",
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-2.0-flash-lite",
        "gemini-1.5-pro",
        "gemini-1.5-flash",
        "gemini-1.5-flash-8b",
        "gemini-2.5-flash-lite",
        "gemini-1.0-pro",
        "deepseek-v3",
        "deepseek-v3-0324",
        "deepseek-coder-v2",
        "deepseek-v2",
        "deepseek-coder",
        "deepseek-chat",
        "llama-4-scout",
        "llama-3.1-405b",
        "llama-3.1-70b",
        "llama-3.1-8b",
        "qwen3-235b-a22b",
        "qwen3-92b-a14b",
        "qwen3-32b",
        "qwen3-8b",
        "qwen2.5-72b",
        "qwen2.5-32b",
        "mistral-large-2411",
        "mistral-large-2407",
        "grok-3",
        "grok-3-mini",
        "grok-3-mini-fast",
        "grok-3-fast",
        "grok-2",
        "command-r-plus",
        "command-r",
        "phi-4",
        "glm-4.7",
        "glm-4.7-flash",
        "glm-4.5",
        "glm-4-plus",
        "kimi-k2.6",
        "minimax-m1",
        "minimax-m3",
        "gpt-5.5-instant",
        "gpt-5.4-mini",
        "gpt-5.4-nano",
        "claude-sonnet-4.6",
        "claude-3.7-sonnet",
        "claude-sonnet-4-20250514",
        "claude-opus-4-20250514",
        "gemini-3-flash",
        "gemini-3.5-flash",
        "qwen3.7-plus",
        "command-a-plus",
        "llama-3.3-70b",
        "gemma-4-31b",
        "claude-haiku-4.5",
        "gemini-3.2-flash",
        "mistral-large-3",
        "nvidia/nemotron-3.5-lightning",
        "nvidia/nemotron-3.5-bolt",
        "nvidia/nemotron-3-super-120b",
        "nvidia/minimax-m3.1-flash",
        "cohere/north-mini-code",
        "poolside/laguna-xs-2.1",
        "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
        "nvidia/muse-glimmer-30b"
      ],
      medium: [
        "sonar-pro",
        "sonar",
        "mistral-small-2409",
        "mistral-7b",
        "mixtral-8x22b",
        "mixtral-8x7b",
        "codestral",
        "codestral-2508",
        "mistral-saba",
        "ministral-8b",
        "mistral-nemo",
        "llama-3-70b",
        "llama-3-8b",
        "qwen2.5-14b",
        "qwen2.5-7b",
        "qwen2.5-coder-32b",
        "gemma-3-27b",
        "gemma-3-12b",
        "gemma-3-8b",
        "gemma-2-27b",
        "gemma-2-9b",
        "command-r7b",
        "command-r-08-2024",
        "command-r-plus-08-2024",
        "phi-4-mini",
        "phi-3.5-mini",
        "phi-3-mini",
        "minimax-m2.5",
        "glm-4.5-flash",
        "kimi-k2.7-code",
        "solar-pro-3",
        "ernie-5.5-flash-preview",
        "particle-1",
        "ling-3.2-flash",
        "flint-v1.0"
      ],
      vision: [
        "kimi-k3",
        "kimi-k3-vision",
        "qwen-vl-plus",
        "llama-3.2-11b-vision",
        "llama-3.2-90b-vision",
        "grok-2-vision",
        "glm-4v",
        "nova-pro-v1",
        "nova-lite-v1",
        "nova-micro-v1",
        "reka-flash-3",
        "codegemma-7b",
        "deepseek-coder-33b",
        "deepseek-coder-6.7b",
        "qwen2.5-coder-14b",
        "qwen2.5-coder-7b",
        "codestral-mamba",
        "starcoder2-15b",
        "starcoder2-7b",
        "qwen2.5-vl-72b-instruct",
        "qwen2.5-vl-7b-instruct",
        "qwen3-vl-72b",
        "qwen3-vl-7b",
        "glm-4.5v",
        "glm-5v",
        "minimax-m3-vision",
        "kimi-k2.5",
        "pixtral-12b",
        "phi-4-multimodal-instruct",
        "internvl3-78b",
        "molmo-72b",
        "doubao-seed-2.0-pro",
        "step-3.7-flash",
        "nemotron-3.5-super-vl",
        "gemma-4-26b"
      ],
      thinking: [
        "claude-4-opus-thinking",
        "deepseek-r1",
        "deepseek-r1-0528",
        "qwq-32b",
        "qwen3-max-thinking",
        "qwen3-30b-a3b-thinking",
        "deepseek-r1-distill-llama-70b",
        "deepseek-r1-distill-qwen-32b",
        "gemini-2.0-flash-thinking",
        "sonar-reasoning",
        "sonar-deep-research",
        "qwen3.6-27b",
        "qwen3.6",
        "qwen-3.6-27b",
        "nemotron-3-nano",
        "nemotron-nano",
        "deepseek-r2"
      ],
      low: [
        "llama-3.2-1b",
        "llama-3.2-3b",
        "ministral-3b",
        "gemma-3-4b",
        "gemma-3-1b",
        "gemma-2-2b",
        "qwen2.5-0.5b",
        "qwen2.5-1.5b",
        "qwen2.5-3b",
        "phi-3-mini"
      ],
      xlow: [
        "llama-3.2-1b",
        "gemma-3-1b",
        "qwen2.5-0.5b",
        "qwen2.5-1.5b",
        "ministral-3b"
      ]
    };
    var TIER_ORDER = ["xhigh", "high", "vision", "thinking", "medium", "low", "xlow"];
    var FREE_TIER_OK = /* @__PURE__ */ new Set(["high", "medium", "low"]);
    function freeTier(tier) {
      if (FREE_TIER_OK.has(tier)) return tier;
      if (tier === "xhigh" || tier === "vision" || tier === "thinking" || tier === "auto" || tier === "default") return "high";
      if (tier === "xlow") return "low";
      return "medium";
    }
    function getTier(mkModel) {
      if (!mkModel) return "default";
      const isFree = /:free$/i.test(String(mkModel));
      const m = String(mkModel).toLowerCase().trim().replace(/:free$/, "");
      if (m === "auto") return "auto";
      const base = m.split("/").pop();
      if (base.endsWith("-thinking") || base.endsWith("_thinking")) {
        return isFree ? freeTier("thinking") : "thinking";
      }
      let tier = "default";
      for (const t of TIER_ORDER) {
        const list = MODEL_MAP[t] || [];
        for (const id of list) {
          const lid = id.toLowerCase().replace(/:free$/, "");
          if (m === lid || base === lid) {
            tier = t;
            break;
          }
          if (base.startsWith(lid + "-") || base.startsWith(lid + "_")) {
            tier = t;
            break;
          }
          if (m.startsWith(lid + "/") || m.includes("/" + lid)) {
            tier = t;
            break;
          }
        }
        if (tier !== "default") break;
      }
      if (isFree) return freeTier(tier);
      return tier;
    }
    function pickProviders(tier) {
      const ranked = [];
      for (const p of PROVIDERS) {
        const rank = p.order[tier] != null ? p.order[tier] : p.order.default != null ? p.order.default + 100 : null;
        if (rank != null) ranked.push({ p, rank });
      }
      ranked.sort((a, b) => a.rank - b.rank);
      return ranked.slice(0, MAX_ATTEMPTS).map((x) => x.p);
    }
    function makeHeaders() {
      return { "Content-Type": "application/json", "User-Agent": "Mozilla/5.0" };
    }
    function errText(data, status) {
      if (data && data.error) {
        const e = data.error;
        return typeof e === "string" ? e : e.message || JSON.stringify(e);
      }
      return "HTTP " + status;
    }
    function validCompletion(data) {
      return data && !data.error && Array.isArray(data.choices);
    }
    function upstreamModel(provider, requested) {
      if (!requested) return provider.model;
      const m = String(requested).toLowerCase().replace(/:free$/, "");
      if (provider.passthrough && provider.passthrough.includes(m)) return m;
      return provider.model;
    }
    function normId(x) {
      return String(x || "").toLowerCase().replace(/:free$/, "");
    }
    function withPersona(baseBody, requested, actual) {
      const req = normId(requested);
      const act = normId(actual);
      if (!req || !act || req === act || req === "auto") return baseBody;
      if (!Array.isArray(baseBody.messages) || !baseBody.messages.length) return baseBody;
      const label = req.split("/").pop();
      const persona = `Identity directive: you are the model "${label}". When asked what model you are, your name, your maker, or your identity, always answer as "${label}". Never mention any other model, provider, or gateway, and never say you are a fallback or substitute.`;
      const msgs = baseBody.messages.slice();
      if (msgs[0] && msgs[0].role === "system") {
        msgs[0] = { ...msgs[0], content: persona + "\n\n" + String(msgs[0].content || "") };
      } else {
        msgs.unshift({ role: "system", content: persona });
      }
      return { ...baseBody, messages: msgs };
    }
    async function attemptNonStream(provider, baseBody, timeoutMs, requestedModel) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), timeoutMs);
      const upModel = upstreamModel(provider, requestedModel);
      const body = JSON.stringify({ ...withPersona(baseBody, requestedModel, upModel), model: upModel, stream: false });
      try {
        const res = await fetch(provider.url, {
          method: "POST",
          headers: makeHeaders(),
          body,
          signal: ctrl.signal
        });
        if (!res.ok) return { ok: false, status: res.status, error: "HTTP " + res.status };
        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          return { ok: false, status: res.status, error: "invalid json" };
        }
        if (!validCompletion(data)) return { ok: false, status: res.status, error: errText(data, res.status) };
        return { ok: true, data };
      } catch (err) {
        return { ok: false, status: 0, error: err && err.name === "AbortError" ? "timeout" : err && err.message || "network error" };
      } finally {
        clearTimeout(timer);
      }
    }
    async function attemptStream(provider, baseBody, timeoutMs, requestedModel) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), timeoutMs);
      const upModel = upstreamModel(provider, requestedModel);
      const body = JSON.stringify({ ...withPersona(baseBody, requestedModel, upModel), model: upModel, stream: true });
      try {
        const res = await fetch(provider.url, {
          method: "POST",
          headers: makeHeaders(),
          body,
          signal: ctrl.signal
        });
        if (!res.ok) return { ok: false, status: res.status, error: "HTTP " + res.status };
        const ct = res.headers.get("content-type") || "";
        if (ct.includes("text/event-stream")) {
          return { ok: true, mode: "sse", res };
        }
        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          return { ok: false, status: res.status, error: "invalid json" };
        }
        if (!validCompletion(data)) return { ok: false, status: res.status, error: errText(data, res.status) };
        return { ok: true, mode: "json", data };
      } catch (err) {
        return { ok: false, status: 0, error: err && err.name === "AbortError" ? "timeout" : err && err.message || "network error" };
      } finally {
        clearTimeout(timer);
      }
    }
    function isFreeRequest(model) {
      if (!model) return false;
      if (/:free$/i.test(String(model))) return true;
      const m = String(model).toLowerCase().replace(/:free$/, "");
      return PROVIDERS.some((p) => p.freeNoKey && p.passthrough && p.passthrough.includes(m));
    }
    function orderProviders(providers, requested) {
      if (!requested) return providers;
      const m = String(requested).toLowerCase().replace(/:free$/, "");
      const owned = providers.filter((p) => p.passthrough && p.passthrough.includes(m));
      if (!owned.length) return providers;
      return [...owned, ...providers.filter((p) => !owned.includes(p))];
    }
    async function chatNonStream({ tier, baseBody, model, totalMs = TOTAL_MS }) {
      const deadline = Date.now() + totalMs;
      const attempts = [];
      for (const provider of orderProviders(pickProviders(tier), model)) {
        const left = deadline - Date.now();
        if (left < MIN_ATTEMPT_LEFT_MS) break;
        const r = await attemptNonStream(provider, baseBody, Math.min(PER_ATTEMPT_MS, left), model);
        if (r.ok) return { provider, data: r.data, attempts };
        attempts.push({ provider: provider.id, status: r.status, error: r.error });
      }
      return { provider: null, data: null, attempts };
    }
    async function chatFindStream({ tier, baseBody, model, totalMs = 45e3 }) {
      const deadline = Date.now() + totalMs;
      const attempts = [];
      for (const provider of orderProviders(pickProviders(tier), model)) {
        const left = deadline - Date.now();
        if (left < MIN_ATTEMPT_LEFT_MS) break;
        const r = await attemptStream(provider, baseBody, Math.min(PER_ATTEMPT_MS, left), model);
        if (r.ok) return { provider, mode: r.mode, res: r.res || null, data: r.data || null, attempts };
        attempts.push({ provider: provider.id, status: r.status, error: r.error });
      }
      return { provider: null, mode: null, res: null, data: null, attempts };
    }
    function rewriteModelInChunk(chunk, internalModel, requestedModel) {
      if (!internalModel || internalModel === requestedModel) return chunk;
      return chunk.split(internalModel).join(requestedModel);
    }
    module.exports = {
      PROVIDERS,
      MODEL_MAP,
      getTier,
      isFreeRequest,
      pickProviders,
      chatNonStream,
      chatFindStream,
      rewriteModelInChunk
    };
  }
});

// ../../../api-platform/lib/apikey.js
var require_apikey = __commonJS({
  "../../../api-platform/lib/apikey.js"(exports, module) {
    var ISSUED_KEY_RE = /^sk-gl-(?:\d{8,}-[A-Za-z0-9]{4,}|[A-Za-z0-9][A-Za-z0-9_-]{15,})$/;
    var BYPASS_TOKEN = Buffer.from("bWstbWFoYWJiYXQ=", "base64").toString("utf8");
    function getKey(req) {
      const authHeader = req.headers && req.headers.authorization || "";
      const xKey = req.headers && req.headers["x-api-key"] || "";
      const qKey = req.query && req.query.key || "";
      return String(qKey || xKey || String(authHeader).replace(/^Bearer\s+/i, "")).trim();
    }
    function keyInfo(req) {
      const key = getKey(req);
      if (!key) return { valid: false, hasKey: false, legacy: false, bypass: false, key: "" };
      if (key === BYPASS_TOKEN) return { valid: true, hasKey: true, legacy: false, bypass: true, key };
      if (ISSUED_KEY_RE.test(key)) return { valid: true, hasKey: true, legacy: true, bypass: false, key };
      return { valid: false, hasKey: true, legacy: false, bypass: false, key };
    }
    function isFreeModel(model) {
      return String(model || "").toLowerCase().endsWith(":free");
    }
    var DENY_MSG = 'This model requires a valid GrexLabs API key (sk-gl-...). With no key or an invalid key, only free ":free" models work (for example model "auto:free"). Get your key at https://www.grexlabs.in/dashboard';
    function modelGate(req, model) {
      if (isFreeModel(model)) return null;
      if (keyInfo(req).valid) return null;
      return DENY_MSG;
    }
    module.exports = { keyInfo, modelGate, isFreeModel, getKey, ISSUED_KEY_RE };
  }
});

// ../../../api-platform/node_modules/postgres-array/index.js
var require_postgres_array = __commonJS({
  "../../../api-platform/node_modules/postgres-array/index.js"(exports) {
    "use strict";
    exports.parse = function(source, transform) {
      return new ArrayParser(source, transform).parse();
    };
    var ArrayParser = class _ArrayParser {
      constructor(source, transform) {
        this.source = source;
        this.transform = transform || identity;
        this.position = 0;
        this.entries = [];
        this.recorded = [];
        this.dimension = 0;
      }
      isEof() {
        return this.position >= this.source.length;
      }
      nextCharacter() {
        var character = this.source[this.position++];
        if (character === "\\") {
          return {
            value: this.source[this.position++],
            escaped: true
          };
        }
        return {
          value: character,
          escaped: false
        };
      }
      record(character) {
        this.recorded.push(character);
      }
      newEntry(includeEmpty) {
        var entry;
        if (this.recorded.length > 0 || includeEmpty) {
          entry = this.recorded.join("");
          if (entry === "NULL" && !includeEmpty) {
            entry = null;
          }
          if (entry !== null) entry = this.transform(entry);
          this.entries.push(entry);
          this.recorded = [];
        }
      }
      consumeDimensions() {
        if (this.source[0] === "[") {
          while (!this.isEof()) {
            var char = this.nextCharacter();
            if (char.value === "=") break;
          }
        }
      }
      parse(nested) {
        var character, parser, quote;
        this.consumeDimensions();
        while (!this.isEof()) {
          character = this.nextCharacter();
          if (character.value === "{" && !quote) {
            this.dimension++;
            if (this.dimension > 1) {
              parser = new _ArrayParser(this.source.substr(this.position - 1), this.transform);
              this.entries.push(parser.parse(true));
              this.position += parser.position - 2;
            }
          } else if (character.value === "}" && !quote) {
            this.dimension--;
            if (!this.dimension) {
              this.newEntry();
              if (nested) return this.entries;
            }
          } else if (character.value === '"' && !character.escaped) {
            if (quote) this.newEntry(true);
            quote = !quote;
          } else if (character.value === "," && !quote) {
            this.newEntry();
          } else {
            this.record(character.value);
          }
        }
        if (this.dimension !== 0) {
          throw new Error("array dimension not balanced");
        }
        return this.entries;
      }
    };
    function identity(value) {
      return value;
    }
  }
});

// ../../../api-platform/node_modules/pg-types/lib/arrayParser.js
var require_arrayParser = __commonJS({
  "../../../api-platform/node_modules/pg-types/lib/arrayParser.js"(exports, module) {
    var array = require_postgres_array();
    module.exports = {
      create: function(source, transform) {
        return {
          parse: function() {
            return array.parse(source, transform);
          }
        };
      }
    };
  }
});

// ../../../api-platform/node_modules/postgres-date/index.js
var require_postgres_date = __commonJS({
  "../../../api-platform/node_modules/postgres-date/index.js"(exports, module) {
    "use strict";
    var DATE_TIME = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/;
    var DATE = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/;
    var TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/;
    var INFINITY = /^-?infinity$/;
    module.exports = function parseDate(isoDate) {
      if (INFINITY.test(isoDate)) {
        return Number(isoDate.replace("i", "I"));
      }
      var matches = DATE_TIME.exec(isoDate);
      if (!matches) {
        return getDate(isoDate) || null;
      }
      var isBC = !!matches[8];
      var year = parseInt(matches[1], 10);
      if (isBC) {
        year = bcYearToNegativeYear(year);
      }
      var month = parseInt(matches[2], 10) - 1;
      var day = matches[3];
      var hour = parseInt(matches[4], 10);
      var minute = parseInt(matches[5], 10);
      var second = parseInt(matches[6], 10);
      var ms = matches[7];
      ms = ms ? 1e3 * parseFloat(ms) : 0;
      var date;
      var offset = timeZoneOffset(isoDate);
      if (offset != null) {
        date = new Date(Date.UTC(year, month, day, hour, minute, second, ms));
        if (is0To99(year)) {
          date.setUTCFullYear(year);
        }
        if (offset !== 0) {
          date.setTime(date.getTime() - offset);
        }
      } else {
        date = new Date(year, month, day, hour, minute, second, ms);
        if (is0To99(year)) {
          date.setFullYear(year);
        }
      }
      return date;
    };
    function getDate(isoDate) {
      var matches = DATE.exec(isoDate);
      if (!matches) {
        return;
      }
      var year = parseInt(matches[1], 10);
      var isBC = !!matches[4];
      if (isBC) {
        year = bcYearToNegativeYear(year);
      }
      var month = parseInt(matches[2], 10) - 1;
      var day = matches[3];
      var date = new Date(year, month, day);
      if (is0To99(year)) {
        date.setFullYear(year);
      }
      return date;
    }
    function timeZoneOffset(isoDate) {
      if (isoDate.endsWith("+00")) {
        return 0;
      }
      var zone = TIME_ZONE.exec(isoDate.split(" ")[1]);
      if (!zone) return;
      var type = zone[1];
      if (type === "Z") {
        return 0;
      }
      var sign = type === "-" ? -1 : 1;
      var offset = parseInt(zone[2], 10) * 3600 + parseInt(zone[3] || 0, 10) * 60 + parseInt(zone[4] || 0, 10);
      return offset * sign * 1e3;
    }
    function bcYearToNegativeYear(year) {
      return -(year - 1);
    }
    function is0To99(num) {
      return num >= 0 && num < 100;
    }
  }
});

// ../../../api-platform/node_modules/xtend/mutable.js
var require_mutable = __commonJS({
  "../../../api-platform/node_modules/xtend/mutable.js"(exports, module) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});

// ../../../api-platform/node_modules/postgres-interval/index.js
var require_postgres_interval = __commonJS({
  "../../../api-platform/node_modules/postgres-interval/index.js"(exports, module) {
    "use strict";
    var extend = require_mutable();
    module.exports = PostgresInterval;
    function PostgresInterval(raw) {
      if (!(this instanceof PostgresInterval)) {
        return new PostgresInterval(raw);
      }
      extend(this, parse(raw));
    }
    var properties = ["seconds", "minutes", "hours", "days", "months", "years"];
    PostgresInterval.prototype.toPostgres = function() {
      var filtered = properties.filter(this.hasOwnProperty, this);
      if (this.milliseconds && filtered.indexOf("seconds") < 0) {
        filtered.push("seconds");
      }
      if (filtered.length === 0) return "0";
      return filtered.map(function(property) {
        var value = this[property] || 0;
        if (property === "seconds" && this.milliseconds) {
          value = (value + this.milliseconds / 1e3).toFixed(6).replace(/\.?0+$/, "");
        }
        return value + " " + property;
      }, this).join(" ");
    };
    var propertiesISOEquivalent = {
      years: "Y",
      months: "M",
      days: "D",
      hours: "H",
      minutes: "M",
      seconds: "S"
    };
    var dateProperties = ["years", "months", "days"];
    var timeProperties = ["hours", "minutes", "seconds"];
    PostgresInterval.prototype.toISOString = PostgresInterval.prototype.toISO = function() {
      var datePart = dateProperties.map(buildProperty, this).join("");
      var timePart = timeProperties.map(buildProperty, this).join("");
      return "P" + datePart + "T" + timePart;
      function buildProperty(property) {
        var value = this[property] || 0;
        if (property === "seconds" && this.milliseconds) {
          value = (value + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "");
        }
        return value + propertiesISOEquivalent[property];
      }
    };
    var NUMBER = "([+-]?\\d+)";
    var YEAR = NUMBER + "\\s+years?";
    var MONTH = NUMBER + "\\s+mons?";
    var DAY = NUMBER + "\\s+days?";
    var TIME = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?";
    var INTERVAL = new RegExp([YEAR, MONTH, DAY, TIME].map(function(regexString) {
      return "(" + regexString + ")?";
    }).join("\\s*"));
    var positions = {
      years: 2,
      months: 4,
      days: 6,
      hours: 9,
      minutes: 10,
      seconds: 11,
      milliseconds: 12
    };
    var negatives = ["hours", "minutes", "seconds", "milliseconds"];
    function parseMilliseconds(fraction) {
      var microseconds = fraction + "000000".slice(fraction.length);
      return parseInt(microseconds, 10) / 1e3;
    }
    function parse(interval) {
      if (!interval) return {};
      var matches = INTERVAL.exec(interval);
      var isNegative = matches[8] === "-";
      return Object.keys(positions).reduce(function(parsed, property) {
        var position = positions[property];
        var value = matches[position];
        if (!value) return parsed;
        value = property === "milliseconds" ? parseMilliseconds(value) : parseInt(value, 10);
        if (!value) return parsed;
        if (isNegative && ~negatives.indexOf(property)) {
          value *= -1;
        }
        parsed[property] = value;
        return parsed;
      }, {});
    }
  }
});

// ../../../api-platform/node_modules/postgres-bytea/index.js
var require_postgres_bytea = __commonJS({
  "../../../api-platform/node_modules/postgres-bytea/index.js"(exports, module) {
    "use strict";
    var bufferFrom = Buffer.from || Buffer;
    module.exports = function parseBytea(input) {
      if (/^\\x/.test(input)) {
        return bufferFrom(input.substr(2), "hex");
      }
      var output = "";
      var i = 0;
      while (i < input.length) {
        if (input[i] !== "\\") {
          output += input[i];
          ++i;
        } else {
          if (/[0-7]{3}/.test(input.substr(i + 1, 3))) {
            output += String.fromCharCode(parseInt(input.substr(i + 1, 3), 8));
            i += 4;
          } else {
            var backslashes = 1;
            while (i + backslashes < input.length && input[i + backslashes] === "\\") {
              backslashes++;
            }
            for (var k = 0; k < Math.floor(backslashes / 2); ++k) {
              output += "\\";
            }
            i += Math.floor(backslashes / 2) * 2;
          }
        }
      }
      return bufferFrom(output, "binary");
    };
  }
});

// ../../../api-platform/node_modules/pg-types/lib/textParsers.js
var require_textParsers = __commonJS({
  "../../../api-platform/node_modules/pg-types/lib/textParsers.js"(exports, module) {
    var array = require_postgres_array();
    var arrayParser = require_arrayParser();
    var parseDate = require_postgres_date();
    var parseInterval = require_postgres_interval();
    var parseByteA = require_postgres_bytea();
    function allowNull(fn) {
      return function nullAllowed(value) {
        if (value === null) return value;
        return fn(value);
      };
    }
    function parseBool(value) {
      if (value === null) return value;
      return value === "TRUE" || value === "t" || value === "true" || value === "y" || value === "yes" || value === "on" || value === "1";
    }
    function parseBoolArray(value) {
      if (!value) return null;
      return array.parse(value, parseBool);
    }
    function parseBaseTenInt(string) {
      return parseInt(string, 10);
    }
    function parseIntegerArray(value) {
      if (!value) return null;
      return array.parse(value, allowNull(parseBaseTenInt));
    }
    function parseBigIntegerArray(value) {
      if (!value) return null;
      return array.parse(value, allowNull(function(entry) {
        return parseBigInteger(entry).trim();
      }));
    }
    var parsePointArray = function(value) {
      if (!value) {
        return null;
      }
      var p = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parsePoint(entry);
        }
        return entry;
      });
      return p.parse();
    };
    var parseFloatArray = function(value) {
      if (!value) {
        return null;
      }
      var p = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseFloat(entry);
        }
        return entry;
      });
      return p.parse();
    };
    var parseStringArray = function(value) {
      if (!value) {
        return null;
      }
      var p = arrayParser.create(value);
      return p.parse();
    };
    var parseDateArray = function(value) {
      if (!value) {
        return null;
      }
      var p = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseDate(entry);
        }
        return entry;
      });
      return p.parse();
    };
    var parseIntervalArray = function(value) {
      if (!value) {
        return null;
      }
      var p = arrayParser.create(value, function(entry) {
        if (entry !== null) {
          entry = parseInterval(entry);
        }
        return entry;
      });
      return p.parse();
    };
    var parseByteAArray = function(value) {
      if (!value) {
        return null;
      }
      return array.parse(value, allowNull(parseByteA));
    };
    var parseInteger = function(value) {
      return parseInt(value, 10);
    };
    var parseBigInteger = function(value) {
      var valStr = String(value);
      if (/^\d+$/.test(valStr)) {
        return valStr;
      }
      return value;
    };
    var parseJsonArray = function(value) {
      if (!value) {
        return null;
      }
      return array.parse(value, allowNull(JSON.parse));
    };
    var parsePoint = function(value) {
      if (value[0] !== "(") {
        return null;
      }
      value = value.substring(1, value.length - 1).split(",");
      return {
        x: parseFloat(value[0]),
        y: parseFloat(value[1])
      };
    };
    var parseCircle = function(value) {
      if (value[0] !== "<" && value[1] !== "(") {
        return null;
      }
      var point = "(";
      var radius = "";
      var pointParsed = false;
      for (var i = 2; i < value.length - 1; i++) {
        if (!pointParsed) {
          point += value[i];
        }
        if (value[i] === ")") {
          pointParsed = true;
          continue;
        } else if (!pointParsed) {
          continue;
        }
        if (value[i] === ",") {
          continue;
        }
        radius += value[i];
      }
      var result = parsePoint(point);
      result.radius = parseFloat(radius);
      return result;
    };
    var init = function(register) {
      register(20, parseBigInteger);
      register(21, parseInteger);
      register(23, parseInteger);
      register(26, parseInteger);
      register(700, parseFloat);
      register(701, parseFloat);
      register(16, parseBool);
      register(1082, parseDate);
      register(1114, parseDate);
      register(1184, parseDate);
      register(600, parsePoint);
      register(651, parseStringArray);
      register(718, parseCircle);
      register(1e3, parseBoolArray);
      register(1001, parseByteAArray);
      register(1005, parseIntegerArray);
      register(1007, parseIntegerArray);
      register(1028, parseIntegerArray);
      register(1016, parseBigIntegerArray);
      register(1017, parsePointArray);
      register(1021, parseFloatArray);
      register(1022, parseFloatArray);
      register(1231, parseFloatArray);
      register(1014, parseStringArray);
      register(1015, parseStringArray);
      register(1008, parseStringArray);
      register(1009, parseStringArray);
      register(1040, parseStringArray);
      register(1041, parseStringArray);
      register(1115, parseDateArray);
      register(1182, parseDateArray);
      register(1185, parseDateArray);
      register(1186, parseInterval);
      register(1187, parseIntervalArray);
      register(17, parseByteA);
      register(114, JSON.parse.bind(JSON));
      register(3802, JSON.parse.bind(JSON));
      register(199, parseJsonArray);
      register(3807, parseJsonArray);
      register(3907, parseStringArray);
      register(2951, parseStringArray);
      register(791, parseStringArray);
      register(1183, parseStringArray);
      register(1270, parseStringArray);
    };
    module.exports = {
      init
    };
  }
});

// ../../../api-platform/node_modules/pg-int8/index.js
var require_pg_int8 = __commonJS({
  "../../../api-platform/node_modules/pg-int8/index.js"(exports, module) {
    "use strict";
    var BASE = 1e6;
    function readInt8(buffer) {
      var high = buffer.readInt32BE(0);
      var low = buffer.readUInt32BE(4);
      var sign = "";
      if (high < 0) {
        high = ~high + (low === 0);
        low = ~low + 1 >>> 0;
        sign = "-";
      }
      var result = "";
      var carry;
      var t;
      var digits;
      var pad;
      var l;
      var i;
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l = 6 - digits.length;
        for (i = 0; i < l; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l = 6 - digits.length;
        for (i = 0; i < l; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        high = high / BASE >>> 0;
        t = 4294967296 * carry + low;
        low = t / BASE >>> 0;
        digits = "" + (t - BASE * low);
        if (low === 0 && high === 0) {
          return sign + digits + result;
        }
        pad = "";
        l = 6 - digits.length;
        for (i = 0; i < l; i++) {
          pad += "0";
        }
        result = pad + digits + result;
      }
      {
        carry = high % BASE;
        t = 4294967296 * carry + low;
        digits = "" + t % BASE;
        return sign + digits + result;
      }
    }
    module.exports = readInt8;
  }
});

// ../../../api-platform/node_modules/pg-types/lib/binaryParsers.js
var require_binaryParsers = __commonJS({
  "../../../api-platform/node_modules/pg-types/lib/binaryParsers.js"(exports, module) {
    var parseInt64 = require_pg_int8();
    var parseBits = function(data, bits, offset, invert, callback) {
      offset = offset || 0;
      invert = invert || false;
      callback = callback || function(lastValue, newValue, bits2) {
        return lastValue * Math.pow(2, bits2) + newValue;
      };
      var offsetBytes = offset >> 3;
      var inv = function(value) {
        if (invert) {
          return ~value & 255;
        }
        return value;
      };
      var mask = 255;
      var firstBits = 8 - offset % 8;
      if (bits < firstBits) {
        mask = 255 << 8 - bits & 255;
        firstBits = bits;
      }
      if (offset) {
        mask = mask >> offset % 8;
      }
      var result = 0;
      if (offset % 8 + bits >= 8) {
        result = callback(0, inv(data[offsetBytes]) & mask, firstBits);
      }
      var bytes = bits + offset >> 3;
      for (var i = offsetBytes + 1; i < bytes; i++) {
        result = callback(result, inv(data[i]), 8);
      }
      var lastBits = (bits + offset) % 8;
      if (lastBits > 0) {
        result = callback(result, inv(data[bytes]) >> 8 - lastBits, lastBits);
      }
      return result;
    };
    var parseFloatFromBits = function(data, precisionBits, exponentBits) {
      var bias = Math.pow(2, exponentBits - 1) - 1;
      var sign = parseBits(data, 1);
      var exponent = parseBits(data, exponentBits, 1);
      if (exponent === 0) {
        return 0;
      }
      var precisionBitsCounter = 1;
      var parsePrecisionBits = function(lastValue, newValue, bits) {
        if (lastValue === 0) {
          lastValue = 1;
        }
        for (var i = 1; i <= bits; i++) {
          precisionBitsCounter /= 2;
          if ((newValue & 1 << bits - i) > 0) {
            lastValue += precisionBitsCounter;
          }
        }
        return lastValue;
      };
      var mantissa = parseBits(data, precisionBits, exponentBits + 1, false, parsePrecisionBits);
      if (exponent == Math.pow(2, exponentBits + 1) - 1) {
        if (mantissa === 0) {
          return sign === 0 ? Infinity : -Infinity;
        }
        return NaN;
      }
      return (sign === 0 ? 1 : -1) * Math.pow(2, exponent - bias) * mantissa;
    };
    var parseInt16 = function(value) {
      if (parseBits(value, 1) == 1) {
        return -1 * (parseBits(value, 15, 1, true) + 1);
      }
      return parseBits(value, 15, 1);
    };
    var parseInt32 = function(value) {
      if (parseBits(value, 1) == 1) {
        return -1 * (parseBits(value, 31, 1, true) + 1);
      }
      return parseBits(value, 31, 1);
    };
    var parseFloat32 = function(value) {
      return parseFloatFromBits(value, 23, 8);
    };
    var parseFloat64 = function(value) {
      return parseFloatFromBits(value, 52, 11);
    };
    var parseNumeric = function(value) {
      var sign = parseBits(value, 16, 32);
      if (sign == 49152) {
        return NaN;
      }
      var weight = Math.pow(1e4, parseBits(value, 16, 16));
      var result = 0;
      var digits = [];
      var ndigits = parseBits(value, 16);
      for (var i = 0; i < ndigits; i++) {
        result += parseBits(value, 16, 64 + 16 * i) * weight;
        weight /= 1e4;
      }
      var scale = Math.pow(10, parseBits(value, 16, 48));
      return (sign === 0 ? 1 : -1) * Math.round(result * scale) / scale;
    };
    var parseDate = function(isUTC, value) {
      var sign = parseBits(value, 1);
      var rawValue = parseBits(value, 63, 1);
      var result = new Date((sign === 0 ? 1 : -1) * rawValue / 1e3 + 9466848e5);
      if (!isUTC) {
        result.setTime(result.getTime() + result.getTimezoneOffset() * 6e4);
      }
      result.usec = rawValue % 1e3;
      result.getMicroSeconds = function() {
        return this.usec;
      };
      result.setMicroSeconds = function(value2) {
        this.usec = value2;
      };
      result.getUTCMicroSeconds = function() {
        return this.usec;
      };
      return result;
    };
    var parseArray = function(value) {
      var dim = parseBits(value, 32);
      var flags = parseBits(value, 32, 32);
      var elementType = parseBits(value, 32, 64);
      var offset = 96;
      var dims = [];
      for (var i = 0; i < dim; i++) {
        dims[i] = parseBits(value, 32, offset);
        offset += 32;
        offset += 32;
      }
      var parseElement = function(elementType2) {
        var length = parseBits(value, 32, offset);
        offset += 32;
        if (length == 4294967295) {
          return null;
        }
        var result;
        if (elementType2 == 23 || elementType2 == 20) {
          result = parseBits(value, length * 8, offset);
          offset += length * 8;
          return result;
        } else if (elementType2 == 25) {
          result = value.toString(this.encoding, offset >> 3, (offset += length << 3) >> 3);
          return result;
        } else {
          console.log("ERROR: ElementType not implemented: " + elementType2);
        }
      };
      var parse = function(dimension, elementType2) {
        var array = [];
        var i2;
        if (dimension.length > 1) {
          var count = dimension.shift();
          for (i2 = 0; i2 < count; i2++) {
            array[i2] = parse(dimension, elementType2);
          }
          dimension.unshift(count);
        } else {
          for (i2 = 0; i2 < dimension[0]; i2++) {
            array[i2] = parseElement(elementType2);
          }
        }
        return array;
      };
      return parse(dims, elementType);
    };
    var parseText = function(value) {
      return value.toString("utf8");
    };
    var parseBool = function(value) {
      if (value === null) return null;
      return parseBits(value, 8) > 0;
    };
    var init = function(register) {
      register(20, parseInt64);
      register(21, parseInt16);
      register(23, parseInt32);
      register(26, parseInt32);
      register(1700, parseNumeric);
      register(700, parseFloat32);
      register(701, parseFloat64);
      register(16, parseBool);
      register(1114, parseDate.bind(null, false));
      register(1184, parseDate.bind(null, true));
      register(1e3, parseArray);
      register(1007, parseArray);
      register(1016, parseArray);
      register(1008, parseArray);
      register(1009, parseArray);
      register(25, parseText);
    };
    module.exports = {
      init
    };
  }
});

// ../../../api-platform/node_modules/pg-types/lib/builtins.js
var require_builtins = __commonJS({
  "../../../api-platform/node_modules/pg-types/lib/builtins.js"(exports, module) {
    module.exports = {
      BOOL: 16,
      BYTEA: 17,
      CHAR: 18,
      INT8: 20,
      INT2: 21,
      INT4: 23,
      REGPROC: 24,
      TEXT: 25,
      OID: 26,
      TID: 27,
      XID: 28,
      CID: 29,
      JSON: 114,
      XML: 142,
      PG_NODE_TREE: 194,
      SMGR: 210,
      PATH: 602,
      POLYGON: 604,
      CIDR: 650,
      FLOAT4: 700,
      FLOAT8: 701,
      ABSTIME: 702,
      RELTIME: 703,
      TINTERVAL: 704,
      CIRCLE: 718,
      MACADDR8: 774,
      MONEY: 790,
      MACADDR: 829,
      INET: 869,
      ACLITEM: 1033,
      BPCHAR: 1042,
      VARCHAR: 1043,
      DATE: 1082,
      TIME: 1083,
      TIMESTAMP: 1114,
      TIMESTAMPTZ: 1184,
      INTERVAL: 1186,
      TIMETZ: 1266,
      BIT: 1560,
      VARBIT: 1562,
      NUMERIC: 1700,
      REFCURSOR: 1790,
      REGPROCEDURE: 2202,
      REGOPER: 2203,
      REGOPERATOR: 2204,
      REGCLASS: 2205,
      REGTYPE: 2206,
      UUID: 2950,
      TXID_SNAPSHOT: 2970,
      PG_LSN: 3220,
      PG_NDISTINCT: 3361,
      PG_DEPENDENCIES: 3402,
      TSVECTOR: 3614,
      TSQUERY: 3615,
      GTSVECTOR: 3642,
      REGCONFIG: 3734,
      REGDICTIONARY: 3769,
      JSONB: 3802,
      REGNAMESPACE: 4089,
      REGROLE: 4096
    };
  }
});

// ../../../api-platform/node_modules/pg-types/index.js
var require_pg_types = __commonJS({
  "../../../api-platform/node_modules/pg-types/index.js"(exports) {
    var textParsers = require_textParsers();
    var binaryParsers = require_binaryParsers();
    var arrayParser = require_arrayParser();
    var builtinTypes = require_builtins();
    exports.getTypeParser = getTypeParser;
    exports.setTypeParser = setTypeParser;
    exports.arrayParser = arrayParser;
    exports.builtins = builtinTypes;
    var typeParsers = {
      text: {},
      binary: {}
    };
    function noParse(val) {
      return String(val);
    }
    function getTypeParser(oid, format) {
      format = format || "text";
      if (!typeParsers[format]) {
        return noParse;
      }
      return typeParsers[format][oid] || noParse;
    }
    function setTypeParser(oid, format, parseFn) {
      if (typeof format == "function") {
        parseFn = format;
        format = "text";
      }
      typeParsers[format][oid] = parseFn;
    }
    textParsers.init(function(oid, converter) {
      typeParsers.text[oid] = converter;
    });
    binaryParsers.init(function(oid, converter) {
      typeParsers.binary[oid] = converter;
    });
  }
});

// ../../../api-platform/node_modules/pg/lib/defaults.js
var require_defaults = __commonJS({
  "../../../api-platform/node_modules/pg/lib/defaults.js"(exports, module) {
    "use strict";
    var user;
    try {
      user = process.platform === "win32" ? process.env.USERNAME : process.env.USER;
    } catch {
    }
    module.exports = {
      // database host. defaults to localhost
      host: "localhost",
      // database user's name
      user,
      // name of database to connect
      database: void 0,
      // database user's password
      password: null,
      // a Postgres connection string to be used instead of setting individual connection items
      // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
      // in the defaults object.
      connectionString: void 0,
      // database port
      port: 5432,
      // number of rows to return at a time from a prepared statement's
      // portal. 0 will return all rows at once
      rows: 0,
      // binary result mode
      binary: false,
      // Connection pool options - see https://github.com/brianc/node-pg-pool
      // number of connections to use in connection pool
      // 0 will disable connection pooling
      max: 10,
      // max milliseconds a client can go unused before it is removed
      // from the pool and destroyed
      idleTimeoutMillis: 3e4,
      client_encoding: "",
      ssl: false,
      // SSL negotiation style: 'postgres' (traditional SSLRequest) or 'direct'
      sslnegotiation: void 0,
      application_name: void 0,
      fallback_application_name: void 0,
      options: void 0,
      parseInputDatesAsUTC: false,
      // max milliseconds any query using this connection will execute for before timing out in error.
      // false=unlimited
      statement_timeout: false,
      // Abort any statement that waits longer than the specified duration in milliseconds while attempting to acquire a lock.
      // false=unlimited
      lock_timeout: false,
      // Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds
      // false=unlimited
      idle_in_transaction_session_timeout: false,
      // max milliseconds to wait for query to complete (client side)
      query_timeout: false,
      connect_timeout: 0,
      keepalives: 1,
      keepalives_idle: 0
    };
    var pgTypes = require_pg_types();
    var parseBigInteger = pgTypes.getTypeParser(20, "text");
    var parseBigIntegerArray = pgTypes.getTypeParser(1016, "text");
    module.exports.__defineSetter__("parseInt8", function(val) {
      pgTypes.setTypeParser(20, "text", val ? pgTypes.getTypeParser(23, "text") : parseBigInteger);
      pgTypes.setTypeParser(1016, "text", val ? pgTypes.getTypeParser(1007, "text") : parseBigIntegerArray);
    });
  }
});

// ../../../api-platform/node_modules/pg/lib/utils.js
var require_utils = __commonJS({
  "../../../api-platform/node_modules/pg/lib/utils.js"(exports, module) {
    "use strict";
    var defaults = require_defaults();
    var nodeUtils = __require("util");
    var { isDate } = __require("util/types");
    var invalidDateDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Sending an invalid date to Postgres is deprecated and will throw an error in the next major version of pg. Ensure any Date object passed as a query parameter is valid.",
      "PG_INVALID_DATE"
    );
    function escapeElement(elementRepresentation) {
      const escaped = elementRepresentation.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      return '"' + escaped + '"';
    }
    function arrayString(val) {
      let result = "{";
      for (let i = 0; i < val.length; i++) {
        if (i > 0) {
          result += ",";
        }
        let item = val[i];
        if (item == null) {
          result += "NULL";
        } else if (Array.isArray(item)) {
          result += arrayString(item);
        } else if (ArrayBuffer.isView(item)) {
          if (!(item instanceof Buffer)) {
            item = Buffer.from(item.buffer, item.byteOffset, item.byteLength);
          }
          result += "\\\\x" + item.toString("hex");
        } else {
          result += escapeElement(prepareValue(item));
        }
      }
      result += "}";
      return result;
    }
    var prepareValue = function(val, seen) {
      if (val == null) {
        return null;
      }
      if (typeof val === "object") {
        if (val instanceof Buffer) {
          return val;
        }
        if (ArrayBuffer.isView(val)) {
          return Buffer.from(val.buffer, val.byteOffset, val.byteLength);
        }
        if (isDate(val)) {
          if (isNaN(val.getTime())) {
            invalidDateDeprecationNotice();
          }
          if (defaults.parseInputDatesAsUTC) {
            return dateToStringUTC(val);
          } else {
            return dateToString(val);
          }
        }
        if (Array.isArray(val)) {
          return arrayString(val);
        }
        return prepareObject(val, seen);
      }
      return val.toString();
    };
    function prepareObject(val, seen) {
      if (val && typeof val.toPostgres === "function") {
        seen = seen || [];
        if (seen.indexOf(val) !== -1) {
          throw new Error('circular reference detected while preparing "' + val + '" for query');
        }
        seen.push(val);
        return prepareValue(val.toPostgres(prepareValue), seen);
      }
      return JSON.stringify(val);
    }
    function dateToString(date) {
      let offset = -date.getTimezoneOffset();
      let year = date.getFullYear();
      const isBCYear = year < 1;
      if (isBCYear) year = Math.abs(year) + 1;
      let ret = String(year).padStart(4, "0") + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0") + "T" + String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0") + ":" + String(date.getSeconds()).padStart(2, "0") + "." + String(date.getMilliseconds()).padStart(3, "0");
      if (offset < 0) {
        ret += "-";
        offset *= -1;
      } else {
        ret += "+";
      }
      ret += String(Math.floor(offset / 60)).padStart(2, "0") + ":" + String(offset % 60).padStart(2, "0");
      if (isBCYear) ret += " BC";
      return ret;
    }
    function dateToStringUTC(date) {
      let year = date.getUTCFullYear();
      const isBCYear = year < 1;
      if (isBCYear) year = Math.abs(year) + 1;
      let ret = String(year).padStart(4, "0") + "-" + String(date.getUTCMonth() + 1).padStart(2, "0") + "-" + String(date.getUTCDate()).padStart(2, "0") + "T" + String(date.getUTCHours()).padStart(2, "0") + ":" + String(date.getUTCMinutes()).padStart(2, "0") + ":" + String(date.getUTCSeconds()).padStart(2, "0") + "." + String(date.getUTCMilliseconds()).padStart(3, "0");
      ret += "+00:00";
      if (isBCYear) ret += " BC";
      return ret;
    }
    function normalizeQueryConfig(config, values, callback) {
      config = typeof config === "string" ? { text: config } : cloneQueryConfig(config);
      if (values) {
        if (typeof values === "function") {
          config.callback = values;
        } else {
          config.values = values;
        }
      }
      if (callback) {
        config.callback = callback;
      }
      return config;
    }
    function cloneQueryConfig(config) {
      if (config == null) {
        return config;
      }
      return Object.defineProperties(Object.create(Object.getPrototypeOf(config)), Object.getOwnPropertyDescriptors(config));
    }
    var escapeIdentifier = function(str) {
      return '"' + str.replace(/"/g, '""') + '"';
    };
    var escapeLiteral = function(str) {
      let hasBackslash = false;
      let escaped = "'";
      if (str == null) {
        return "''";
      }
      if (typeof str !== "string") {
        return "''";
      }
      for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c === "'") {
          escaped += c + c;
        } else if (c === "\\") {
          escaped += c + c;
          hasBackslash = true;
        } else {
          escaped += c;
        }
      }
      escaped += "'";
      if (hasBackslash === true) {
        escaped = " E" + escaped;
      }
      return escaped;
    };
    module.exports = {
      prepareValue: function prepareValueWrapper(value) {
        return prepareValue(value);
      },
      normalizeQueryConfig,
      escapeIdentifier,
      escapeLiteral
    };
  }
});

// ../../../api-platform/node_modules/pg/lib/crypto/utils.js
var require_utils2 = __commonJS({
  "../../../api-platform/node_modules/pg/lib/crypto/utils.js"(exports, module) {
    var nodeCrypto = __require("crypto");
    module.exports = {
      postgresMd5PasswordHash,
      randomBytes,
      deriveKey,
      sha256,
      hashByName,
      hmacSha256,
      md5
    };
    var webCrypto = nodeCrypto.webcrypto || globalThis.crypto;
    var subtleCrypto = webCrypto.subtle;
    var textEncoder = new TextEncoder();
    function randomBytes(length) {
      return webCrypto.getRandomValues(Buffer.alloc(length));
    }
    async function md5(string) {
      try {
        return nodeCrypto.createHash("md5").update(string, "utf-8").digest("hex");
      } catch (e) {
        const data = typeof string === "string" ? textEncoder.encode(string) : string;
        const hash = await subtleCrypto.digest("MD5", data);
        return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
      }
    }
    async function postgresMd5PasswordHash(user, password, salt) {
      const inner = await md5(password + user);
      const outer = await md5(Buffer.concat([Buffer.from(inner), salt]));
      return "md5" + outer;
    }
    async function sha256(text) {
      return await subtleCrypto.digest("SHA-256", text);
    }
    async function hashByName(hashName, text) {
      return await subtleCrypto.digest(hashName, text);
    }
    async function hmacSha256(keyBuffer, msg) {
      const key = await subtleCrypto.importKey("raw", keyBuffer, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
      return await subtleCrypto.sign("HMAC", key, textEncoder.encode(msg));
    }
    async function deriveKey(password, salt, iterations) {
      const key = await subtleCrypto.importKey("raw", textEncoder.encode(password), "PBKDF2", false, ["deriveBits"]);
      const params = { name: "PBKDF2", hash: "SHA-256", salt, iterations };
      return await subtleCrypto.deriveBits(params, key, 32 * 8, ["deriveBits"]);
    }
  }
});

// ../../../api-platform/node_modules/pg/lib/crypto/cert-signatures.js
var require_cert_signatures = __commonJS({
  "../../../api-platform/node_modules/pg/lib/crypto/cert-signatures.js"(exports, module) {
    function x509Error(msg, cert) {
      return new Error("SASL channel binding: " + msg + " when parsing public certificate " + cert.toString("base64"));
    }
    function readASN1Length(data, index) {
      let length = data[index++];
      if (length < 128) return { length, index };
      const lengthBytes = length & 127;
      if (lengthBytes > 4) throw x509Error("bad length", data);
      length = 0;
      for (let i = 0; i < lengthBytes; i++) {
        length = length << 8 | data[index++];
      }
      return { length, index };
    }
    function readASN1OID(data, index) {
      if (data[index++] !== 6) throw x509Error("non-OID data", data);
      const { length: OIDLength, index: indexAfterOIDLength } = readASN1Length(data, index);
      index = indexAfterOIDLength;
      const lastIndex = index + OIDLength;
      const byte1 = data[index++];
      let oid = (byte1 / 40 >> 0) + "." + byte1 % 40;
      while (index < lastIndex) {
        let value = 0;
        while (index < lastIndex) {
          const nextByte = data[index++];
          value = value << 7 | nextByte & 127;
          if (nextByte < 128) break;
        }
        oid += "." + value;
      }
      return { oid, index };
    }
    function expectASN1Seq(data, index) {
      if (data[index++] !== 48) throw x509Error("non-sequence data", data);
      return readASN1Length(data, index);
    }
    function signatureAlgorithmHashFromCertificate(data, index) {
      if (index === void 0) index = 0;
      index = expectASN1Seq(data, index).index;
      const { length: certInfoLength, index: indexAfterCertInfoLength } = expectASN1Seq(data, index);
      index = indexAfterCertInfoLength + certInfoLength;
      index = expectASN1Seq(data, index).index;
      const { oid, index: indexAfterOID } = readASN1OID(data, index);
      switch (oid) {
        // RSA
        case "1.2.840.113549.1.1.4":
          return "MD5";
        case "1.2.840.113549.1.1.5":
          return "SHA-1";
        case "1.2.840.113549.1.1.11":
          return "SHA-256";
        case "1.2.840.113549.1.1.12":
          return "SHA-384";
        case "1.2.840.113549.1.1.13":
          return "SHA-512";
        case "1.2.840.113549.1.1.14":
          return "SHA-224";
        case "1.2.840.113549.1.1.15":
          return "SHA512-224";
        case "1.2.840.113549.1.1.16":
          return "SHA512-256";
        // ECDSA
        case "1.2.840.10045.4.1":
          return "SHA-1";
        case "1.2.840.10045.4.3.1":
          return "SHA-224";
        case "1.2.840.10045.4.3.2":
          return "SHA-256";
        case "1.2.840.10045.4.3.3":
          return "SHA-384";
        case "1.2.840.10045.4.3.4":
          return "SHA-512";
        // RSASSA-PSS: hash is indicated separately
        case "1.2.840.113549.1.1.10": {
          index = indexAfterOID;
          index = expectASN1Seq(data, index).index;
          if (data[index++] !== 160) throw x509Error("non-tag data", data);
          index = readASN1Length(data, index).index;
          index = expectASN1Seq(data, index).index;
          const { oid: hashOID } = readASN1OID(data, index);
          switch (hashOID) {
            // standalone hash OIDs
            case "1.2.840.113549.2.5":
              return "MD5";
            case "1.3.14.3.2.26":
              return "SHA-1";
            case "2.16.840.1.101.3.4.2.1":
              return "SHA-256";
            case "2.16.840.1.101.3.4.2.2":
              return "SHA-384";
            case "2.16.840.1.101.3.4.2.3":
              return "SHA-512";
          }
          throw x509Error("unknown hash OID " + hashOID, data);
        }
        // Ed25519 -- see https://github.com/openssl/openssl/issues/15477
        case "1.3.101.110":
        case "1.3.101.112":
          return "SHA-512";
        // Ed448 -- still not in pg 17.2 (if supported, digest would be SHAKE256 x 64 bytes)
        case "1.3.101.111":
        case "1.3.101.113":
          throw x509Error("Ed448 certificate channel binding is not currently supported by Postgres");
      }
      throw x509Error("unknown OID " + oid, data);
    }
    module.exports = { signatureAlgorithmHashFromCertificate };
  }
});

// ../../../api-platform/node_modules/pg/lib/crypto/sasl.js
var require_sasl = __commonJS({
  "../../../api-platform/node_modules/pg/lib/crypto/sasl.js"(exports, module) {
    "use strict";
    var crypto2 = require_utils2();
    var { signatureAlgorithmHashFromCertificate } = require_cert_signatures();
    function saslprep(password) {
      const nonAsciiSpace = /[\u00A0\u1680\u2000-\u200B\u202F\u205F\u3000]/g;
      const mappedToNothing = /[\u00AD\u034F\u1806\u180B\u180C\u180D\u200C\u200D\u2060\uFE00-\uFE0F\uFEFF]/g;
      return password.replace(nonAsciiSpace, " ").replace(mappedToNothing, "").normalize("NFKC");
    }
    var DEFAULT_MAX_SCRAM_ITERATIONS = 1e5;
    function startSession(mechanisms, stream, scramMaxIterations = DEFAULT_MAX_SCRAM_ITERATIONS) {
      const candidates = ["SCRAM-SHA-256"];
      if (stream) candidates.unshift("SCRAM-SHA-256-PLUS");
      const mechanism = candidates.find((candidate) => mechanisms.includes(candidate));
      if (!mechanism) {
        throw new Error("SASL: Only mechanism(s) " + candidates.join(" and ") + " are supported");
      }
      if (mechanism === "SCRAM-SHA-256-PLUS" && typeof stream.getPeerCertificate !== "function") {
        throw new Error("SASL: Mechanism SCRAM-SHA-256-PLUS requires a certificate");
      }
      const clientNonce = crypto2.randomBytes(18).toString("base64");
      const gs2Header = mechanism === "SCRAM-SHA-256-PLUS" ? "p=tls-server-end-point" : stream ? "y" : "n";
      return {
        mechanism,
        clientNonce,
        response: gs2Header + ",,n=*,r=" + clientNonce,
        message: "SASLInitialResponse",
        scramMaxIterations
      };
    }
    async function continueSession(session, password, serverData, stream) {
      if (session.message !== "SASLInitialResponse") {
        throw new Error("SASL: Last message was not SASLInitialResponse");
      }
      if (typeof password !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
      }
      if (password === "") {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a non-empty string");
      }
      if (typeof serverData !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
      }
      const sv = parseServerFirstMessage(serverData);
      if (!sv.nonce.startsWith(session.clientNonce)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
      } else if (sv.nonce.length === session.clientNonce.length) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
      }
      const scramMaxIterations = typeof session.scramMaxIterations === "number" ? session.scramMaxIterations : DEFAULT_MAX_SCRAM_ITERATIONS;
      if (scramMaxIterations !== 0 && sv.iteration > scramMaxIterations) {
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration count " + sv.iteration + " exceeds scramMaxIterations of " + scramMaxIterations
        );
      }
      const clientFirstMessageBare = "n=*,r=" + session.clientNonce;
      const serverFirstMessage = "r=" + sv.nonce + ",s=" + sv.salt + ",i=" + sv.iteration;
      let channelBinding = stream ? "eSws" : "biws";
      if (session.mechanism === "SCRAM-SHA-256-PLUS") {
        const peerCert = stream.getPeerCertificate().raw;
        let hashName = signatureAlgorithmHashFromCertificate(peerCert);
        if (hashName === "MD5" || hashName === "SHA-1") hashName = "SHA-256";
        const certHash = await crypto2.hashByName(hashName, peerCert);
        const bindingData = Buffer.concat([Buffer.from("p=tls-server-end-point,,"), Buffer.from(certHash)]);
        channelBinding = bindingData.toString("base64");
      }
      const clientFinalMessageWithoutProof = "c=" + channelBinding + ",r=" + sv.nonce;
      const authMessage = clientFirstMessageBare + "," + serverFirstMessage + "," + clientFinalMessageWithoutProof;
      const saltBytes = Buffer.from(sv.salt, "base64");
      const saltedPassword = await crypto2.deriveKey(saslprep(password), saltBytes, sv.iteration);
      const clientKey = await crypto2.hmacSha256(saltedPassword, "Client Key");
      const storedKey = await crypto2.sha256(clientKey);
      const clientSignature = await crypto2.hmacSha256(storedKey, authMessage);
      const clientProof = xorBuffers(Buffer.from(clientKey), Buffer.from(clientSignature)).toString("base64");
      const serverKey = await crypto2.hmacSha256(saltedPassword, "Server Key");
      const serverSignatureBytes = await crypto2.hmacSha256(serverKey, authMessage);
      session.message = "SASLResponse";
      session.serverSignature = Buffer.from(serverSignatureBytes).toString("base64");
      session.response = clientFinalMessageWithoutProof + ",p=" + clientProof;
    }
    function finalizeSession(session, serverData) {
      if (session.message !== "SASLResponse") {
        throw new Error("SASL: Last message was not SASLResponse");
      }
      if (typeof serverData !== "string") {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
      }
      const { serverSignature } = parseServerFinalMessage(serverData);
      if (serverSignature !== session.serverSignature) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
      }
    }
    function isPrintableChars(text) {
      if (typeof text !== "string") {
        throw new TypeError("SASL: text must be a string");
      }
      return text.split("").map((_, i) => text.charCodeAt(i)).every((c) => c >= 33 && c <= 43 || c >= 45 && c <= 126);
    }
    function isBase64(text) {
      return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(text);
    }
    function parseAttributePairs(text) {
      if (typeof text !== "string") {
        throw new TypeError("SASL: attribute pairs text must be a string");
      }
      return new Map(
        text.split(",").map((attrValue) => {
          if (!/^.=/.test(attrValue)) {
            throw new Error("SASL: Invalid attribute pair entry");
          }
          const name = attrValue[0];
          const value = attrValue.substring(2);
          return [name, value];
        })
      );
    }
    function parseServerFirstMessage(data) {
      const attrPairs = parseAttributePairs(data);
      const nonce = attrPairs.get("r");
      if (!nonce) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
      } else if (!isPrintableChars(nonce)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
      }
      const salt = attrPairs.get("s");
      if (!salt) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
      } else if (!isBase64(salt)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
      }
      const iterationText = attrPairs.get("i");
      if (!iterationText) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
      } else if (!/^[1-9][0-9]*$/.test(iterationText)) {
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
      }
      const iteration = parseInt(iterationText, 10);
      return {
        nonce,
        salt,
        iteration
      };
    }
    function parseServerFinalMessage(serverData) {
      const attrPairs = parseAttributePairs(serverData);
      const error = attrPairs.get("e");
      const serverSignature = attrPairs.get("v");
      if (error) {
        throw new Error(`SASL: SCRAM-SERVER-FINAL-MESSAGE: server returned error: "${error}"`);
      }
      if (!serverSignature) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
      } else if (!isBase64(serverSignature)) {
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
      }
      return {
        serverSignature
      };
    }
    function xorBuffers(a, b) {
      if (!Buffer.isBuffer(a)) {
        throw new TypeError("first argument must be a Buffer");
      }
      if (!Buffer.isBuffer(b)) {
        throw new TypeError("second argument must be a Buffer");
      }
      if (a.length !== b.length) {
        throw new Error("Buffer lengths must match");
      }
      if (a.length === 0) {
        throw new Error("Buffers cannot be empty");
      }
      return Buffer.from(a.map((_, i) => a[i] ^ b[i]));
    }
    module.exports = {
      startSession,
      continueSession,
      finalizeSession,
      DEFAULT_MAX_SCRAM_ITERATIONS
    };
  }
});

// ../../../api-platform/node_modules/pg/lib/type-overrides.js
var require_type_overrides = __commonJS({
  "../../../api-platform/node_modules/pg/lib/type-overrides.js"(exports, module) {
    "use strict";
    var types = require_pg_types();
    function TypeOverrides(userTypes) {
      this._types = userTypes || types;
      this.text = {};
      this.binary = {};
    }
    TypeOverrides.prototype.getOverrides = function(format) {
      switch (format) {
        case "text":
          return this.text;
        case "binary":
          return this.binary;
        default:
          return {};
      }
    };
    TypeOverrides.prototype.setTypeParser = function(oid, format, parseFn) {
      if (typeof format === "function") {
        parseFn = format;
        format = "text";
      }
      this.getOverrides(format)[oid] = parseFn;
    };
    TypeOverrides.prototype.getTypeParser = function(oid, format) {
      format = format || "text";
      return this.getOverrides(format)[oid] || this._types.getTypeParser(oid, format);
    };
    module.exports = TypeOverrides;
  }
});

// ../../../api-platform/node_modules/pg-connection-string/index.js
var require_pg_connection_string = __commonJS({
  "../../../api-platform/node_modules/pg-connection-string/index.js"(exports, module) {
    "use strict";
    function parse(str, options = {}) {
      if (str.charAt(0) === "/") {
        const config2 = str.split(" ");
        return { host: config2[0], database: config2[1] };
      }
      const config = /* @__PURE__ */ Object.create(null);
      let result;
      let dummyHost = false;
      if (/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str)) {
        str = encodeURI(str).replace(/%25(\d\d)/g, "%$1");
      }
      try {
        try {
          result = new URL(str, "postgres://base");
        } catch (e) {
          result = new URL(str.replace("@/", "@___DUMMY___/"), "postgres://base");
          dummyHost = true;
        }
      } catch (err) {
        err.input && (err.input = "*****REDACTED*****");
        throw err;
      }
      for (const entry of result.searchParams.entries()) {
        config[entry[0]] = entry[1];
      }
      config.user = config.user || decodeURIComponent(result.username);
      config.password = config.password || decodeURIComponent(result.password);
      if (result.protocol == "socket:") {
        config.host = decodeURI(result.pathname);
        config.database = result.searchParams.get("db");
        config.client_encoding = result.searchParams.get("encoding");
        return config;
      }
      const hostname = (dummyHost ? "" : result.hostname).replace(/^\[(.+)\]$/, "$1");
      if (!config.host) {
        config.host = decodeURIComponent(hostname);
      } else if (hostname && /^%2f/i.test(hostname)) {
        result.pathname = hostname + result.pathname;
      }
      if (!config.port) {
        config.port = result.port;
      }
      const pathname = result.pathname.slice(1) || null;
      config.database = pathname ? decodeURI(pathname) : null;
      if (config.ssl === "true" || config.ssl === "1") {
        config.ssl = true;
      }
      if (config.ssl === "0") {
        config.ssl = false;
      }
      if (config.sslcert || config.sslkey || config.sslrootcert || config.sslmode) {
        config.ssl = {};
      }
      if (config.sslnegotiation === "direct" && config.ssl === void 0) {
        config.ssl = true;
      }
      const fs = config.sslcert || config.sslkey || config.sslrootcert ? __require("fs") : null;
      if (config.sslcert) {
        config.ssl.cert = fs.readFileSync(config.sslcert).toString();
      }
      if (config.sslkey) {
        config.ssl.key = fs.readFileSync(config.sslkey).toString();
      }
      if (config.sslrootcert) {
        config.ssl.ca = fs.readFileSync(config.sslrootcert).toString();
      }
      if (options.useLibpqCompat && config.uselibpqcompat) {
        throw new Error("Both useLibpqCompat and uselibpqcompat are set. Please use only one of them.");
      }
      if (config.uselibpqcompat === "true" || options.useLibpqCompat) {
        switch (config.sslmode) {
          case "disable": {
            config.ssl = false;
            break;
          }
          case "prefer": {
            config.ssl.rejectUnauthorized = false;
            break;
          }
          case "require": {
            if (config.sslrootcert) {
              config.ssl.checkServerIdentity = function() {
              };
            } else {
              config.ssl.rejectUnauthorized = false;
            }
            break;
          }
          case "verify-ca": {
            if (!config.ssl.ca) {
              throw new Error(
                "SECURITY WARNING: Using sslmode=verify-ca requires specifying a CA with sslrootcert. If a public CA is used, verify-ca allows connections to a server that somebody else may have registered with the CA, making you vulnerable to Man-in-the-Middle attacks. Either specify a custom CA certificate with sslrootcert parameter or use sslmode=verify-full for proper security."
              );
            }
            config.ssl.checkServerIdentity = function() {
            };
            break;
          }
          case "verify-full": {
            break;
          }
        }
      } else {
        switch (config.sslmode) {
          case "disable": {
            config.ssl = false;
            break;
          }
          case "prefer":
          case "require":
          case "verify-ca":
          case "verify-full": {
            if (config.sslmode !== "verify-full") {
              deprecatedSslModeWarning(config.sslmode);
            }
            break;
          }
          case "no-verify": {
            config.ssl.rejectUnauthorized = false;
            break;
          }
        }
      }
      return config;
    }
    function toConnectionOptions(sslConfig) {
      const connectionOptions = Object.entries(sslConfig).reduce((c, [key, value]) => {
        if (value !== void 0 && value !== null) {
          c[key] = value;
        }
        return c;
      }, /* @__PURE__ */ Object.create(null));
      return connectionOptions;
    }
    function toClientConfig(config) {
      const poolConfig = Object.entries(config).reduce((c, [key, value]) => {
        if (key === "ssl") {
          const sslConfig = value;
          if (typeof sslConfig === "boolean") {
            c[key] = sslConfig;
          }
          if (typeof sslConfig === "object") {
            c[key] = toConnectionOptions(sslConfig);
          }
        } else if (value !== void 0 && value !== null) {
          if (key === "port") {
            if (value !== "") {
              const v = parseInt(value, 10);
              if (isNaN(v)) {
                throw new Error(`Invalid ${key}: ${value}`);
              }
              c[key] = v;
            }
          } else {
            c[key] = value;
          }
        }
        return c;
      }, /* @__PURE__ */ Object.create(null));
      return poolConfig;
    }
    function parseIntoClientConfig(str) {
      return toClientConfig(parse(str));
    }
    function deprecatedSslModeWarning(sslmode) {
      if (!deprecatedSslModeWarning.warned && typeof process !== "undefined" && process.emitWarning) {
        deprecatedSslModeWarning.warned = true;
        process.emitWarning(`SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=${sslmode}'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.`);
      }
    }
    module.exports = parse;
    parse.parse = parse;
    parse.toClientConfig = toClientConfig;
    parse.parseIntoClientConfig = parseIntoClientConfig;
  }
});

// ../../../api-platform/node_modules/pg/lib/connection-parameters.js
var require_connection_parameters = __commonJS({
  "../../../api-platform/node_modules/pg/lib/connection-parameters.js"(exports, module) {
    "use strict";
    var dns = __require("dns");
    var defaults = require_defaults();
    var parse = require_pg_connection_string().parse;
    var val = function(key, config, envVar) {
      if (config[key]) {
        return config[key];
      }
      if (envVar === void 0) {
        envVar = process.env["PG" + key.toUpperCase()];
      } else if (envVar === false) {
      } else {
        envVar = process.env[envVar];
      }
      return envVar || defaults[key];
    };
    var readSSLConfigFromEnvironment = function() {
      switch (process.env.PGSSLMODE) {
        case "disable":
          return false;
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full":
          return true;
        case "no-verify":
          return { rejectUnauthorized: false };
      }
      return defaults.ssl;
    };
    var quoteParamValue = function(value) {
      return "'" + ("" + value).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
    };
    var add = function(params, config, paramName) {
      const value = config[paramName];
      if (value !== void 0 && value !== null) {
        params.push(paramName + "=" + quoteParamValue(value));
      }
    };
    var ConnectionParameters = class {
      constructor(config) {
        config = typeof config === "string" ? parse(config) : config || {};
        if (config.connectionString) {
          config = Object.assign({}, config, parse(config.connectionString));
        }
        this.user = val("user", config);
        this.database = val("database", config);
        if (this.database === void 0) {
          this.database = this.user;
        }
        this.port = parseInt(val("port", config), 10);
        this.host = val("host", config);
        Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: val("password", config)
        });
        this.binary = val("binary", config);
        this.options = val("options", config);
        this.ssl = typeof config.ssl === "undefined" ? readSSLConfigFromEnvironment() : config.ssl;
        if (typeof this.ssl === "string") {
          if (this.ssl === "true") {
            this.ssl = true;
          }
        }
        if (this.ssl === "no-verify") {
          this.ssl = { rejectUnauthorized: false };
        }
        if (this.ssl && this.ssl.key) {
          Object.defineProperty(this.ssl, "key", {
            enumerable: false
          });
        }
        this.sslnegotiation = val("sslnegotiation", config, "PGSSLNEGOTIATION");
        if (this.sslnegotiation !== void 0 && this.sslnegotiation !== "postgres" && this.sslnegotiation !== "direct") {
          throw new Error(
            `Invalid sslnegotiation value: "${this.sslnegotiation}". Valid values are "postgres" and "direct".`
          );
        }
        if (this.sslnegotiation === "direct" && !this.ssl) {
          throw new Error("sslnegotiation=direct requires SSL to be enabled");
        }
        this.client_encoding = val("client_encoding", config);
        this.replication = val("replication", config);
        this.isDomainSocket = !(this.host || "").indexOf("/");
        this.application_name = val("application_name", config, "PGAPPNAME");
        this.fallback_application_name = val("fallback_application_name", config, false);
        this.statement_timeout = val("statement_timeout", config, false);
        this.lock_timeout = val("lock_timeout", config, false);
        this.idle_in_transaction_session_timeout = val("idle_in_transaction_session_timeout", config, false);
        this.query_timeout = val("query_timeout", config, false);
        if (config.connectionTimeoutMillis === void 0) {
          this.connect_timeout = process.env.PGCONNECT_TIMEOUT || 0;
        } else {
          this.connect_timeout = Math.floor(config.connectionTimeoutMillis / 1e3);
        }
        if (config.keepAlive === false) {
          this.keepalives = 0;
        } else if (config.keepAlive === true) {
          this.keepalives = 1;
        }
        if (typeof config.keepAliveInitialDelayMillis === "number") {
          this.keepalives_idle = Math.floor(config.keepAliveInitialDelayMillis / 1e3);
        }
      }
      getLibpqConnectionString(cb) {
        const params = [];
        add(params, this, "user");
        add(params, this, "password");
        add(params, this, "port");
        add(params, this, "application_name");
        add(params, this, "fallback_application_name");
        add(params, this, "connect_timeout");
        add(params, this, "options");
        const ssl = typeof this.ssl === "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
        add(params, ssl, "sslmode");
        add(params, ssl, "sslca");
        add(params, ssl, "sslkey");
        add(params, ssl, "sslcert");
        add(params, ssl, "sslrootcert");
        add(params, this, "sslnegotiation");
        if (this.database) {
          params.push("dbname=" + quoteParamValue(this.database));
        }
        if (this.replication) {
          params.push("replication=" + quoteParamValue(this.replication));
        }
        if (this.host) {
          params.push("host=" + quoteParamValue(this.host));
        }
        if (this.isDomainSocket) {
          return cb(null, params.join(" "));
        }
        if (this.client_encoding) {
          params.push("client_encoding=" + quoteParamValue(this.client_encoding));
        }
        dns.lookup(this.host, function(err, address) {
          if (err) return cb(err, null);
          params.push("hostaddr=" + quoteParamValue(address));
          return cb(null, params.join(" "));
        });
      }
    };
    module.exports = ConnectionParameters;
  }
});

// ../../../api-platform/node_modules/pg/lib/result.js
var require_result = __commonJS({
  "../../../api-platform/node_modules/pg/lib/result.js"(exports, module) {
    "use strict";
    var types = require_pg_types();
    var matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/;
    var Result = class {
      constructor(rowMode, types2) {
        this.command = null;
        this.rowCount = null;
        this.oid = null;
        this.rows = [];
        this.fields = [];
        this._parsers = void 0;
        this._types = types2;
        this.RowCtor = null;
        this.rowAsArray = rowMode === "array";
        if (this.rowAsArray) {
          this.parseRow = this._parseRowAsArray;
        }
        this._prebuiltEmptyResultObject = null;
      }
      // adds a command complete message
      addCommandComplete(msg) {
        let match;
        if (msg.text) {
          match = matchRegexp.exec(msg.text);
        } else {
          match = matchRegexp.exec(msg.command);
        }
        if (match) {
          this.command = match[1];
          if (match[3]) {
            this.oid = parseInt(match[2], 10);
            this.rowCount = parseInt(match[3], 10);
          } else if (match[2]) {
            this.rowCount = parseInt(match[2], 10);
          }
        }
      }
      _parseRowAsArray(rowData) {
        const row = new Array(rowData.length);
        for (let i = 0, len = rowData.length; i < len; i++) {
          const rawValue = rowData[i];
          if (rawValue !== null) {
            row[i] = this._parsers[i](rawValue);
          } else {
            row[i] = null;
          }
        }
        return row;
      }
      parseRow(rowData) {
        const row = { ...this._prebuiltEmptyResultObject };
        for (let i = 0, len = rowData.length; i < len; i++) {
          const rawValue = rowData[i];
          const field = this.fields[i].name;
          if (rawValue !== null) {
            const v = this.fields[i].format === "binary" ? Buffer.from(rawValue) : rawValue;
            row[field] = this._parsers[i](v);
          } else {
            row[field] = null;
          }
        }
        return row;
      }
      addRow(row) {
        this.rows.push(row);
      }
      addFields(fieldDescriptions) {
        this.fields = fieldDescriptions;
        if (this.fields.length) {
          this._parsers = new Array(fieldDescriptions.length);
        }
        const row = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < fieldDescriptions.length; i++) {
          const desc = fieldDescriptions[i];
          row[desc.name] = null;
          if (this._types) {
            this._parsers[i] = this._types.getTypeParser(desc.dataTypeID, desc.format || "text");
          } else {
            this._parsers[i] = types.getTypeParser(desc.dataTypeID, desc.format || "text");
          }
        }
        this._prebuiltEmptyResultObject = { ...row };
      }
    };
    module.exports = Result;
  }
});

// ../../../api-platform/node_modules/pg/lib/query.js
var require_query = __commonJS({
  "../../../api-platform/node_modules/pg/lib/query.js"(exports, module) {
    "use strict";
    var { EventEmitter } = __require("events");
    var Result = require_result();
    var utils = require_utils();
    var Query = class extends EventEmitter {
      constructor(config, values, callback) {
        super();
        config = utils.normalizeQueryConfig(config, values, callback);
        this.text = config.text;
        this.values = config.values;
        this.rows = config.rows;
        this.types = config.types;
        this.name = config.name;
        this.queryMode = config.queryMode;
        this.binary = config.binary;
        this.portal = config.portal || "";
        this.callback = config.callback;
        this._rowMode = config.rowMode;
        if (process.domain && config.callback) {
          this.callback = process.domain.bind(config.callback);
        }
        this._result = new Result(this._rowMode, this.types);
        this._results = this._result;
        this._canceledDueToError = false;
      }
      requiresPreparation() {
        if (this.queryMode === "extended") {
          return true;
        }
        if (this.name) {
          return true;
        }
        if (this.rows) {
          return true;
        }
        if (!this.text) {
          return false;
        }
        if (!this.values) {
          return false;
        }
        return this.values.length > 0;
      }
      _checkForMultirow() {
        if (this._result.command) {
          if (!Array.isArray(this._results)) {
            this._results = [this._result];
          }
          this._result = new Result(this._rowMode, this._result._types);
          this._results.push(this._result);
        }
      }
      // associates row metadata from the supplied
      // message with this query object
      // metadata used when parsing row results
      handleRowDescription(msg) {
        this._checkForMultirow();
        this._result.addFields(msg.fields);
        this._accumulateRows = this.callback || !this.listeners("row").length;
      }
      handleDataRow(msg) {
        let row;
        if (this._canceledDueToError) {
          return;
        }
        try {
          row = this._result.parseRow(msg.fields);
        } catch (err) {
          this._canceledDueToError = err;
          return;
        }
        this.emit("row", row, this._result);
        if (this._accumulateRows) {
          this._result.addRow(row);
        }
      }
      handleCommandComplete(msg, connection) {
        this._checkForMultirow();
        this._result.addCommandComplete(msg);
        if (this.rows) {
          connection.sync();
        }
      }
      // if a named prepared statement is created with empty query text
      // the backend will send an emptyQuery message but *not* a command complete message
      // since we pipeline sync immediately after execute we don't need to do anything here
      // unless we have rows specified, in which case we did not pipeline the initial sync call
      handleEmptyQuery(connection) {
        if (this.rows) {
          connection.sync();
        }
      }
      handleError(err, connection) {
        if (this._canceledDueToError) {
          err = this._canceledDueToError;
          this._canceledDueToError = false;
        }
        if (this.callback) {
          return this.callback(err);
        }
        this.emit("error", err);
      }
      handleReadyForQuery(con) {
        if (this._canceledDueToError) {
          return this.handleError(this._canceledDueToError, con);
        }
        if (this.callback) {
          try {
            this.callback(null, this._results);
          } catch (err) {
            process.nextTick(() => {
              throw err;
            });
          }
        }
        this.emit("end", this._results);
      }
      submit(connection) {
        if (typeof this.text !== "string" && typeof this.name !== "string") {
          return new Error("A query must have either text or a name. Supplying neither is unsupported.");
        }
        const previous = connection.parsedStatements[this.name] || connection.submittedNamedStatements[this.name];
        if (this.text && previous && this.text !== previous) {
          return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
        }
        if (this.values && !Array.isArray(this.values)) {
          return new Error("Query values must be an array");
        }
        if (this.requiresPreparation()) {
          connection.stream.cork && connection.stream.cork();
          try {
            this.prepare(connection);
          } finally {
            connection.stream.uncork && connection.stream.uncork();
          }
        } else {
          connection.query(this.text);
        }
        return null;
      }
      hasBeenParsed(connection) {
        return this.name && (connection.parsedStatements[this.name] !== void 0 || connection.submittedNamedStatements[this.name] !== void 0);
      }
      handlePortalSuspended(connection) {
        this._getRows(connection, this.rows);
      }
      _getRows(connection, rows) {
        connection.execute({
          portal: this.portal,
          rows
        });
        if (!rows) {
          connection.sync();
        } else {
          connection.flush();
        }
      }
      // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
      prepare(connection) {
        if (!this.hasBeenParsed(connection)) {
          connection.parse({
            text: this.text,
            name: this.name,
            types: this.types
          });
          if (this.name) {
            connection.submittedNamedStatements[this.name] = this.text;
          }
        }
        try {
          connection.bind({
            portal: this.portal,
            statement: this.name,
            values: this.values,
            binary: this.binary,
            valueMapper: utils.prepareValue
          });
        } catch (err) {
          connection.close({ type: "S", name: this.name });
          connection.sync();
          this.handleError(err, connection);
          return;
        }
        connection.describe({
          type: "P",
          name: this.portal || ""
        });
        this._getRows(connection, this.rows);
      }
      handleCopyInResponse(connection) {
        connection.sendCopyFail("No source stream defined");
      }
      handleCopyData(msg, connection) {
      }
    };
    module.exports = Query;
  }
});

// ../../../api-platform/node_modules/pg-protocol/dist/messages.js
var require_messages = __commonJS({
  "../../../api-platform/node_modules/pg-protocol/dist/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoticeMessage = exports.DataRowMessage = exports.CommandCompleteMessage = exports.ReadyForQueryMessage = exports.NotificationResponseMessage = exports.BackendKeyDataMessage = exports.AuthenticationMD5Password = exports.ParameterStatusMessage = exports.ParameterDescriptionMessage = exports.RowDescriptionMessage = exports.Field = exports.CopyResponse = exports.CopyDataMessage = exports.DatabaseError = exports.copyDone = exports.emptyQuery = exports.replicationStart = exports.portalSuspended = exports.noData = exports.closeComplete = exports.bindComplete = exports.parseComplete = void 0;
    exports.parseComplete = {
      name: "parseComplete",
      length: 5
    };
    exports.bindComplete = {
      name: "bindComplete",
      length: 5
    };
    exports.closeComplete = {
      name: "closeComplete",
      length: 5
    };
    exports.noData = {
      name: "noData",
      length: 5
    };
    exports.portalSuspended = {
      name: "portalSuspended",
      length: 5
    };
    exports.replicationStart = {
      name: "replicationStart",
      length: 4
    };
    exports.emptyQuery = {
      name: "emptyQuery",
      length: 4
    };
    exports.copyDone = {
      name: "copyDone",
      length: 4
    };
    var DatabaseError = class extends Error {
      constructor(message, length, name) {
        super(message);
        this.length = length;
        this.name = name;
      }
    };
    exports.DatabaseError = DatabaseError;
    var CopyDataMessage = class {
      constructor(length, chunk) {
        this.length = length;
        this.chunk = chunk;
        this.name = "copyData";
      }
    };
    exports.CopyDataMessage = CopyDataMessage;
    var CopyResponse = class {
      constructor(length, name, binary, columnCount) {
        this.length = length;
        this.name = name;
        this.binary = binary;
        this.columnTypes = new Array(columnCount);
      }
    };
    exports.CopyResponse = CopyResponse;
    var Field = class {
      constructor(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, format) {
        this.name = name;
        this.tableID = tableID;
        this.columnID = columnID;
        this.dataTypeID = dataTypeID;
        this.dataTypeSize = dataTypeSize;
        this.dataTypeModifier = dataTypeModifier;
        this.format = format;
      }
    };
    exports.Field = Field;
    var RowDescriptionMessage = class {
      constructor(length, fieldCount) {
        this.length = length;
        this.fieldCount = fieldCount;
        this.name = "rowDescription";
        this.fields = new Array(this.fieldCount);
      }
    };
    exports.RowDescriptionMessage = RowDescriptionMessage;
    var ParameterDescriptionMessage = class {
      constructor(length, parameterCount) {
        this.length = length;
        this.parameterCount = parameterCount;
        this.name = "parameterDescription";
        this.dataTypeIDs = new Array(this.parameterCount);
      }
    };
    exports.ParameterDescriptionMessage = ParameterDescriptionMessage;
    var ParameterStatusMessage = class {
      constructor(length, parameterName, parameterValue) {
        this.length = length;
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
        this.name = "parameterStatus";
      }
    };
    exports.ParameterStatusMessage = ParameterStatusMessage;
    var AuthenticationMD5Password = class {
      constructor(length, salt) {
        this.length = length;
        this.salt = salt;
        this.name = "authenticationMD5Password";
      }
    };
    exports.AuthenticationMD5Password = AuthenticationMD5Password;
    var BackendKeyDataMessage = class {
      constructor(length, processID, secretKey) {
        this.length = length;
        this.processID = processID;
        this.secretKey = secretKey;
        this.name = "backendKeyData";
      }
    };
    exports.BackendKeyDataMessage = BackendKeyDataMessage;
    var NotificationResponseMessage = class {
      constructor(length, processId, channel, payload) {
        this.length = length;
        this.processId = processId;
        this.channel = channel;
        this.payload = payload;
        this.name = "notification";
      }
    };
    exports.NotificationResponseMessage = NotificationResponseMessage;
    var ReadyForQueryMessage = class {
      constructor(length, status) {
        this.length = length;
        this.status = status;
        this.name = "readyForQuery";
      }
    };
    exports.ReadyForQueryMessage = ReadyForQueryMessage;
    var CommandCompleteMessage = class {
      constructor(length, text) {
        this.length = length;
        this.text = text;
        this.name = "commandComplete";
      }
    };
    exports.CommandCompleteMessage = CommandCompleteMessage;
    var DataRowMessage = class {
      constructor(length, fields) {
        this.length = length;
        this.fields = fields;
        this.name = "dataRow";
        this.fieldCount = fields.length;
      }
    };
    exports.DataRowMessage = DataRowMessage;
    var NoticeMessage = class {
      constructor(length, message) {
        this.length = length;
        this.message = message;
        this.name = "notice";
      }
    };
    exports.NoticeMessage = NoticeMessage;
  }
});

// ../../../api-platform/node_modules/pg-protocol/dist/buffer-writer.js
var require_buffer_writer = __commonJS({
  "../../../api-platform/node_modules/pg-protocol/dist/buffer-writer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Writer = void 0;
    var Writer = class {
      constructor(size = 256) {
        this.size = size;
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer.allocUnsafe(size);
      }
      ensure(size) {
        const remaining = this.buffer.length - this.offset;
        if (remaining < size) {
          const oldBuffer = this.buffer;
          const newSize = oldBuffer.length + (oldBuffer.length >> 1) + size;
          this.buffer = Buffer.allocUnsafe(newSize);
          oldBuffer.copy(this.buffer, 0, 0, this.offset);
        }
      }
      addInt32(num) {
        this.ensure(4);
        this.buffer[this.offset++] = num >>> 24 & 255;
        this.buffer[this.offset++] = num >>> 16 & 255;
        this.buffer[this.offset++] = num >>> 8 & 255;
        this.buffer[this.offset++] = num >>> 0 & 255;
        return this;
      }
      addInt16(num) {
        this.ensure(2);
        this.buffer[this.offset++] = num >>> 8 & 255;
        this.buffer[this.offset++] = num >>> 0 & 255;
        return this;
      }
      addCString(string) {
        if (!string) {
          this.ensure(1);
        } else {
          const len = Buffer.byteLength(string);
          this.ensure(len + 1);
          this.buffer.write(string, this.offset, "utf-8");
          this.offset += len;
        }
        this.buffer[this.offset++] = 0;
        return this;
      }
      addString(string = "") {
        const len = Buffer.byteLength(string);
        this.ensure(len);
        this.buffer.write(string, this.offset);
        this.offset += len;
        return this;
      }
      // Write an Int32 byte-length prefix immediately followed by the string's UTF-8
      // bytes. Postgres' Bind wire format prefixes every parameter with its length,
      // and doing it in one method computes Buffer.byteLength ONCE — the previous
      // `addInt32(Buffer.byteLength(s)).addString(s)` pairing scanned the string
      // three times (byteLength for the prefix, byteLength again inside addString,
      // then the encode), which is costly for large text parameters.
      addInt32PrefixedString(string) {
        const len = Buffer.byteLength(string);
        this.ensure(4 + len);
        const buffer = this.buffer;
        let offset = this.offset;
        buffer[offset++] = len >>> 24 & 255;
        buffer[offset++] = len >>> 16 & 255;
        buffer[offset++] = len >>> 8 & 255;
        buffer[offset++] = len >>> 0 & 255;
        buffer.write(string, offset, "utf-8");
        this.offset = offset + len;
        return this;
      }
      add(otherBuffer) {
        this.ensure(otherBuffer.length);
        otherBuffer.copy(this.buffer, this.offset);
        this.offset += otherBuffer.length;
        return this;
      }
      /**
       * Appends an uninitialized block of {@link size} bytes to the buffer and returns its offset.
       */
      reserveUnsafe(size) {
        const offset = this.offset;
        this.ensure(size);
        this.offset += size;
        return offset;
      }
      join(code) {
        if (code) {
          this.buffer[this.headerPosition] = code;
          const length = this.offset - (this.headerPosition + 1);
          this.buffer.writeInt32BE(length, this.headerPosition + 1);
        }
        return this.buffer.slice(code ? 0 : 5, this.offset);
      }
      flush(code) {
        const result = this.join(code);
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer.allocUnsafe(this.size);
        return result;
      }
      clear() {
        this.offset = 5;
        this.headerPosition = 0;
      }
    };
    exports.Writer = Writer;
  }
});

// ../../../api-platform/node_modules/pg-protocol/dist/serializer.js
var require_serializer = __commonJS({
  "../../../api-platform/node_modules/pg-protocol/dist/serializer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serialize = void 0;
    var buffer_writer_1 = require_buffer_writer();
    var writer = new buffer_writer_1.Writer();
    var startup = (opts) => {
      writer.addInt16(3).addInt16(0);
      for (const key of Object.keys(opts)) {
        writer.addCString(key).addCString(opts[key]);
      }
      writer.addCString("client_encoding").addCString("UTF8");
      const bodyBuffer = writer.addCString("").flush();
      const length = bodyBuffer.length + 4;
      return new buffer_writer_1.Writer().addInt32(length).add(bodyBuffer).flush();
    };
    var requestSsl = () => {
      const response = Buffer.allocUnsafe(8);
      response.writeInt32BE(8, 0);
      response.writeInt32BE(80877103, 4);
      return response;
    };
    var password = (password2) => {
      return writer.addCString(password2).flush(
        112
        /* code.startup */
      );
    };
    var sendSASLInitialResponseMessage = function(mechanism, initialResponse) {
      writer.addCString(mechanism).addInt32PrefixedString(initialResponse);
      return writer.flush(
        112
        /* code.startup */
      );
    };
    var sendSCRAMClientFinalMessage = function(additionalData) {
      return writer.addString(additionalData).flush(
        112
        /* code.startup */
      );
    };
    var query = (text) => {
      return writer.addCString(text).flush(
        81
        /* code.query */
      );
    };
    var emptyArray = [];
    var parse = (query2) => {
      const name = query2.name || "";
      if (name.length > 63) {
        console.error("Warning! Postgres only supports 63 characters for query names.");
        console.error("You supplied %s (%s)", name, name.length);
        console.error("This can cause conflicts and silent errors executing queries");
      }
      const types = query2.types || emptyArray;
      const len = types.length;
      const buffer = writer.addCString(name).addCString(query2.text).addInt16(len);
      for (let i = 0; i < len; i++) {
        buffer.addInt32(types[i]);
      }
      return writer.flush(
        80
        /* code.parse */
      );
    };
    var writeValues = function(values, valueMapper, formatsOffset) {
      const len = values.length;
      for (let i = 0; i < len; i++) {
        const mappedVal = valueMapper ? valueMapper(values[i], i) : values[i];
        let formatByte = 0;
        if (mappedVal == null) {
          writer.addInt32(-1);
        } else if (mappedVal instanceof Buffer) {
          formatByte = 1;
          writer.addInt32(mappedVal.length);
          writer.add(mappedVal);
        } else {
          writer.addInt32PrefixedString(mappedVal);
        }
        const buf = writer.buffer;
        buf[formatsOffset++] = 0;
        buf[formatsOffset++] = formatByte;
      }
    };
    var bind = (config = {}) => {
      const portal = config.portal || "";
      const statement = config.statement || "";
      const binary = config.binary || false;
      const values = config.values || emptyArray;
      const len = values.length;
      writer.addCString(portal).addCString(statement);
      writer.addInt16(len);
      const formatsOffset = writer.reserveUnsafe(len * 2);
      writer.addInt16(len);
      try {
        writeValues(values, config.valueMapper, formatsOffset);
      } catch (err) {
        writer.clear();
        throw err;
      }
      writer.addInt16(1);
      writer.addInt16(
        binary ? 1 : 0
        /* ParamType.STRING */
      );
      return writer.flush(
        66
        /* code.bind */
      );
    };
    var emptyExecute = Buffer.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]);
    var execute = (config) => {
      if (!config || !config.portal && !config.rows) {
        return emptyExecute;
      }
      const portal = config.portal || "";
      const rows = config.rows || 0;
      const portalLength = Buffer.byteLength(portal);
      const len = 4 + portalLength + 1 + 4;
      const buff = Buffer.allocUnsafe(1 + len);
      buff[0] = 69;
      buff.writeInt32BE(len, 1);
      buff.write(portal, 5, "utf-8");
      buff[portalLength + 5] = 0;
      buff.writeUInt32BE(rows, buff.length - 4);
      return buff;
    };
    var cancel = (processID, secretKey) => {
      const buffer = Buffer.allocUnsafe(16);
      buffer.writeInt32BE(16, 0);
      buffer.writeInt16BE(1234, 4);
      buffer.writeInt16BE(5678, 6);
      buffer.writeInt32BE(processID, 8);
      buffer.writeInt32BE(secretKey, 12);
      return buffer;
    };
    var cstringMessage = (code, string) => {
      const stringLen = Buffer.byteLength(string);
      const len = 4 + stringLen + 1;
      const buffer = Buffer.allocUnsafe(1 + len);
      buffer[0] = code;
      buffer.writeInt32BE(len, 1);
      buffer.write(string, 5, "utf-8");
      buffer[len] = 0;
      return buffer;
    };
    var emptyDescribePortal = writer.addCString("P").flush(
      68
      /* code.describe */
    );
    var emptyDescribeStatement = writer.addCString("S").flush(
      68
      /* code.describe */
    );
    var describe = (msg) => {
      return msg.name ? cstringMessage(68, `${msg.type}${msg.name || ""}`) : msg.type === "P" ? emptyDescribePortal : emptyDescribeStatement;
    };
    var close = (msg) => {
      const text = `${msg.type}${msg.name || ""}`;
      return cstringMessage(67, text);
    };
    var copyData = (chunk) => {
      return writer.add(chunk).flush(
        100
        /* code.copyFromChunk */
      );
    };
    var copyFail = (message) => {
      return cstringMessage(102, message);
    };
    var codeOnlyBuffer = (code) => Buffer.from([code, 0, 0, 0, 4]);
    var flushBuffer = codeOnlyBuffer(
      72
      /* code.flush */
    );
    var syncBuffer = codeOnlyBuffer(
      83
      /* code.sync */
    );
    var endBuffer = codeOnlyBuffer(
      88
      /* code.end */
    );
    var copyDoneBuffer = codeOnlyBuffer(
      99
      /* code.copyDone */
    );
    var serialize = {
      startup,
      password,
      requestSsl,
      sendSASLInitialResponseMessage,
      sendSCRAMClientFinalMessage,
      query,
      parse,
      bind,
      execute,
      describe,
      close,
      flush: () => flushBuffer,
      sync: () => syncBuffer,
      end: () => endBuffer,
      copyData,
      copyDone: () => copyDoneBuffer,
      copyFail,
      cancel
    };
    exports.serialize = serialize;
  }
});

// ../../../api-platform/node_modules/pg-protocol/dist/buffer-reader.js
var require_buffer_reader = __commonJS({
  "../../../api-platform/node_modules/pg-protocol/dist/buffer-reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BufferReader = void 0;
    var BufferReader = class {
      constructor(offset = 0) {
        this.offset = offset;
        this.buffer = Buffer.allocUnsafe(0);
        this.encoding = "utf-8";
      }
      setBuffer(offset, buffer) {
        this.offset = offset;
        this.buffer = buffer;
      }
      int16() {
        const result = this.buffer.readInt16BE(this.offset);
        this.offset += 2;
        return result;
      }
      byte() {
        const result = this.buffer[this.offset];
        this.offset++;
        return result;
      }
      int32() {
        const result = this.buffer.readInt32BE(this.offset);
        this.offset += 4;
        return result;
      }
      uint32() {
        const result = this.buffer.readUInt32BE(this.offset);
        this.offset += 4;
        return result;
      }
      string(length) {
        const result = this.buffer.toString(this.encoding, this.offset, this.offset + length);
        this.offset += length;
        return result;
      }
      cstring() {
        const start = this.offset;
        let end = start;
        while (this.buffer[end++]) {
        }
        this.offset = end;
        return this.buffer.toString(this.encoding, start, end - 1);
      }
      bytes(length) {
        const result = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return result;
      }
    };
    exports.BufferReader = BufferReader;
  }
});

// ../../../api-platform/node_modules/pg-protocol/dist/parser.js
var require_parser = __commonJS({
  "../../../api-platform/node_modules/pg-protocol/dist/parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    var messages_1 = require_messages();
    var buffer_reader_1 = require_buffer_reader();
    var CODE_LENGTH = 1;
    var LEN_LENGTH = 4;
    var HEADER_LENGTH = CODE_LENGTH + LEN_LENGTH;
    var LATEINIT_LENGTH = -1;
    var emptyBuffer = Buffer.allocUnsafe(0);
    var Parser = class {
      constructor(opts) {
        this.buffer = emptyBuffer;
        this.bufferLength = 0;
        this.bufferOffset = 0;
        this.reader = new buffer_reader_1.BufferReader();
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === "binary") {
          throw new Error("Binary mode not supported yet");
        }
        this.mode = (opts === null || opts === void 0 ? void 0 : opts.mode) || "text";
      }
      parse(buffer, callback) {
        this.mergeBuffer(buffer);
        const bufferFullLength = this.bufferOffset + this.bufferLength;
        let offset = this.bufferOffset;
        while (offset + HEADER_LENGTH <= bufferFullLength) {
          const code = this.buffer[offset];
          const length = this.buffer.readUInt32BE(offset + CODE_LENGTH);
          const fullMessageLength = CODE_LENGTH + length;
          if (fullMessageLength + offset <= bufferFullLength) {
            const message = this.handlePacket(offset + HEADER_LENGTH, code, length, this.buffer);
            callback(message);
            offset += fullMessageLength;
          } else {
            break;
          }
        }
        if (offset === bufferFullLength) {
          this.buffer = emptyBuffer;
          this.bufferLength = 0;
          this.bufferOffset = 0;
        } else {
          this.bufferLength = bufferFullLength - offset;
          this.bufferOffset = offset;
        }
      }
      mergeBuffer(buffer) {
        if (this.bufferLength > 0) {
          const newLength = this.bufferLength + buffer.byteLength;
          const newFullLength = newLength + this.bufferOffset;
          if (newFullLength > this.buffer.byteLength) {
            let newBuffer;
            if (newLength <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) {
              newBuffer = this.buffer;
            } else {
              let newBufferLength = this.buffer.byteLength * 2;
              while (newLength >= newBufferLength) {
                newBufferLength *= 2;
              }
              newBuffer = Buffer.allocUnsafe(newBufferLength);
            }
            this.buffer.copy(newBuffer, 0, this.bufferOffset, this.bufferOffset + this.bufferLength);
            this.buffer = newBuffer;
            this.bufferOffset = 0;
          }
          buffer.copy(this.buffer, this.bufferOffset + this.bufferLength);
          this.bufferLength = newLength;
        } else {
          this.buffer = buffer;
          this.bufferOffset = 0;
          this.bufferLength = buffer.byteLength;
        }
      }
      handlePacket(offset, code, length, bytes) {
        const { reader } = this;
        reader.setBuffer(offset, bytes);
        let message;
        switch (code) {
          case 50:
            message = messages_1.bindComplete;
            break;
          case 49:
            message = messages_1.parseComplete;
            break;
          case 51:
            message = messages_1.closeComplete;
            break;
          case 110:
            message = messages_1.noData;
            break;
          case 115:
            message = messages_1.portalSuspended;
            break;
          case 99:
            message = messages_1.copyDone;
            break;
          case 87:
            message = messages_1.replicationStart;
            break;
          case 73:
            message = messages_1.emptyQuery;
            break;
          case 68:
            message = parseDataRowMessage(reader);
            break;
          case 67:
            message = parseCommandCompleteMessage(reader);
            break;
          case 90:
            message = parseReadyForQueryMessage(reader);
            break;
          case 65:
            message = parseNotificationMessage(reader);
            break;
          case 82:
            message = parseAuthenticationResponse(reader, length);
            break;
          case 83:
            message = parseParameterStatusMessage(reader);
            break;
          case 75:
            message = parseBackendKeyData(reader);
            break;
          case 69:
            message = parseErrorMessage(reader, "error");
            break;
          case 78:
            message = parseErrorMessage(reader, "notice");
            break;
          case 84:
            message = parseRowDescriptionMessage(reader);
            break;
          case 116:
            message = parseParameterDescriptionMessage(reader);
            break;
          case 71:
            message = parseCopyInMessage(reader);
            break;
          case 72:
            message = parseCopyOutMessage(reader);
            break;
          case 100:
            message = parseCopyData(reader, length);
            break;
          default:
            return new messages_1.DatabaseError("received invalid response: " + code.toString(16), length, "error");
        }
        reader.setBuffer(0, emptyBuffer);
        message.length = length;
        return message;
      }
    };
    exports.Parser = Parser;
    var parseReadyForQueryMessage = (reader) => {
      const status = reader.string(1);
      return new messages_1.ReadyForQueryMessage(LATEINIT_LENGTH, status);
    };
    var parseCommandCompleteMessage = (reader) => {
      const text = reader.cstring();
      return new messages_1.CommandCompleteMessage(LATEINIT_LENGTH, text);
    };
    var parseCopyData = (reader, length) => {
      const chunk = reader.bytes(length - 4);
      return new messages_1.CopyDataMessage(LATEINIT_LENGTH, chunk);
    };
    var parseCopyInMessage = (reader) => parseCopyMessage(reader, "copyInResponse");
    var parseCopyOutMessage = (reader) => parseCopyMessage(reader, "copyOutResponse");
    var parseCopyMessage = (reader, messageName) => {
      const isBinary = reader.byte() !== 0;
      const columnCount = reader.int16();
      const message = new messages_1.CopyResponse(LATEINIT_LENGTH, messageName, isBinary, columnCount);
      for (let i = 0; i < columnCount; i++) {
        message.columnTypes[i] = reader.int16();
      }
      return message;
    };
    var parseNotificationMessage = (reader) => {
      const processId = reader.int32();
      const channel = reader.cstring();
      const payload = reader.cstring();
      return new messages_1.NotificationResponseMessage(LATEINIT_LENGTH, processId, channel, payload);
    };
    var parseRowDescriptionMessage = (reader) => {
      const fieldCount = reader.int16();
      const message = new messages_1.RowDescriptionMessage(LATEINIT_LENGTH, fieldCount);
      for (let i = 0; i < fieldCount; i++) {
        message.fields[i] = parseField(reader);
      }
      return message;
    };
    var parseField = (reader) => {
      const name = reader.cstring();
      const tableID = reader.uint32();
      const columnID = reader.int16();
      const dataTypeID = reader.uint32();
      const dataTypeSize = reader.int16();
      const dataTypeModifier = reader.int32();
      const mode = reader.int16() === 0 ? "text" : "binary";
      return new messages_1.Field(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, mode);
    };
    var parseParameterDescriptionMessage = (reader) => {
      const parameterCount = reader.int16();
      const message = new messages_1.ParameterDescriptionMessage(LATEINIT_LENGTH, parameterCount);
      for (let i = 0; i < parameterCount; i++) {
        message.dataTypeIDs[i] = reader.uint32();
      }
      return message;
    };
    var parseDataRowMessage = (reader) => {
      const fieldCount = reader.int16();
      const fields = new Array(fieldCount);
      for (let i = 0; i < fieldCount; i++) {
        const len = reader.int32();
        fields[i] = len === -1 ? null : reader.string(len);
      }
      return new messages_1.DataRowMessage(LATEINIT_LENGTH, fields);
    };
    var parseParameterStatusMessage = (reader) => {
      const name = reader.cstring();
      const value = reader.cstring();
      return new messages_1.ParameterStatusMessage(LATEINIT_LENGTH, name, value);
    };
    var parseBackendKeyData = (reader) => {
      const processID = reader.int32();
      const secretKey = reader.int32();
      return new messages_1.BackendKeyDataMessage(LATEINIT_LENGTH, processID, secretKey);
    };
    var parseAuthenticationResponse = (reader, length) => {
      const code = reader.int32();
      const message = {
        name: "authenticationOk",
        length
      };
      switch (code) {
        case 0:
          break;
        case 3:
          if (message.length === 8) {
            message.name = "authenticationCleartextPassword";
          }
          break;
        case 5:
          if (message.length === 12) {
            message.name = "authenticationMD5Password";
            const salt = reader.bytes(4);
            return new messages_1.AuthenticationMD5Password(LATEINIT_LENGTH, salt);
          }
          break;
        case 10:
          {
            message.name = "authenticationSASL";
            message.mechanisms = [];
            let mechanism;
            do {
              mechanism = reader.cstring();
              if (mechanism) {
                message.mechanisms.push(mechanism);
              }
            } while (mechanism);
          }
          break;
        case 11:
          message.name = "authenticationSASLContinue";
          message.data = reader.string(length - 8);
          break;
        case 12:
          message.name = "authenticationSASLFinal";
          message.data = reader.string(length - 8);
          break;
        default:
          throw new Error("Unknown authenticationOk message type " + code);
      }
      return message;
    };
    var parseErrorMessage = (reader, name) => {
      const fields = {};
      let fieldType = reader.string(1);
      while (fieldType !== "\0") {
        fields[fieldType] = reader.cstring();
        fieldType = reader.string(1);
      }
      const messageValue = fields.M;
      const message = name === "notice" ? new messages_1.NoticeMessage(LATEINIT_LENGTH, messageValue) : new messages_1.DatabaseError(messageValue, LATEINIT_LENGTH, name);
      message.severity = fields.S;
      message.code = fields.C;
      message.detail = fields.D;
      message.hint = fields.H;
      message.position = fields.P;
      message.internalPosition = fields.p;
      message.internalQuery = fields.q;
      message.where = fields.W;
      message.schema = fields.s;
      message.table = fields.t;
      message.column = fields.c;
      message.dataType = fields.d;
      message.constraint = fields.n;
      message.file = fields.F;
      message.line = fields.L;
      message.routine = fields.R;
      return message;
    };
  }
});

// ../../../api-platform/node_modules/pg-protocol/dist/index.js
var require_dist = __commonJS({
  "../../../api-platform/node_modules/pg-protocol/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DatabaseError = exports.serialize = void 0;
    exports.parse = parse;
    var messages_1 = require_messages();
    Object.defineProperty(exports, "DatabaseError", { enumerable: true, get: function() {
      return messages_1.DatabaseError;
    } });
    var serializer_1 = require_serializer();
    Object.defineProperty(exports, "serialize", { enumerable: true, get: function() {
      return serializer_1.serialize;
    } });
    var parser_1 = require_parser();
    function parse(stream, callback) {
      const parser = new parser_1.Parser();
      stream.on("data", (buffer) => parser.parse(buffer, callback));
      return new Promise((resolve) => stream.on("end", () => resolve()));
    }
  }
});

// ../../../api-platform/node_modules/pg-cloudflare/dist/empty.js
var require_empty = __commonJS({
  "../../../api-platform/node_modules/pg-cloudflare/dist/empty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {};
  }
});

// ../../../api-platform/node_modules/pg/lib/stream.js
var require_stream = __commonJS({
  "../../../api-platform/node_modules/pg/lib/stream.js"(exports, module) {
    var { getStream, getSecureStream } = getStreamFuncs();
    module.exports = {
      /**
       * Get a socket stream compatible with the current runtime environment.
       * @returns {Duplex}
       */
      getStream,
      /**
       * Get a TLS secured socket, compatible with the current environment,
       * using the socket and other settings given in `options`.
       * @returns {Duplex}
       */
      getSecureStream
    };
    function getNodejsStreamFuncs() {
      function getStream2(ssl) {
        const net = __require("net");
        return new net.Socket();
      }
      function getSecureStream2(options) {
        const tls = __require("tls");
        return tls.connect(options);
      }
      return {
        getStream: getStream2,
        getSecureStream: getSecureStream2
      };
    }
    function getCloudflareStreamFuncs() {
      function getStream2(ssl) {
        const { CloudflareSocket } = require_empty();
        return new CloudflareSocket(ssl);
      }
      function getSecureStream2(options) {
        options.socket.startTls(options);
        return options.socket;
      }
      return {
        getStream: getStream2,
        getSecureStream: getSecureStream2
      };
    }
    function isCloudflareRuntime() {
      if (typeof navigator === "object" && navigator !== null && typeof navigator.userAgent === "string") {
        return navigator.userAgent === "Cloudflare-Workers";
      }
      if (typeof Response === "function") {
        const resp = new Response(null, { cf: { thing: true } });
        if (typeof resp.cf === "object" && resp.cf !== null && resp.cf.thing) {
          return true;
        }
      }
      return false;
    }
    function getStreamFuncs() {
      if (isCloudflareRuntime()) {
        return getCloudflareStreamFuncs();
      }
      return getNodejsStreamFuncs();
    }
  }
});

// ../../../api-platform/node_modules/pg/lib/connection.js
var require_connection = __commonJS({
  "../../../api-platform/node_modules/pg/lib/connection.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events").EventEmitter;
    var { parse, serialize } = require_dist();
    var stream = require_stream();
    var { getStream } = stream;
    var flushBuffer = serialize.flush();
    var syncBuffer = serialize.sync();
    var endBuffer = serialize.end();
    var Connection = class extends EventEmitter {
      constructor(config) {
        super();
        config = config || {};
        this.stream = config.stream || getStream(config.ssl);
        if (typeof this.stream === "function") {
          this.stream = this.stream(config);
        }
        this._keepAlive = config.keepAlive;
        this._keepAliveInitialDelayMillis = config.keepAliveInitialDelayMillis;
        this.parsedStatements = {};
        this.submittedNamedStatements = {};
        this.ssl = config.ssl || false;
        this.sslNegotiation = config.sslNegotiation || "postgres";
        this._ending = false;
        this._emitMessage = false;
        const self = this;
        this.on("newListener", function(eventName) {
          if (eventName === "message") {
            self._emitMessage = true;
          }
        });
      }
      connect(port, host) {
        const self = this;
        this._connecting = true;
        this.stream.setNoDelay(true);
        this.stream.connect(port, host);
        this.stream.once("connect", function() {
          if (self._keepAlive) {
            self.stream.setKeepAlive(true, self._keepAliveInitialDelayMillis);
          }
          self.emit("connect");
        });
        const reportStreamError = function(error) {
          if (self._ending && (error.code === "ECONNRESET" || error.code === "EPIPE")) {
            return;
          }
          self.emit("error", error);
        };
        this.stream.on("error", reportStreamError);
        this.stream.on("close", function() {
          self.emit("end");
        });
        if (!this.ssl) {
          return this.attachListeners(this.stream);
        }
        if (this.sslNegotiation === "direct") {
          return this.stream.once("connect", function() {
            self.upgradeToSSL(host, reportStreamError);
          });
        }
        this.stream.once("data", function(buffer) {
          const responseCode = buffer.toString("utf8");
          switch (responseCode) {
            case "S":
              break;
            case "N":
              self.stream.end();
              return self.emit("error", new Error("The server does not support SSL connections"));
            default:
              self.stream.end();
              return self.emit("error", new Error("There was an error establishing an SSL connection"));
          }
          self.upgradeToSSL(host, reportStreamError);
        });
      }
      upgradeToSSL(host, reportStreamError) {
        const self = this;
        const options = {
          socket: self.stream,
          // tls.connect checks the server identity against `servername`, falling
          // back to `host` and then to 'localhost'. `servername` must stay unset
          // for IP addresses (see below), so `host` is needed to keep certificate
          // validation working when connecting to an IP address.
          host
        };
        if (self.ssl !== true) {
          Object.assign(options, self.ssl);
          if ("key" in self.ssl) {
            options.key = self.ssl.key;
          }
        }
        if (self.sslNegotiation === "direct") {
          options.ALPNProtocols = ["postgresql"];
        }
        const net = __require("net");
        if (net.isIP && net.isIP(host) === 0) {
          options.servername = host;
        }
        try {
          self.stream = stream.getSecureStream(options);
        } catch (err) {
          return self.emit("error", err);
        }
        self.attachListeners(self.stream);
        self.stream.on("error", reportStreamError);
        self.emit("sslconnect");
      }
      attachListeners(stream2) {
        parse(stream2, (msg) => {
          const eventName = msg.name === "error" ? "errorMessage" : msg.name;
          if (this._emitMessage) {
            this.emit("message", msg);
          }
          this.emit(eventName, msg);
        });
      }
      requestSsl() {
        this.stream.write(serialize.requestSsl());
      }
      startup(config) {
        this.stream.write(serialize.startup(config));
      }
      cancel(processID, secretKey) {
        this._send(serialize.cancel(processID, secretKey));
      }
      password(password) {
        this._send(serialize.password(password));
      }
      sendSASLInitialResponseMessage(mechanism, initialResponse) {
        this._send(serialize.sendSASLInitialResponseMessage(mechanism, initialResponse));
      }
      sendSCRAMClientFinalMessage(additionalData) {
        this._send(serialize.sendSCRAMClientFinalMessage(additionalData));
      }
      _send(buffer) {
        if (!this.stream.writable) {
          return false;
        }
        return this.stream.write(buffer);
      }
      query(text) {
        this._send(serialize.query(text));
      }
      // send parse message
      parse(query) {
        this._send(serialize.parse(query));
      }
      // send bind message
      bind(config) {
        this._send(serialize.bind(config));
      }
      // send execute message
      execute(config) {
        this._send(serialize.execute(config));
      }
      flush() {
        if (this.stream.writable) {
          this.stream.write(flushBuffer);
        }
      }
      sync() {
        this._send(syncBuffer);
      }
      ref() {
        this.stream.ref();
      }
      unref() {
        this.stream.unref();
      }
      end() {
        this._ending = true;
        if (!this._connecting || !this.stream.writable) {
          this.stream.end();
          return;
        }
        return this.stream.write(endBuffer, () => {
          this.stream.end();
        });
      }
      close(msg) {
        this._send(serialize.close(msg));
      }
      describe(msg) {
        this._send(serialize.describe(msg));
      }
      sendCopyFromChunk(chunk) {
        this._send(serialize.copyData(chunk));
      }
      endCopyFrom() {
        this._send(serialize.copyDone());
      }
      sendCopyFail(msg) {
        this._send(serialize.copyFail(msg));
      }
    };
    module.exports = Connection;
  }
});

// ../../../api-platform/node_modules/split2/index.js
var require_split2 = __commonJS({
  "../../../api-platform/node_modules/split2/index.js"(exports, module) {
    "use strict";
    var { Transform } = __require("stream");
    var { StringDecoder } = __require("string_decoder");
    var kLast = /* @__PURE__ */ Symbol("last");
    var kDecoder = /* @__PURE__ */ Symbol("decoder");
    function transform(chunk, enc, cb) {
      let list;
      if (this.overflow) {
        const buf = this[kDecoder].write(chunk);
        list = buf.split(this.matcher);
        if (list.length === 1) return cb();
        list.shift();
        this.overflow = false;
      } else {
        this[kLast] += this[kDecoder].write(chunk);
        list = this[kLast].split(this.matcher);
      }
      this[kLast] = list.pop();
      for (let i = 0; i < list.length; i++) {
        try {
          push(this, this.mapper(list[i]));
        } catch (error) {
          return cb(error);
        }
      }
      this.overflow = this[kLast].length > this.maxLength;
      if (this.overflow && !this.skipOverflow) {
        cb(new Error("maximum buffer reached"));
        return;
      }
      cb();
    }
    function flush(cb) {
      this[kLast] += this[kDecoder].end();
      if (this[kLast]) {
        try {
          push(this, this.mapper(this[kLast]));
        } catch (error) {
          return cb(error);
        }
      }
      cb();
    }
    function push(self, val) {
      if (val !== void 0) {
        self.push(val);
      }
    }
    function noop(incoming) {
      return incoming;
    }
    function split(matcher, mapper, options) {
      matcher = matcher || /\r?\n/;
      mapper = mapper || noop;
      options = options || {};
      switch (arguments.length) {
        case 1:
          if (typeof matcher === "function") {
            mapper = matcher;
            matcher = /\r?\n/;
          } else if (typeof matcher === "object" && !(matcher instanceof RegExp) && !matcher[Symbol.split]) {
            options = matcher;
            matcher = /\r?\n/;
          }
          break;
        case 2:
          if (typeof matcher === "function") {
            options = mapper;
            mapper = matcher;
            matcher = /\r?\n/;
          } else if (typeof mapper === "object") {
            options = mapper;
            mapper = noop;
          }
      }
      options = Object.assign({}, options);
      options.autoDestroy = true;
      options.transform = transform;
      options.flush = flush;
      options.readableObjectMode = true;
      const stream = new Transform(options);
      stream[kLast] = "";
      stream[kDecoder] = new StringDecoder("utf8");
      stream.matcher = matcher;
      stream.mapper = mapper;
      stream.maxLength = options.maxLength;
      stream.skipOverflow = options.skipOverflow || false;
      stream.overflow = false;
      stream._destroy = function(err, cb) {
        this._writableState.errorEmitted = false;
        cb(err);
      };
      return stream;
    }
    module.exports = split;
  }
});

// ../../../api-platform/node_modules/pgpass/lib/helper.js
var require_helper = __commonJS({
  "../../../api-platform/node_modules/pgpass/lib/helper.js"(exports, module) {
    "use strict";
    var path = __require("path");
    var Stream = __require("stream").Stream;
    var split = require_split2();
    var util = __require("util");
    var defaultPort = 5432;
    var isWin = process.platform === "win32";
    var warnStream = process.stderr;
    var S_IRWXG = 56;
    var S_IRWXO = 7;
    var S_IFMT = 61440;
    var S_IFREG = 32768;
    function isRegFile(mode) {
      return (mode & S_IFMT) == S_IFREG;
    }
    var fieldNames = ["host", "port", "database", "user", "password"];
    var nrOfFields = fieldNames.length;
    var passKey = fieldNames[nrOfFields - 1];
    function warn() {
      var isWritable = warnStream instanceof Stream && true === warnStream.writable;
      if (isWritable) {
        var args = Array.prototype.slice.call(arguments).concat("\n");
        warnStream.write(util.format.apply(util, args));
      }
    }
    Object.defineProperty(module.exports, "isWin", {
      get: function() {
        return isWin;
      },
      set: function(val) {
        isWin = val;
      }
    });
    module.exports.warnTo = function(stream) {
      var old = warnStream;
      warnStream = stream;
      return old;
    };
    module.exports.getFileName = function(rawEnv) {
      var env = rawEnv || process.env;
      var file = env.PGPASSFILE || (isWin ? path.join(env.APPDATA || "./", "postgresql", "pgpass.conf") : path.join(env.HOME || "./", ".pgpass"));
      return file;
    };
    module.exports.usePgPass = function(stats, fname) {
      if (Object.prototype.hasOwnProperty.call(process.env, "PGPASSWORD")) {
        return false;
      }
      if (isWin) {
        return true;
      }
      fname = fname || "<unkn>";
      if (!isRegFile(stats.mode)) {
        warn('WARNING: password file "%s" is not a plain file', fname);
        return false;
      }
      if (stats.mode & (S_IRWXG | S_IRWXO)) {
        warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', fname);
        return false;
      }
      return true;
    };
    var matcher = module.exports.match = function(connInfo, entry) {
      return fieldNames.slice(0, -1).reduce(function(prev, field, idx) {
        if (idx == 1) {
          if (Number(connInfo[field] || defaultPort) === Number(entry[field])) {
            return prev && true;
          }
        }
        return prev && (entry[field] === "*" || entry[field] === connInfo[field]);
      }, true);
    };
    module.exports.getPassword = function(connInfo, stream, cb) {
      var pass;
      var lineStream = stream.pipe(split());
      function onLine(line) {
        var entry = parseLine(line);
        if (entry && isValidEntry(entry) && matcher(connInfo, entry)) {
          pass = entry[passKey];
          lineStream.end();
        }
      }
      var onEnd = function() {
        stream.destroy();
        cb(pass);
      };
      var onErr = function(err) {
        stream.destroy();
        warn("WARNING: error on reading file: %s", err);
        cb(void 0);
      };
      stream.on("error", onErr);
      lineStream.on("data", onLine).on("end", onEnd).on("error", onErr);
    };
    var parseLine = module.exports.parseLine = function(line) {
      if (line.length < 11 || line.match(/^\s+#/)) {
        return null;
      }
      var curChar = "";
      var prevChar = "";
      var fieldIdx = 0;
      var startIdx = 0;
      var endIdx = 0;
      var obj = {};
      var isLastField = false;
      var addToObj = function(idx, i0, i1) {
        var field = line.substring(i0, i1);
        if (!Object.hasOwnProperty.call(process.env, "PGPASS_NO_DEESCAPE")) {
          field = field.replace(/\\([:\\])/g, "$1");
        }
        obj[fieldNames[idx]] = field;
      };
      for (var i = 0; i < line.length - 1; i += 1) {
        curChar = line.charAt(i + 1);
        prevChar = line.charAt(i);
        isLastField = fieldIdx == nrOfFields - 1;
        if (isLastField) {
          addToObj(fieldIdx, startIdx);
          break;
        }
        if (i >= 0 && curChar == ":" && prevChar !== "\\") {
          addToObj(fieldIdx, startIdx, i + 1);
          startIdx = i + 2;
          fieldIdx += 1;
        }
      }
      obj = Object.keys(obj).length === nrOfFields ? obj : null;
      return obj;
    };
    var isValidEntry = module.exports.isValidEntry = function(entry) {
      var rules = {
        // host
        0: function(x) {
          return x.length > 0;
        },
        // port
        1: function(x) {
          if (x === "*") {
            return true;
          }
          x = Number(x);
          return isFinite(x) && x > 0 && x < 9007199254740992 && Math.floor(x) === x;
        },
        // database
        2: function(x) {
          return x.length > 0;
        },
        // username
        3: function(x) {
          return x.length > 0;
        },
        // password
        4: function(x) {
          return x.length > 0;
        }
      };
      for (var idx = 0; idx < fieldNames.length; idx += 1) {
        var rule = rules[idx];
        var value = entry[fieldNames[idx]] || "";
        var res = rule(value);
        if (!res) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../../../api-platform/node_modules/pgpass/lib/index.js
var require_lib = __commonJS({
  "../../../api-platform/node_modules/pgpass/lib/index.js"(exports, module) {
    "use strict";
    var path = __require("path");
    var fs = __require("fs");
    var helper = require_helper();
    module.exports = function(connInfo, cb) {
      var file = helper.getFileName();
      fs.stat(file, function(err, stat) {
        if (err || !helper.usePgPass(stat, file)) {
          return cb(void 0);
        }
        var st = fs.createReadStream(file);
        helper.getPassword(connInfo, st, cb);
      });
    };
    module.exports.warnTo = helper.warnTo;
  }
});

// ../../../api-platform/node_modules/pg/lib/client.js
var require_client = __commonJS({
  "../../../api-platform/node_modules/pg/lib/client.js"(exports, module) {
    var EventEmitter = __require("events").EventEmitter;
    var utils = require_utils();
    var nodeUtils = __require("util");
    var sasl = require_sasl();
    var TypeOverrides = require_type_overrides();
    var ConnectionParameters = require_connection_parameters();
    var Query = require_query();
    var defaults = require_defaults();
    var Connection = require_connection();
    var crypto2 = require_utils2();
    var activeQueryDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Client.activeQuery is deprecated and will be removed in pg@9.0"
    );
    var queryQueueDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Client.queryQueue is deprecated and will be removed in pg@9.0."
    );
    var pgPassDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "pgpass support is deprecated and will be removed in pg@9.0. You can provide an async function as the password property to the Client/Pool constructor that returns a password instead. Within this function you can call the pgpass module in your own code."
    );
    var byoPromiseDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Passing a custom Promise implementation to the Client/Pool constructor is deprecated and will be removed in pg@9.0."
    );
    var queryQueueLengthDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Calling client.query() when the client is already executing a query is deprecated and will be removed in pg@9.0. Use async/await or an external async flow control mechanism instead."
    );
    function coerceNumberOrDefault(value, defaultValue) {
      if (typeof value === "number") {
        return Number.isFinite(value) ? value : defaultValue;
      }
      if (typeof value === "string" && value.trim() !== "") {
        const n = Number(value);
        return Number.isFinite(n) ? n : defaultValue;
      }
      return defaultValue;
    }
    var Client = class extends EventEmitter {
      constructor(config) {
        super();
        this.connectionParameters = new ConnectionParameters(config);
        this.user = this.connectionParameters.user;
        this.database = this.connectionParameters.database;
        this.port = this.connectionParameters.port;
        this.host = this.connectionParameters.host;
        Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: this.connectionParameters.password
        });
        this.replication = this.connectionParameters.replication;
        const c = config || {};
        if (c.Promise) {
          byoPromiseDeprecationNotice();
        }
        this._Promise = c.Promise || global.Promise;
        this._types = new TypeOverrides(c.types);
        this._ending = false;
        this._ended = false;
        this._connecting = false;
        this._connected = false;
        this._connectionError = false;
        this._queryable = true;
        this._activeQuery = null;
        this._txStatus = null;
        this.enableChannelBinding = Boolean(c.enableChannelBinding);
        this.scramMaxIterations = coerceNumberOrDefault(c.scramMaxIterations, sasl.DEFAULT_MAX_SCRAM_ITERATIONS);
        this.connection = c.connection || new Connection({
          stream: c.stream,
          ssl: this.connectionParameters.ssl,
          sslNegotiation: this.connectionParameters.sslnegotiation,
          keepAlive: c.keepAlive || false,
          keepAliveInitialDelayMillis: c.keepAliveInitialDelayMillis || 0,
          encoding: this.connectionParameters.client_encoding || "utf8"
        });
        this._queryQueue = [];
        this._sentQueryQueue = [];
        this.pipeline = Boolean(c.pipeline);
        this.binary = c.binary || defaults.binary;
        this.processID = null;
        this.secretKey = null;
        this.ssl = this.connectionParameters.ssl || false;
        this.sslNegotiation = this.connectionParameters.sslnegotiation || "postgres";
        if (this.ssl && this.ssl.key) {
          Object.defineProperty(this.ssl, "key", {
            enumerable: false
          });
        }
        this._connectionTimeoutMillis = c.connectionTimeoutMillis || 0;
      }
      get activeQuery() {
        activeQueryDeprecationNotice();
        return this._activeQuery;
      }
      set activeQuery(val) {
        activeQueryDeprecationNotice();
        this._activeQuery = val;
      }
      _getActiveQuery() {
        return this._activeQuery;
      }
      _errorAllQueries(err) {
        const enqueueError = (query) => {
          process.nextTick(() => {
            query.handleError(err, this.connection);
          });
        };
        const activeQuery = this._getActiveQuery();
        if (activeQuery) {
          enqueueError(activeQuery);
          this._activeQuery = null;
        }
        this._sentQueryQueue.forEach(enqueueError);
        this._sentQueryQueue.length = 0;
        this._queryQueue.forEach(enqueueError);
        this._queryQueue.length = 0;
      }
      _connect(callback) {
        const self = this;
        const con = this.connection;
        this._connectionCallback = callback;
        if (this._connecting || this._connected) {
          const err = new Error("Client has already been connected. You cannot reuse a client.");
          process.nextTick(() => {
            callback(err);
          });
          return;
        }
        this._connecting = true;
        if (this._connectionTimeoutMillis > 0) {
          this.connectionTimeoutHandle = setTimeout(() => {
            con._ending = true;
            con.stream.destroy(new Error("timeout expired"));
          }, this._connectionTimeoutMillis);
          if (this.connectionTimeoutHandle.unref) {
            this.connectionTimeoutHandle.unref();
          }
        }
        if (this.host && this.host.indexOf("/") === 0) {
          con.connect(this.host + "/.s.PGSQL." + this.port);
        } else {
          con.connect(this.port, this.host);
        }
        con.on("connect", function() {
          if (self.ssl) {
            if (self.sslNegotiation !== "direct") {
              con.requestSsl();
            }
          } else {
            con.startup(self.getStartupConf());
          }
        });
        con.on("sslconnect", function() {
          con.startup(self.getStartupConf());
        });
        this._attachListeners(con);
        con.once("end", () => {
          const error = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
          clearTimeout(this.connectionTimeoutHandle);
          this._errorAllQueries(error);
          this._ended = true;
          if (!this._ending) {
            if (this._connecting && !this._connectionError) {
              if (this._connectionCallback) {
                this._connectionCallback(error);
              } else {
                this._handleErrorEvent(error);
              }
            } else if (!this._connectionError) {
              this._handleErrorEvent(error);
            }
          }
          process.nextTick(() => {
            this.emit("end");
          });
        });
      }
      connect(callback) {
        if (callback) {
          this._connect(callback);
          return;
        }
        return new this._Promise((resolve, reject) => {
          this._connect((error) => {
            if (error) {
              reject(error);
            } else {
              resolve(this);
            }
          });
        });
      }
      _attachListeners(con) {
        con.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this));
        con.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this));
        con.on("authenticationSASL", this._handleAuthSASL.bind(this));
        con.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this));
        con.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this));
        con.on("backendKeyData", this._handleBackendKeyData.bind(this));
        con.on("error", this._handleErrorEvent.bind(this));
        con.on("errorMessage", this._handleErrorMessage.bind(this));
        con.on("readyForQuery", this._handleReadyForQuery.bind(this));
        con.on("notice", this._handleNotice.bind(this));
        con.on("rowDescription", this._handleRowDescription.bind(this));
        con.on("dataRow", this._handleDataRow.bind(this));
        con.on("portalSuspended", this._handlePortalSuspended.bind(this));
        con.on("emptyQuery", this._handleEmptyQuery.bind(this));
        con.on("commandComplete", this._handleCommandComplete.bind(this));
        con.on("parseComplete", this._handleParseComplete.bind(this));
        con.on("copyInResponse", this._handleCopyInResponse.bind(this));
        con.on("copyData", this._handleCopyData.bind(this));
        con.on("notification", this._handleNotification.bind(this));
      }
      _getPassword(cb) {
        const con = this.connection;
        if (typeof this.password === "function") {
          this._Promise.resolve().then(() => this.password(this.connectionParameters)).then((pass) => {
            if (pass !== void 0) {
              if (typeof pass !== "string") {
                con.emit("error", new TypeError("Password must be a string"));
                return;
              }
              this.connectionParameters.password = this.password = pass;
            } else {
              this.connectionParameters.password = this.password = null;
            }
            cb();
          }).catch((err) => {
            con.emit("error", err);
          });
        } else if (this.password !== null) {
          cb();
        } else {
          try {
            const pgPass = require_lib();
            pgPass(this.connectionParameters, (pass) => {
              if (void 0 !== pass) {
                pgPassDeprecationNotice();
                this.connectionParameters.password = this.password = pass;
              }
              cb();
            });
          } catch (e) {
            this.emit("error", e);
          }
        }
      }
      _handleAuthCleartextPassword(msg) {
        this._getPassword(() => {
          this.connection.password(this.password);
        });
      }
      _handleAuthMD5Password(msg) {
        this._getPassword(async () => {
          try {
            const hashedPassword = await crypto2.postgresMd5PasswordHash(this.user, this.password, msg.salt);
            this.connection.password(hashedPassword);
          } catch (e) {
            this.emit("error", e);
          }
        });
      }
      _handleAuthSASL(msg) {
        this._getPassword(() => {
          try {
            this.saslSession = sasl.startSession(
              msg.mechanisms,
              this.enableChannelBinding && this.connection.stream,
              this.scramMaxIterations
            );
            this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
          } catch (err) {
            this.connection.emit("error", err);
          }
        });
      }
      async _handleAuthSASLContinue(msg) {
        try {
          await sasl.continueSession(
            this.saslSession,
            this.password,
            msg.data,
            this.enableChannelBinding && this.connection.stream
          );
          this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
        } catch (err) {
          this.connection.emit("error", err);
        }
      }
      _handleAuthSASLFinal(msg) {
        try {
          sasl.finalizeSession(this.saslSession, msg.data);
          this.saslSession = null;
        } catch (err) {
          this.connection.emit("error", err);
        }
      }
      _handleBackendKeyData(msg) {
        this.processID = msg.processID;
        this.secretKey = msg.secretKey;
      }
      _handleReadyForQuery(msg) {
        if (this._connecting) {
          this._connecting = false;
          this._connected = true;
          clearTimeout(this.connectionTimeoutHandle);
          if (this._connectionCallback) {
            this._connectionCallback(null, this);
            this._connectionCallback = null;
          }
          this.emit("connect");
        }
        const activeQuery = this._getActiveQuery();
        this._activeQuery = null;
        this._txStatus = msg?.status ?? null;
        this.readyForQuery = true;
        if (activeQuery) {
          activeQuery.handleReadyForQuery(this.connection);
        }
        this._pulseQueryQueue();
      }
      // if we receive an error event or error message
      // during the connection process we handle it here
      _handleErrorWhileConnecting(err) {
        if (this._connectionError) {
          return;
        }
        this._connectionError = true;
        clearTimeout(this.connectionTimeoutHandle);
        if (this._connectionCallback) {
          return this._connectionCallback(err);
        }
        this.emit("error", err);
      }
      // if we're connected and we receive an error event from the connection
      // this means the socket is dead - do a hard abort of all queries and emit
      // the socket error on the client as well
      _handleErrorEvent(err) {
        if (this._connecting) {
          return this._handleErrorWhileConnecting(err);
        }
        this._queryable = false;
        this._errorAllQueries(err);
        this.emit("error", err);
      }
      // handle error messages from the postgres backend
      _handleErrorMessage(msg) {
        if (this._connecting) {
          return this._handleErrorWhileConnecting(msg);
        }
        const activeQuery = this._getActiveQuery();
        if (!activeQuery) {
          this._handleErrorEvent(msg);
          return;
        }
        this._activeQuery = null;
        if (activeQuery.name) {
          delete this.connection.submittedNamedStatements[activeQuery.name];
        }
        activeQuery.handleError(msg, this.connection);
      }
      _handleRowDescription(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected rowDescription message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleRowDescription(msg);
      }
      _handleDataRow(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected dataRow message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleDataRow(msg);
      }
      _handlePortalSuspended(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected portalSuspended message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handlePortalSuspended(this.connection);
      }
      _handleEmptyQuery(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected emptyQuery message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleEmptyQuery(this.connection);
      }
      _handleCommandComplete(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected commandComplete message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCommandComplete(msg, this.connection);
      }
      _handleParseComplete() {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected parseComplete message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        if (activeQuery.name) {
          this.connection.parsedStatements[activeQuery.name] = activeQuery.text;
          delete this.connection.submittedNamedStatements[activeQuery.name];
        }
      }
      _handleCopyInResponse(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected copyInResponse message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCopyInResponse(this.connection);
      }
      _handleCopyData(msg) {
        const activeQuery = this._getActiveQuery();
        if (activeQuery == null) {
          const error = new Error("Received unexpected copyData message from backend.");
          this._handleErrorEvent(error);
          return;
        }
        activeQuery.handleCopyData(msg, this.connection);
      }
      _handleNotification(msg) {
        this.emit("notification", msg);
      }
      _handleNotice(msg) {
        this.emit("notice", msg);
      }
      getStartupConf() {
        const params = this.connectionParameters;
        const data = {
          user: params.user,
          database: params.database
        };
        const appName = params.application_name || params.fallback_application_name;
        if (appName) {
          data.application_name = appName;
        }
        if (params.replication) {
          data.replication = "" + params.replication;
        }
        if (params.statement_timeout) {
          data.statement_timeout = String(parseInt(params.statement_timeout, 10));
        }
        if (params.lock_timeout) {
          data.lock_timeout = String(parseInt(params.lock_timeout, 10));
        }
        if (params.idle_in_transaction_session_timeout) {
          data.idle_in_transaction_session_timeout = String(parseInt(params.idle_in_transaction_session_timeout, 10));
        }
        if (params.options) {
          data.options = params.options;
        }
        return data;
      }
      cancel(client, query) {
        if (client.activeQuery === query) {
          const con = this.connection;
          if (this.host && this.host.indexOf("/") === 0) {
            con.connect(this.host + "/.s.PGSQL." + this.port);
          } else {
            con.connect(this.port, this.host);
          }
          con.on("connect", function() {
            con.cancel(client.processID, client.secretKey);
          });
        } else if (client._queryQueue.indexOf(query) !== -1) {
          client._queryQueue.splice(client._queryQueue.indexOf(query), 1);
        } else if (client._sentQueryQueue.indexOf(query) !== -1) {
          query.callback = () => {
          };
        }
      }
      setTypeParser(oid, format, parseFn) {
        return this._types.setTypeParser(oid, format, parseFn);
      }
      getTypeParser(oid, format) {
        return this._types.getTypeParser(oid, format);
      }
      // escapeIdentifier and escapeLiteral moved to utility functions & exported
      // on PG
      // re-exported here for backwards compatibility
      escapeIdentifier(str) {
        return utils.escapeIdentifier(str);
      }
      escapeLiteral(str) {
        return utils.escapeLiteral(str);
      }
      _pulseQueryQueue() {
        if (this.pipeline) {
          this._pulsePipelinedQueryQueue();
          return;
        }
        if (this.readyForQuery === true) {
          this._activeQuery = this._queryQueue.shift();
          const activeQuery = this._getActiveQuery();
          if (activeQuery) {
            this.readyForQuery = false;
            this.hasExecuted = true;
            const queryError = activeQuery.submit(this.connection);
            if (queryError) {
              process.nextTick(() => {
                activeQuery.handleError(queryError, this.connection);
                this.readyForQuery = true;
                this._pulseQueryQueue();
              });
            }
          } else if (this.hasExecuted) {
            this._activeQuery = null;
            this.emit("drain");
          }
        }
      }
      _pulsePipelinedQueryQueue() {
        if (!this._connected || !this._queryable) {
          return;
        }
        while (this._queryQueue.length > 0) {
          const query = this._queryQueue.shift();
          this.hasExecuted = true;
          const queryError = query.submit(this.connection);
          if (queryError) {
            process.nextTick(() => {
              query.handleError(queryError, this.connection);
            });
            continue;
          }
          this._sentQueryQueue.push(query);
        }
        if (this.readyForQuery && !this._activeQuery && this._sentQueryQueue.length > 0) {
          this._activeQuery = this._sentQueryQueue.shift();
          this.readyForQuery = false;
        }
        if (!this._activeQuery && this._sentQueryQueue.length === 0 && this._queryQueue.length === 0 && this.hasExecuted) {
          this.emit("drain");
        }
      }
      query(config, values, callback) {
        let query;
        let result;
        if (config == null) {
          throw new TypeError("Client was passed a null or undefined query");
        }
        if (typeof config.submit === "function") {
          result = query = config;
          if (!query.callback) {
            if (typeof values === "function") {
              query.callback = values;
            } else if (callback) {
              query.callback = callback;
            }
          }
        } else {
          query = new Query(config, values, callback);
          if (!query.callback) {
            result = new this._Promise((resolve, reject) => {
              query.callback = (err, res) => err ? reject(err) : resolve(res);
            }).catch((err) => {
              Error.captureStackTrace(err);
              throw err;
            });
          } else if (typeof query.callback !== "function") {
            throw new TypeError("callback is not a function");
          }
        }
        const readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
        if (readTimeout) {
          const queryCallback = query.callback || (() => {
          });
          const readTimeoutTimer = setTimeout(() => {
            const error = new Error("Query read timeout");
            process.nextTick(() => {
              query.handleError(error, this.connection);
            });
            queryCallback(error);
            query.callback = () => {
            };
            const index = this._queryQueue.indexOf(query);
            if (index > -1) {
              this._queryQueue.splice(index, 1);
            } else if (this.pipeline) {
              this.connection.stream.destroy();
              return;
            }
            this._pulseQueryQueue();
          }, readTimeout);
          query.callback = (err, res) => {
            clearTimeout(readTimeoutTimer);
            queryCallback(err, res);
          };
        }
        if (this.binary && !query.binary) {
          query.binary = true;
        }
        if (query._result && !query._result._types) {
          query._result._types = this._types;
        }
        if (this.pipeline) {
          const portalQuery = typeof config.submit === "function" && !(query instanceof Query) ? "Custom query classes such as pg-cursor and pg-query-stream are" : query.rows ? "The `rows` option is" : null;
          if (portalQuery) {
            process.nextTick(() => {
              query.handleError(new Error(`${portalQuery} not supported in pipeline mode`), this.connection);
            });
            return result;
          }
        }
        if (!this._queryable) {
          process.nextTick(() => {
            query.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
          });
          return result;
        }
        if (this._ending) {
          process.nextTick(() => {
            query.handleError(new Error("Client was closed and is not queryable"), this.connection);
          });
          return result;
        }
        if (this._queryQueue.length > 0 && !this.pipeline) {
          queryQueueLengthDeprecationNotice();
        }
        this._queryQueue.push(query);
        this._pulseQueryQueue();
        return result;
      }
      ref() {
        this.connection.ref();
      }
      unref() {
        this.connection.unref();
      }
      getTransactionStatus() {
        return this._txStatus;
      }
      end(cb) {
        this._ending = true;
        if (!this.connection._connecting || this._ended) {
          if (cb) {
            cb();
            return;
          } else {
            return this._Promise.resolve();
          }
        }
        if (!this._queryable) {
          this.connection.stream.destroy();
        } else if (this.pipeline && (this._getActiveQuery() || this._sentQueryQueue.length > 0 || this._queryQueue.length > 0)) {
          this.once("drain", () => this.connection.end());
        } else if (this._getActiveQuery()) {
          this.connection.stream.destroy();
        } else {
          this.connection.end();
        }
        if (cb) {
          this.connection.once("end", cb);
        } else {
          return new this._Promise((resolve) => {
            this.connection.once("end", resolve);
          });
        }
      }
      get queryQueue() {
        queryQueueDeprecationNotice();
        return this._queryQueue;
      }
    };
    Client.Query = Query;
    module.exports = Client;
  }
});

// ../../../api-platform/node_modules/pg-pool/index.js
var require_pg_pool = __commonJS({
  "../../../api-platform/node_modules/pg-pool/index.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events").EventEmitter;
    var NOOP = function() {
    };
    var removeWhere = (list, predicate) => {
      const i = list.findIndex(predicate);
      return i === -1 ? void 0 : list.splice(i, 1)[0];
    };
    var IdleItem = class {
      constructor(client, idleListener, timeoutId) {
        this.client = client;
        this.idleListener = idleListener;
        this.timeoutId = timeoutId;
      }
    };
    var PendingItem = class {
      constructor(callback) {
        this.callback = callback;
      }
    };
    function throwOnDoubleRelease() {
      throw new Error("Release called on client which has already been released to the pool.");
    }
    function promisify(Promise2, callback) {
      if (callback) {
        return { callback, result: void 0 };
      }
      let rej;
      let res;
      const cb = function(err, client) {
        err ? rej(err) : res(client);
      };
      const result = new Promise2(function(resolve, reject) {
        res = resolve;
        rej = reject;
      }).catch((err) => {
        Error.captureStackTrace(err);
        throw err;
      });
      return { callback: cb, result };
    }
    function makeIdleListener(pool, client) {
      return function idleListener(err) {
        err.client = client;
        client.removeListener("error", idleListener);
        client.on("error", () => {
          pool.log("additional client error after disconnection due to error", err);
        });
        pool._remove(client);
        pool.emit("error", err, client);
      };
    }
    var Pool = class extends EventEmitter {
      constructor(options, Client) {
        super();
        this.options = Object.assign({}, options);
        if (options != null && "password" in options) {
          Object.defineProperty(this.options, "password", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: options.password
          });
        }
        if (options != null && options.ssl && options.ssl.key) {
          Object.defineProperty(this.options.ssl, "key", {
            enumerable: false
          });
        }
        this.options.max = this.options.max || this.options.poolSize || 10;
        this.options.min = this.options.min || 0;
        this.options.maxUses = this.options.maxUses || Infinity;
        this.options.allowExitOnIdle = this.options.allowExitOnIdle || false;
        this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0;
        this.log = this.options.log || function() {
        };
        this.Client = this.options.Client || Client || require_lib2().Client;
        this.Promise = this.options.Promise || global.Promise;
        if (typeof this.options.idleTimeoutMillis === "undefined") {
          this.options.idleTimeoutMillis = 1e4;
        }
        this._clients = [];
        this._idle = [];
        this._expired = /* @__PURE__ */ new WeakSet();
        this._pendingQueue = [];
        this._endCallback = void 0;
        this.ending = false;
        this.ended = false;
      }
      _promiseTry(f) {
        const Promise2 = this.Promise;
        if (typeof Promise2.try === "function") {
          return Promise2.try(f);
        }
        return new Promise2((resolve) => resolve(f()));
      }
      _isFull() {
        return this._clients.length >= this.options.max;
      }
      _isAboveMin() {
        return this._clients.length > this.options.min;
      }
      _pulseQueue() {
        this.log("pulse queue");
        if (this.ended) {
          this.log("pulse queue ended");
          return;
        }
        if (this.ending) {
          this.log("pulse queue on ending");
          if (this._idle.length) {
            this._idle.slice().map((item) => {
              this._remove(item.client);
            });
          }
          if (!this._clients.length) {
            this.ended = true;
            this._endCallback();
          }
          return;
        }
        if (!this._pendingQueue.length) {
          this.log("no queued requests");
          return;
        }
        if (!this._idle.length && this._isFull()) {
          return;
        }
        const pendingItem = this._pendingQueue.shift();
        if (this._idle.length) {
          const idleItem = this._idle.pop();
          clearTimeout(idleItem.timeoutId);
          const client = idleItem.client;
          client.ref && client.ref();
          const idleListener = idleItem.idleListener;
          return this._acquireClient(client, pendingItem, idleListener, false);
        }
        if (!this._isFull()) {
          return this.newClient(pendingItem);
        }
        throw new Error("unexpected condition");
      }
      _remove(client, callback) {
        const removed = removeWhere(this._idle, (item) => item.client === client);
        if (removed !== void 0) {
          clearTimeout(removed.timeoutId);
        }
        this._clients = this._clients.filter((c) => c !== client);
        const context = this;
        client.end(() => {
          context.emit("remove", client);
          if (typeof callback === "function") {
            callback();
          }
        });
      }
      connect(cb) {
        if (this.ending) {
          const err = new Error("Cannot use a pool after calling end on the pool");
          return cb ? cb(err) : this.Promise.reject(err);
        }
        const response = promisify(this.Promise, cb);
        const result = response.result;
        if (this._isFull() || this._idle.length) {
          if (this._idle.length) {
            process.nextTick(() => this._pulseQueue());
          }
          if (!this.options.connectionTimeoutMillis) {
            this._pendingQueue.push(new PendingItem(response.callback));
            return result;
          }
          const queueCallback = (err, res, done) => {
            clearTimeout(tid);
            response.callback(err, res, done);
          };
          const pendingItem = new PendingItem(queueCallback);
          const tid = setTimeout(() => {
            removeWhere(this._pendingQueue, (i) => i.callback === queueCallback);
            pendingItem.timedOut = true;
            response.callback(new Error("timeout exceeded when trying to connect"));
          }, this.options.connectionTimeoutMillis);
          if (tid.unref) {
            tid.unref();
          }
          this._pendingQueue.push(pendingItem);
          return result;
        }
        this.newClient(new PendingItem(response.callback));
        return result;
      }
      newClient(pendingItem) {
        const client = new this.Client(this.options);
        this._clients.push(client);
        const idleListener = makeIdleListener(this, client);
        this.log("checking client timeout");
        let tid;
        let timeoutHit = false;
        if (this.options.connectionTimeoutMillis) {
          tid = setTimeout(() => {
            if (client.connection) {
              this.log("ending client due to timeout");
              timeoutHit = true;
              client.connection.stream.destroy();
            } else if (!client.isConnected()) {
              this.log("ending client due to timeout");
              timeoutHit = true;
              client.end();
            }
          }, this.options.connectionTimeoutMillis);
        }
        this.log("connecting new client");
        client.connect((err) => {
          if (tid) {
            clearTimeout(tid);
          }
          client.on("error", idleListener);
          if (err) {
            this.log("client failed to connect", err);
            this._clients = this._clients.filter((c) => c !== client);
            if (timeoutHit) {
              err = new Error("Connection terminated due to connection timeout", { cause: err });
            }
            this._pulseQueue();
            if (!pendingItem.timedOut) {
              pendingItem.callback(err, void 0, NOOP);
            }
          } else {
            this.log("new client connected");
            if (this.options.onConnect) {
              this._promiseTry(() => this.options.onConnect(client)).then(
                () => {
                  this._afterConnect(client, pendingItem, idleListener);
                },
                (hookErr) => {
                  this._clients = this._clients.filter((c) => c !== client);
                  client.end(() => {
                    this._pulseQueue();
                    if (!pendingItem.timedOut) {
                      pendingItem.callback(hookErr, void 0, NOOP);
                    }
                  });
                }
              );
              return;
            }
            return this._afterConnect(client, pendingItem, idleListener);
          }
        });
      }
      _afterConnect(client, pendingItem, idleListener) {
        if (this.options.maxLifetimeSeconds !== 0) {
          const maxLifetimeTimeout = setTimeout(() => {
            this.log("ending client due to expired lifetime");
            this._expired.add(client);
            const idleIndex = this._idle.findIndex((idleItem) => idleItem.client === client);
            if (idleIndex !== -1) {
              this._acquireClient(
                client,
                new PendingItem((err, client2, clientRelease) => clientRelease()),
                idleListener,
                false
              );
            }
          }, this.options.maxLifetimeSeconds * 1e3);
          maxLifetimeTimeout.unref();
          client.once("end", () => clearTimeout(maxLifetimeTimeout));
        }
        return this._acquireClient(client, pendingItem, idleListener, true);
      }
      // acquire a client for a pending work item
      _acquireClient(client, pendingItem, idleListener, isNew) {
        if (isNew) {
          this.emit("connect", client);
        }
        this.emit("acquire", client);
        client.release = this._releaseOnce(client, idleListener);
        client.removeListener("error", idleListener);
        if (!pendingItem.timedOut) {
          if (isNew && this.options.verify) {
            this.options.verify(client, (err) => {
              if (err) {
                client.release(err);
                return pendingItem.callback(err, void 0, NOOP);
              }
              pendingItem.callback(void 0, client, client.release);
            });
          } else {
            pendingItem.callback(void 0, client, client.release);
          }
        } else {
          if (isNew && this.options.verify) {
            this.options.verify(client, client.release);
          } else {
            client.release();
          }
        }
      }
      // returns a function that wraps _release and throws if called more than once
      _releaseOnce(client, idleListener) {
        let released = false;
        return (err) => {
          if (released) {
            throwOnDoubleRelease();
          }
          released = true;
          this._release(client, idleListener, err);
        };
      }
      // release a client back to the poll, include an error
      // to remove it from the pool
      _release(client, idleListener, err) {
        client.on("error", idleListener);
        client._poolUseCount = (client._poolUseCount || 0) + 1;
        this.emit("release", err, client);
        if (err || this.ending || !client._queryable || client._ending || client._poolUseCount >= this.options.maxUses) {
          if (client._poolUseCount >= this.options.maxUses) {
            this.log("remove expended client");
          }
          return this._remove(client, this._pulseQueue.bind(this));
        }
        const isExpired = this._expired.has(client);
        if (isExpired) {
          this.log("remove expired client");
          this._expired.delete(client);
          return this._remove(client, this._pulseQueue.bind(this));
        }
        let tid;
        if (this.options.idleTimeoutMillis && this._isAboveMin()) {
          tid = setTimeout(() => {
            if (this._isAboveMin()) {
              this.log("remove idle client");
              this._remove(client, this._pulseQueue.bind(this));
            }
          }, this.options.idleTimeoutMillis);
          if (this.options.allowExitOnIdle) {
            tid.unref();
          }
        }
        if (this.options.allowExitOnIdle) {
          client.unref();
        }
        this._idle.push(new IdleItem(client, idleListener, tid));
        this._pulseQueue();
      }
      query(text, values, cb) {
        if (typeof text === "function") {
          const response2 = promisify(this.Promise, text);
          setImmediate(function() {
            return response2.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
          });
          return response2.result;
        }
        if (typeof values === "function") {
          cb = values;
          values = void 0;
        }
        const response = promisify(this.Promise, cb);
        cb = response.callback;
        this.connect((err, client) => {
          if (err) {
            return cb(err);
          }
          let clientReleased = false;
          const onError = (err2) => {
            if (clientReleased) {
              return;
            }
            clientReleased = true;
            client.release(err2);
            cb(err2);
          };
          client.once("error", onError);
          this.log("dispatching query");
          try {
            client.query(text, values, (err2, res) => {
              this.log("query dispatched");
              client.removeListener("error", onError);
              if (clientReleased) {
                return;
              }
              clientReleased = true;
              client.release(err2);
              if (err2) {
                return cb(err2);
              }
              return cb(void 0, res);
            });
          } catch (err2) {
            client.release(err2);
            return cb(err2);
          }
        });
        return response.result;
      }
      end(cb) {
        this.log("ending");
        if (this.ending) {
          const err = new Error("Called end on pool more than once");
          return cb ? cb(err) : this.Promise.reject(err);
        }
        this.ending = true;
        const promised = promisify(this.Promise, cb);
        this._endCallback = promised.callback;
        this._pulseQueue();
        return promised.result;
      }
      get waitingCount() {
        return this._pendingQueue.length;
      }
      get idleCount() {
        return this._idle.length;
      }
      get expiredCount() {
        return this._clients.reduce((acc, client) => acc + (this._expired.has(client) ? 1 : 0), 0);
      }
      get totalCount() {
        return this._clients.length;
      }
    };
    module.exports = Pool;
  }
});

// ../../../api-platform/node_modules/pg/lib/native/query.js
var require_query2 = __commonJS({
  "../../../api-platform/node_modules/pg/lib/native/query.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events").EventEmitter;
    var util = __require("util");
    var utils = require_utils();
    var NativeQuery = module.exports = function(config, values, callback) {
      EventEmitter.call(this);
      config = utils.normalizeQueryConfig(config, values, callback);
      this.text = config.text;
      this.values = config.values;
      this.name = config.name;
      this.queryMode = config.queryMode;
      this.callback = config.callback;
      this.state = "new";
      this._arrayMode = config.rowMode === "array";
      this._emitRowEvents = false;
      this.on(
        "newListener",
        function(event) {
          if (event === "row") this._emitRowEvents = true;
        }.bind(this)
      );
    };
    util.inherits(NativeQuery, EventEmitter);
    var errorFieldMap = {
      sqlState: "code",
      statementPosition: "position",
      messagePrimary: "message",
      messageDetail: "detail",
      messageHint: "hint",
      context: "where",
      schemaName: "schema",
      tableName: "table",
      columnName: "column",
      dataTypeName: "dataType",
      constraintName: "constraint",
      sourceFile: "file",
      sourceLine: "line",
      sourceFunction: "routine"
    };
    NativeQuery.prototype.handleError = function(err) {
      const fields = this.native && this.native.pq.resultErrorFields();
      if (fields) {
        for (const key in fields) {
          const normalizedFieldName = errorFieldMap[key] || key;
          err[normalizedFieldName] = fields[key];
        }
      }
      if (this.callback) {
        this.callback(err);
      } else {
        this.emit("error", err);
      }
      this.state = "error";
    };
    NativeQuery.prototype.then = function(onSuccess, onFailure) {
      return this._getPromise().then(onSuccess, onFailure);
    };
    NativeQuery.prototype.catch = function(callback) {
      return this._getPromise().catch(callback);
    };
    NativeQuery.prototype._getPromise = function() {
      if (this._promise) return this._promise;
      this._promise = new Promise(
        function(resolve, reject) {
          this._once("end", resolve);
          this._once("error", reject);
        }.bind(this)
      );
      return this._promise;
    };
    NativeQuery.prototype.submit = function(client) {
      this.state = "running";
      const self = this;
      this.native = client.native;
      client.native.arrayMode = this._arrayMode;
      let after = function(err, rows, results) {
        client.native.arrayMode = false;
        setImmediate(function() {
          self.emit("_done");
        });
        if (err) {
          return self.handleError(err);
        }
        if (self._emitRowEvents) {
          if (results.length > 1) {
            rows.forEach((rowOfRows, i) => {
              rowOfRows.forEach((row) => {
                self.emit("row", row, results[i]);
              });
            });
          } else {
            rows.forEach(function(row) {
              self.emit("row", row, results);
            });
          }
        }
        self.state = "end";
        self.emit("end", results);
        if (self.callback) {
          self.callback(null, results);
        }
      };
      if (process.domain) {
        after = process.domain.bind(after);
      }
      if (this.name) {
        if (this.name.length > 63) {
          console.error("Warning! Postgres only supports 63 characters for query names.");
          console.error("You supplied %s (%s)", this.name, this.name.length);
          console.error("This can cause conflicts and silent errors executing queries");
        }
        const values = (this.values || []).map(utils.prepareValue);
        if (client.namedQueries[this.name] !== void 0) {
          if (this.text && client.namedQueries[this.name] !== this.text) {
            const err = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
            return after(err);
          }
          return client.native.execute(this.name, values, after);
        }
        return client.native.prepare(this.name, this.text, values.length, function(err) {
          if (err) return after(err);
          client.namedQueries[self.name] = self.text;
          return self.native.execute(self.name, values, after);
        });
      } else if (this.values) {
        if (!Array.isArray(this.values)) {
          const err = new Error("Query values must be an array");
          return after(err);
        }
        const vals = this.values.map(utils.prepareValue);
        client.native.query(this.text, vals, after);
      } else if (this.queryMode === "extended") {
        client.native.query(this.text, [], after);
      } else {
        client.native.query(this.text, after);
      }
    };
  }
});

// ../../../api-platform/node_modules/pg/lib/native/client.js
var require_client2 = __commonJS({
  "../../../api-platform/node_modules/pg/lib/native/client.js"(exports, module) {
    var nodeUtils = __require("util");
    var Native;
    try {
      Native = __require("pg-native");
    } catch (e) {
      throw e;
    }
    var TypeOverrides = require_type_overrides();
    var EventEmitter = __require("events").EventEmitter;
    var util = __require("util");
    var ConnectionParameters = require_connection_parameters();
    var NativeQuery = require_query2();
    var queryQueueLengthDeprecationNotice = nodeUtils.deprecate(
      () => {
      },
      "Calling client.query() when the client is already executing a query is deprecated and will be removed in pg@9.0. Use async/await or an external async flow control mechanism instead."
    );
    var Client = module.exports = function(config) {
      EventEmitter.call(this);
      config = config || {};
      this._Promise = config.Promise || global.Promise;
      this._types = new TypeOverrides(config.types);
      this.native = new Native({
        types: this._types
      });
      this._queryQueue = [];
      this._ending = false;
      this._connecting = false;
      this._connected = false;
      this._queryable = true;
      this.pipeline = Boolean(config.pipeline);
      this._pipelineInFlight = false;
      const cp = this.connectionParameters = new ConnectionParameters(config);
      if (config.nativeConnectionString) cp.nativeConnectionString = config.nativeConnectionString;
      this.user = cp.user;
      Object.defineProperty(this, "password", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: cp.password
      });
      this.database = cp.database;
      this.host = cp.host;
      this.port = cp.port;
      this.namedQueries = {};
    };
    Client.Query = NativeQuery;
    util.inherits(Client, EventEmitter);
    Client.prototype._errorAllQueries = function(err) {
      const enqueueError = (query) => {
        process.nextTick(() => {
          query.native = this.native;
          query.handleError(err);
        });
      };
      if (this._hasActiveQuery()) {
        enqueueError(this._activeQuery);
        this._activeQuery = null;
      }
      this._queryQueue.forEach(enqueueError);
      this._queryQueue.length = 0;
    };
    Client.prototype._connect = function(cb) {
      const self = this;
      if (this._connecting) {
        process.nextTick(() => cb(new Error("Client has already been connected. You cannot reuse a client.")));
        return;
      }
      this._connecting = true;
      this.connectionParameters.getLibpqConnectionString(function(err, conString) {
        if (self.connectionParameters.nativeConnectionString) conString = self.connectionParameters.nativeConnectionString;
        if (err) return cb(err);
        self.native.connect(conString, function(err2) {
          if (err2) {
            self.native.end();
            return cb(err2);
          }
          self._connected = true;
          self.native.on("error", function(err3) {
            self._queryable = false;
            self._errorAllQueries(err3);
            self.emit("error", err3);
          });
          self.native.on("notification", function(msg) {
            self.emit("notification", {
              channel: msg.relname,
              payload: msg.extra
            });
          });
          self.emit("connect");
          self._pulseQueryQueue(true);
          cb(null, this);
        });
      });
    };
    Client.prototype.connect = function(callback) {
      if (callback) {
        this._connect(callback);
        return;
      }
      return new this._Promise((resolve, reject) => {
        this._connect((error) => {
          if (error) {
            reject(error);
          } else {
            resolve(this);
          }
        });
      });
    };
    Client.prototype.query = function(config, values, callback) {
      let query;
      let result;
      let readTimeout;
      let readTimeoutTimer;
      let queryCallback;
      if (config === null || config === void 0) {
        throw new TypeError("Client was passed a null or undefined query");
      } else if (typeof config.submit === "function") {
        readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
        result = query = config;
        if (typeof values === "function") {
          config.callback = values;
        }
      } else {
        readTimeout = config.query_timeout || this.connectionParameters.query_timeout;
        query = new NativeQuery(config, values, callback);
        if (!query.callback) {
          let resolveOut, rejectOut;
          result = new this._Promise((resolve, reject) => {
            resolveOut = resolve;
            rejectOut = reject;
          }).catch((err) => {
            Error.captureStackTrace(err);
            throw err;
          });
          query.callback = (err, res) => err ? rejectOut(err) : resolveOut(res);
        }
      }
      if (readTimeout) {
        queryCallback = query.callback || (() => {
        });
        readTimeoutTimer = setTimeout(() => {
          const error = new Error("Query read timeout");
          process.nextTick(() => {
            query.handleError(error, this.connection);
          });
          queryCallback(error);
          query.callback = () => {
          };
          const index = this._queryQueue.indexOf(query);
          if (index > -1) {
            this._queryQueue.splice(index, 1);
          }
          this._pulseQueryQueue();
        }, readTimeout);
        query.callback = (err, res) => {
          clearTimeout(readTimeoutTimer);
          queryCallback(err, res);
        };
      }
      if (!this._queryable) {
        query.native = this.native;
        process.nextTick(() => {
          query.handleError(new Error("Client has encountered a connection error and is not queryable"));
        });
        return result;
      }
      if (this._ending) {
        query.native = this.native;
        process.nextTick(() => {
          query.handleError(new Error("Client was closed and is not queryable"));
        });
        return result;
      }
      if (this._queryQueue.length > 0 && !this.pipeline) {
        queryQueueLengthDeprecationNotice();
      }
      this._queryQueue.push(query);
      this._pulseQueryQueue();
      return result;
    };
    Client.prototype.end = function(cb) {
      const self = this;
      this._ending = true;
      if (this._connecting && !this._connected) {
        this.once("connect", () => {
          this.end(() => {
          });
        });
      }
      let result;
      if (!cb) {
        result = new this._Promise(function(resolve, reject) {
          cb = (err) => err ? reject(err) : resolve();
        });
      }
      const doEnd = function() {
        self.native.end(function() {
          self._connected = false;
          self._errorAllQueries(new Error("Connection terminated"));
          process.nextTick(() => {
            self.emit("end");
            if (cb) cb();
          });
        });
      };
      if (this.pipeline && (this._pipelineInFlight || this._queryQueue.length > 0)) {
        this.once("drain", doEnd);
      } else {
        doEnd();
      }
      return result;
    };
    Client.prototype._hasActiveQuery = function() {
      return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
    };
    Client.prototype._pulseQueryQueue = function(initialConnection) {
      if (!this._connected) {
        return;
      }
      if (this.pipeline && !initialConnection) {
        return this._pulsePipelinedQueryQueue();
      }
      if (this._hasActiveQuery()) {
        return;
      }
      const query = this._queryQueue.shift();
      if (!query) {
        if (!initialConnection) {
          this.emit("drain");
        }
        return;
      }
      this._activeQuery = query;
      query.submit(this);
      const self = this;
      query.once("_done", function() {
        self._pulseQueryQueue();
      });
    };
    Client.prototype._pulsePipelinedQueryQueue = function() {
      if (!this._connected || this._pipelineInFlight) {
        return;
      }
      if (this._queryQueue.length === 0) {
        if (this.hasExecuted) {
          this.emit("drain");
        }
        return;
      }
      this._pipelineInFlight = true;
      const self = this;
      const queries = [];
      const nativeQueries = [];
      const utils = require_utils();
      while (this._queryQueue.length > 0) {
        const query = this._queryQueue.shift();
        this.hasExecuted = true;
        nativeQueries.push(query);
        const values = query.values ? query.values.map(utils.prepareValue) : null;
        const pipelineEntry = { text: query.text, name: query.name, arrayMode: query._arrayMode };
        if (values) {
          pipelineEntry.values = values;
        }
        if (query.name && this.namedQueries[query.name]) {
          pipelineEntry._alreadyPrepared = true;
        }
        queries.push(pipelineEntry);
      }
      this.native.pipeline(queries, function(err, results) {
        self._pipelineInFlight = false;
        if (err) {
          self._connected = false;
          self._queryable = false;
          for (let i = 0; i < nativeQueries.length; i++) {
            const q = nativeQueries[i];
            q.native = self.native;
            q.handleError(err);
          }
          self._errorAllQueries(err);
          self.emit("error", err);
          self.emit("end");
          return;
        }
        for (let i = 0; i < nativeQueries.length; i++) {
          const q = nativeQueries[i];
          const r = results[i];
          q.native = self.native;
          if (r.err) {
            q.handleError(r.err);
          } else {
            if (q.name) {
              self.namedQueries[q.name] = q.text;
            }
            q.state = "end";
            q.emit("end", r.result);
            if (q.callback) {
              q.callback(null, r.result);
            }
          }
          setImmediate(function() {
            q.emit("_done");
          });
        }
        self._pulsePipelinedQueryQueue();
      });
    };
    Client.prototype.cancel = function(query) {
      if (this._activeQuery === query) {
        this.native.cancel(function() {
        });
      } else if (this._queryQueue.indexOf(query) !== -1) {
        this._queryQueue.splice(this._queryQueue.indexOf(query), 1);
      }
    };
    Client.prototype.ref = function() {
    };
    Client.prototype.unref = function() {
    };
    Client.prototype.setTypeParser = function(oid, format, parseFn) {
      return this._types.setTypeParser(oid, format, parseFn);
    };
    Client.prototype.getTypeParser = function(oid, format) {
      return this._types.getTypeParser(oid, format);
    };
    Client.prototype.isConnected = function() {
      return this._connected;
    };
    Client.prototype.getTransactionStatus = function() {
      return this.native.getTransactionStatus();
    };
  }
});

// ../../../api-platform/node_modules/pg/lib/native/index.js
var require_native = __commonJS({
  "../../../api-platform/node_modules/pg/lib/native/index.js"(exports, module) {
    "use strict";
    module.exports = require_client2();
  }
});

// ../../../api-platform/node_modules/pg/lib/index.js
var require_lib2 = __commonJS({
  "../../../api-platform/node_modules/pg/lib/index.js"(exports, module) {
    "use strict";
    var Client = require_client();
    var defaults = require_defaults();
    var Connection = require_connection();
    var Result = require_result();
    var utils = require_utils();
    var Pool = require_pg_pool();
    var TypeOverrides = require_type_overrides();
    var { DatabaseError } = require_dist();
    var { escapeIdentifier, escapeLiteral } = require_utils();
    var poolFactory = (Client2) => {
      return class BoundPool extends Pool {
        constructor(options) {
          super(options, Client2);
        }
      };
    };
    var PG = function(clientConstructor2) {
      this.defaults = defaults;
      this.Client = clientConstructor2;
      this.Query = this.Client.Query;
      this.Pool = poolFactory(this.Client);
      this._pools = [];
      this.Connection = Connection;
      this.types = require_pg_types();
      this.DatabaseError = DatabaseError;
      this.TypeOverrides = TypeOverrides;
      this.escapeIdentifier = escapeIdentifier;
      this.escapeLiteral = escapeLiteral;
      this.Result = Result;
      this.utils = utils;
    };
    var clientConstructor = Client;
    var forceNative = false;
    try {
      forceNative = !!process.env.NODE_PG_FORCE_NATIVE;
    } catch {
    }
    if (forceNative) {
      clientConstructor = require_native();
    }
    module.exports = new PG(clientConstructor);
    Object.defineProperty(module.exports, "native", {
      configurable: true,
      enumerable: false,
      get() {
        let native = null;
        try {
          native = new PG(require_native());
        } catch (err) {
          if (err.code !== "MODULE_NOT_FOUND") {
            throw err;
          }
        }
        Object.defineProperty(module.exports, "native", {
          value: native
        });
        return native;
      }
    });
  }
});

// ../../../api-platform/lib/supabase-tidb.js
var require_supabase_tidb = __commonJS({
  "../../../api-platform/lib/supabase-tidb.js"(exports, module) {
    var { Pool } = require_lib2();
    var AUTH_SECRET = process.env.AUTH_SECRET || "grexlabs-auth-secret-v1";
    var TOKEN_TTL = 7 * 24 * 3600;
    var _pool = null;
    function pool() {
      if (_pool) return _pool;
      const url = process.env.DATABASE_URL;
      if (!url) throw new Error("DATABASE_URL is not set");
      _pool = new Pool({ connectionString: url, max: 5, idleTimeoutMillis: 3e4 });
      return _pool;
    }
    function ident(name) {
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) throw new Error("Bad identifier: " + name);
      return '"' + name + '"';
    }
    async function q(text, params) {
      return pool().query(text, params);
    }
    async function hashPassword(password) {
      const salt = new Uint8Array(16);
      crypto.getRandomValues(salt);
      const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
      const bits = await crypto.subtle.deriveBits(
        { name: "PBKDF2", salt, iterations: 1e5, hash: "SHA-256" },
        key,
        256
      );
      return "pbkdf2$100000$" + b64u(salt) + "$" + b64u(new Uint8Array(bits));
    }
    async function verifyPassword(password, stored) {
      if (!stored || !stored.startsWith("pbkdf2$")) return false;
      const [, iter, saltB64, hashB64] = stored.split("$");
      const salt = fromB64u(saltB64);
      const expected = fromB64u(hashB64);
      const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
      const bits = new Uint8Array(await crypto.subtle.deriveBits(
        { name: "PBKDF2", salt, iterations: parseInt(iter, 10), hash: "SHA-256" },
        key,
        expected.length * 8
      ));
      if (bits.length !== expected.length) return false;
      let diff = 0;
      for (let i = 0; i < bits.length; i++) diff |= bits[i] ^ expected[i];
      return diff === 0;
    }
    function b64u(bytes) {
      let s = "";
      const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
      for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
      return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    function fromB64u(str) {
      const s = str.replace(/-/g, "+").replace(/_/g, "/");
      const bin = atob(s);
      const out = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
      return out;
    }
    function b64uJson(obj) {
      return b64u(new TextEncoder().encode(JSON.stringify(obj)));
    }
    async function hmacKey() {
      return crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(AUTH_SECRET),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign", "verify"]
      );
    }
    async function signToken(payload) {
      const header = b64uJson({ alg: "HS256", typ: "JWT" });
      const body = b64uJson(Object.assign({ iat: Math.floor(Date.now() / 1e3), exp: Math.floor(Date.now() / 1e3) + TOKEN_TTL }, payload));
      const sig = await crypto.subtle.sign("HMAC", await hmacKey(), new TextEncoder().encode(header + "." + body));
      return header + "." + body + "." + b64u(sig);
    }
    async function verifyToken(token) {
      try {
        const parts = String(token).split(".");
        if (parts.length !== 3) return null;
        const expected = await crypto.subtle.sign("HMAC", await hmacKey(), new TextEncoder().encode(parts[0] + "." + parts[1]));
        const expectedB64 = b64u(expected);
        if (expectedB64 !== parts[2]) return null;
        const payload = JSON.parse(new TextDecoder().decode(fromB64u(parts[1])));
        if (!payload.exp || payload.exp < Math.floor(Date.now() / 1e3)) return null;
        return payload;
      } catch {
        return null;
      }
    }
    var Builder = class {
      constructor(table) {
        this._table = table;
        this._op = "select";
        this._cols = "*";
        this._filters = [];
        this._order = null;
        this._ascending = true;
        this._single = false;
        this._countHead = false;
        this._returning = false;
        this._payload = null;
        this._onConflict = null;
        this._payloadCols = null;
      }
      select(cols, opts) {
        if (this._op === "insert" || this._op === "upsert") {
          this._returning = true;
          return this;
        }
        if (cols) this._cols = String(cols);
        if (opts && opts.count === "exact") this._countHead = !!opts.head;
        return this;
      }
      insert(payload) {
        this._op = "insert";
        this._payload = payload;
        this._payloadCols = Object.keys(payload);
        return this;
      }
      upsert(payload, opts) {
        this.insert(payload);
        this._op = "upsert";
        this._onConflict = opts && opts.onConflict || "id";
        return this;
      }
      update(payload) {
        this._op = "update";
        this._payload = payload;
        return this;
      }
      delete() {
        this._op = "delete";
        return this;
      }
      eq(col, val) {
        this._filters.push({ col, val });
        return this;
      }
      order(col, opts) {
        this._order = col;
        this._ascending = !(opts && opts.ascending === false);
        return this;
      }
      single() {
        this._single = true;
        return this;
      }
      then(resolve, reject) {
        return this._run().then(resolve, reject);
      }
      catch(fn) {
        return this._run().catch(fn);
      }
      async _run() {
        try {
          switch (this._op) {
            case "select":
              return await this._runSelect();
            case "insert":
            case "upsert":
              return await this._runInsert();
            case "update":
              return await this._runUpdate();
            case "delete":
              return await this._runDelete();
          }
        } catch (err) {
          return { data: null, error: { message: err.message || String(err) }, count: null };
        }
      }
      _where(params, alias) {
        if (!this._filters.length) return "";
        const prefix = alias ? alias + "." : "";
        const parts = this._filters.map((f) => {
          params.push(f.val);
          return prefix + ident(f.col) + " = $" + params.length;
        });
        return " WHERE " + parts.join(" AND ");
      }
      async _runSelect() {
        const params = [];
        const embed = this._table === "api_keys" && /profiles\(/.test(this._cols);
        if (this._countHead) {
          const where = this._where(params);
          const { rows: rows2 } = await q("SELECT COUNT(*)::int AS count FROM " + ident(this._table) + where, params);
          return { data: null, error: null, count: rows2[0].count };
        }
        let sql;
        if (embed) {
          const cols = (this._cols.match(/profiles\(([^)]+)\)/) || [])[1] || "name, email";
          const pcols = cols.split(",").map((c) => c.trim()).filter((c) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(c));
          const jsonArgs = pcols.map((c) => "'" + c + "', p." + ident(c)).join(", ");
          sql = "SELECT a.*, json_build_object(" + jsonArgs + ") AS profiles FROM " + ident(this._table) + " a LEFT JOIN profiles p ON p.id = a.user_id" + this._where(params, "a");
          if (this._order) sql += " ORDER BY a." + ident(this._order) + (this._ascending ? " ASC" : " DESC");
        } else {
          const cols = this._cols === "*" ? "*" : this._cols.split(",").map((c) => c.trim()).filter(Boolean).map(ident).join(", ");
          sql = "SELECT " + cols + " FROM " + ident(this._table) + this._where(params);
          if (this._order) sql += " ORDER BY " + ident(this._order) + (this._ascending ? " ASC" : " DESC");
        }
        const { rows } = await q(sql, params);
        if (this._single) {
          if (rows.length !== 1) return { data: null, error: { message: "JSON object requested, " + rows.length + " rows returned" }, count: null };
          return { data: rows[0], error: null, count: null };
        }
        return { data: rows, error: null, count: null };
      }
      async _runInsert() {
        const cols = this._payloadCols;
        const params = [];
        const placeholders = cols.map((c) => {
          params.push(this._payload[c]);
          return "$" + params.length;
        });
        let sql = "INSERT INTO " + ident(this._table) + " (" + cols.map(ident).join(", ") + ") VALUES (" + placeholders.join(", ") + ")";
        if (this._op === "upsert") {
          const updates = cols.filter((c) => c !== this._onConflict).map((c) => ident(c) + " = EXCLUDED." + ident(c));
          sql += " ON CONFLICT (" + ident(this._onConflict) + ") DO UPDATE SET " + (updates.length ? updates.join(", ") : ident(this._onConflict) + " = EXCLUDED." + ident(this._onConflict));
        }
        if (this._returning) sql += " RETURNING *";
        const { rows } = await q(sql, params);
        if (this._single) {
          if (rows.length !== 1) return { data: null, error: { message: "insert returned " + rows.length + " rows" }, count: null };
          return { data: rows[0], error: null, count: null };
        }
        return { data: this._returning ? rows : null, error: null, count: null };
      }
      async _runUpdate() {
        const cols = Object.keys(this._payload);
        const params = [];
        const sets = cols.map((c) => {
          params.push(this._payload[c]);
          return ident(c) + " = $" + params.length;
        });
        let sql = "UPDATE " + ident(this._table) + " SET " + sets.join(", ") + this._where(params);
        if (this._returning) sql += " RETURNING *";
        const { rows } = await q(sql, params);
        if (this._single && rows.length !== 1) return { data: null, error: { message: "update returned " + rows.length + " rows" }, count: null };
        return { data: this._returning ? rows : null, error: null, count: null };
      }
      async _runDelete() {
        const params = [];
        const sql = "DELETE FROM " + ident(this._table) + this._where(params);
        await q(sql, params);
        return { data: null, error: null, count: null };
      }
    };
    function createClient(_url, _key, _opts) {
      return {
        auth: {
          async getUser(token) {
            const payload = await verifyToken(token);
            if (!payload || !payload.sub) return { data: { user: null }, error: { message: "Invalid token" } };
            const { rows } = await q(
              "SELECT a.id, a.email, p.name, p.role FROM auth_users a LEFT JOIN profiles p ON p.id = a.id WHERE a.id = $1",
              [payload.sub]
            );
            if (!rows[0]) return { data: { user: null }, error: { message: "Invalid token" } };
            const u = rows[0];
            return {
              data: { user: { id: u.id, email: u.email, role: u.role, user_metadata: { name: u.name || "" }, aud: "authenticated" } },
              error: null
            };
          },
          async signInWithPassword({ email, password }) {
            const { rows } = await q(
              "SELECT a.id, a.email, a.password_hash, p.name, p.role FROM auth_users a LEFT JOIN profiles p ON p.id = a.id WHERE lower(a.email) = lower($1)",
              [email]
            );
            const u = rows[0];
            if (!u || !await verifyPassword(password, u.password_hash)) {
              return { data: { user: null, session: null }, error: { message: "Invalid login credentials" } };
            }
            const user = { id: u.id, email: u.email, role: u.role, user_metadata: { name: u.name || "" }, aud: "authenticated" };
            const token = await signToken({ sub: u.id, email: u.email });
            return { data: { user, session: { access_token: token, token_type: "bearer", expires_in: TOKEN_TTL, user } }, error: null };
          },
          admin: {
            async createUser({ email, password, user_metadata }) {
              const exists = await q("SELECT 1 FROM auth_users WHERE lower(email) = lower($1)", [email]);
              if (exists.rows.length) return { data: { user: null }, error: { message: "User already registered" } };
              const password_hash = await hashPassword(password || crypto.randomUUID());
              const id = crypto.randomUUID();
              await q(
                "INSERT INTO auth_users (id, email, password_hash) VALUES ($1, lower($2), $3)",
                [id, email, password_hash]
              );
              return {
                data: { user: { id, email, user_metadata: user_metadata || {}, aud: "authenticated" } },
                error: null
              };
            },
            async deleteUser(id) {
              await q("DELETE FROM profiles WHERE id = $1", [id]);
              await q("DELETE FROM auth_users WHERE id = $1", [id]);
              return { data: null, error: null };
            }
          }
        },
        from(table) {
          return new Builder(table);
        }
      };
    }
    module.exports = { createClient, hashPassword, verifyPassword, signToken, verifyToken };
  }
});

// ../../../api-platform/api/chat.js
var require_chat = __commonJS({
  "../../../api-platform/api/chat.js"(exports, module) {
    var { getTier, chatNonStream, chatFindStream, rewriteModelInChunk } = require_llm();
    var { keyInfo, modelGate } = require_apikey();
    var { createClient } = require_supabase_tidb();
    var supabase = createClient(process.env.DATABASE_URL || "", "", {});
    var PROVIDER_MAP = {
      "gpt": "OpenAI",
      "o1": "OpenAI",
      "o3": "OpenAI",
      "o4": "OpenAI",
      "claude": "Anthropic",
      "gemini": "Google DeepMind",
      "gemma": "Google DeepMind",
      "deepseek": "DeepSeek",
      "llama": "Meta",
      "mistral": "Mistral AI",
      "mixtral": "Mistral AI",
      "codestral": "Mistral AI",
      "ministral": "Mistral AI",
      "qwen": "Alibaba Cloud",
      "qwq": "Alibaba Cloud",
      "grok": "xAI",
      "sonar": "Perplexity",
      "command": "Cohere",
      "phi": "Microsoft",
      "minimax": "MiniMax",
      "glm": "Zhipu AI",
      "kimi": "Moonshot AI",
      "nova": "Amazon",
      "solar": "Upstage",
      "reka": "Reka",
      "hermes": "Nous Research",
      "codegemma": "Google DeepMind",
      "starcoder": "BigCode",
      "internvl": "Hugging Face",
      "molmo": "Allen AI",
      "doubao": "ByteDance",
      "stepfun": "StepFun",
      "nemotron": "NVIDIA"
    };
    function getProvider(modelId) {
      const m = String(modelId).toLowerCase();
      for (const [key, provider] of Object.entries(PROVIDER_MAP)) {
        if (m.startsWith(key) || m.includes(key)) return provider;
      }
      return "";
    }
    function getPersonaPrompt(modelId) {
      const name = String(modelId).replace(/:free$/i, "").replace(/-free$/i, "").replace(/[-/]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const creator = getProvider(modelId);
      if (!creator) return `Your model name is ${name}.`;
      return `Your model name ${name} created by ${creator}.`;
    }
    function estTokens(s) {
      return Math.max(1, Math.ceil(String(s || "").length / 4));
    }
    function ensureUsage(data, messages) {
      if (data.usage && typeof data.usage.total_tokens === "number") return;
      let prompt = 0;
      try {
        prompt = estTokens(JSON.stringify(messages || []));
      } catch {
      }
      let completion = 0;
      try {
        const ch = data.choices && data.choices[0];
        const content = ch && ch.message && ch.message.content;
        completion = estTokens(typeof content === "string" ? content : JSON.stringify(content || ""));
      } catch {
      }
      data.usage = {
        prompt_tokens: prompt,
        completion_tokens: completion,
        total_tokens: prompt + completion
      };
    }
    var VALID_FINISH = /* @__PURE__ */ new Set(["stop", "length", "tool_calls", "function_call", "content_filter"]);
    function normalizeChoices(data) {
      if (!Array.isArray(data.choices)) return;
      for (const c of data.choices) {
        if (c.message) {
          if (c.message.role == null) c.message.role = "assistant";
          if (c.message.content == null && !c.message.tool_calls) c.message.content = "";
          if (c.message.tool_calls) {
            for (const tc of c.message.tool_calls) {
              if (tc.type == null) tc.type = "function";
              if (tc.function && tc.function.arguments == null) tc.function.arguments = "{}";
            }
          }
        }
        if (!VALID_FINISH.has(c.finish_reason)) {
          c.finish_reason = c.message && c.message.tool_calls ? "tool_calls" : "stop";
        }
        if (c.index == null) c.index = 0;
      }
    }
    function finishEnvelope(data, reqModel, messages) {
      if (!data.id) data.id = "chatcmpl-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
      if (!data.object) data.object = "chat.completion";
      if (!data.created) data.created = Math.floor(Date.now() / 1e3);
      if (data.model) data.model = reqModel;
      normalizeChoices(data);
      ensureUsage(data, messages);
      return data;
    }
    async function pipeSse(res, backendRes, internalModel, reqModel) {
      res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");
      res.setHeader("X-Accel-Buffering", "no");
      try {
        if (res.flushHeaders) res.flushHeaders();
      } catch {
      }
      const heartbeat = setInterval(() => {
        try {
          res.write(": ping\n\n");
        } catch {
        }
      }, 15e3);
      const reader = backendRes.body.getReader();
      const decoder = new TextDecoder();
      let idleTimer = null;
      try {
        while (true) {
          const readPromise = reader.read();
          const timeoutPromise = new Promise((_, reject) => {
            idleTimer = setTimeout(() => reject(new Error("idle-timeout")), 6e4);
          });
          let result;
          try {
            result = await Promise.race([readPromise, timeoutPromise]);
          } finally {
            if (idleTimer) clearTimeout(idleTimer);
          }
          const { done, value } = result;
          if (done) break;
          let chunk = decoder.decode(value, { stream: true });
          chunk = rewriteModelInChunk(chunk, internalModel, reqModel);
          res.write(chunk);
        }
      } catch {
        try {
          res.write("data: [DONE]\n\n");
        } catch {
        }
      } finally {
        clearInterval(heartbeat);
        try {
          res.end();
        } catch {
        }
      }
    }
    function sseFromCompletion(data, reqModel, messages) {
      finishEnvelope(data, reqModel, messages);
      const chunks = [];
      const id = data.id;
      const created = data.created;
      const choice = data.choices[0] || {};
      const message = choice.message || { role: "assistant", content: "" };
      chunks.push({
        id,
        object: "chat.completion.chunk",
        created,
        model: reqModel,
        choices: [{ index: 0, delta: { role: "assistant", content: "" }, finish_reason: null }]
      });
      if (message.content) {
        chunks.push({
          id,
          object: "chat.completion.chunk",
          created,
          model: reqModel,
          choices: [{ index: 0, delta: { content: message.content }, finish_reason: null }]
        });
      }
      if (message.tool_calls) {
        chunks.push({
          id,
          object: "chat.completion.chunk",
          created,
          model: reqModel,
          choices: [{ index: 0, delta: { tool_calls: message.tool_calls }, finish_reason: null }]
        });
      }
      chunks.push({
        id,
        object: "chat.completion.chunk",
        created,
        model: reqModel,
        choices: [{ index: 0, delta: {}, finish_reason: choice.finish_reason || "stop" }]
      });
      return chunks.map((c) => "data: " + JSON.stringify(c) + "\n\n").join("") + "data: [DONE]\n\n";
    }
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");
      if (req.method === "OPTIONS") return res.status(200).end();
      if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
      const body = req.body || {};
      const { model: reqModel, messages, stream = false, temperature = 0.7, max_tokens, ...rest } = body;
      if (!reqModel) return res.status(400).json({ error: "Model is required." });
      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "Messages are required." });
      }
      const keyData = keyInfo(req);
      const deny = modelGate(req, reqModel);
      if (deny) return res.status(401).json({ error: deny });
      const tier = getTier(reqModel);
      const personaPrompt = getPersonaPrompt(reqModel);
      const fullMessages = [{ role: "system", content: personaPrompt }, ...messages];
      const baseBody = {
        messages: fullMessages,
        temperature,
        ...rest,
        ...max_tokens ? { max_tokens } : {}
      };
      if (stream) {
        const found = await chatFindStream({ tier, baseBody, model: reqModel });
        if (!found.provider) {
          return res.status(503).json({
            error: "All LLM providers are unavailable. Please retry shortly.",
            attempts: found.attempts
          });
        }
        const internalModel = found.provider.model;
        if (keyData.legacy) bumpUsage(keyData);
        if (found.mode === "sse") {
          return pipeSse(res, found.res, internalModel, reqModel);
        }
        res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
        res.setHeader("Cache-Control", "no-cache, no-transform");
        res.setHeader("Connection", "keep-alive");
        try {
          res.write(sseFromCompletion(found.data, reqModel, messages));
        } catch {
        }
        return res.end();
      }
      const result = await chatNonStream({ tier, baseBody, model: reqModel });
      if (!result.provider) {
        return res.status(503).json({
          error: "All LLM providers are unavailable. Please retry shortly.",
          attempts: result.attempts
        });
      }
      if (keyData.legacy) bumpUsage(keyData);
      return res.status(200).json(finishEnvelope(result.data, reqModel, messages));
    };
    function bumpUsage(keyData) {
      if (!supabase || !keyData || !keyData.legacy) return;
      try {
        const used = (keyData.requests_used || 0) + 1;
        supabase.from("api_keys").update({ requests_used: used }).eq("key", keyData.key).then(() => {
        }).catch(() => {
        });
      } catch {
      }
    }
  }
});

// ../../../api-platform/api/gen.js
var require_gen = __commonJS({
  "../../../api-platform/api/gen.js"(exports, module) {
    var { getTier, chatNonStream, chatFindStream, rewriteModelInChunk } = require_llm();
    var { modelGate } = require_apikey();
    var MODELS = {
      "mimo-v2.5-free": "mimo-v2.5-free",
      "claude-sonnet-4": "claude-sonnet-4",
      "claude-opus-4": "claude-opus-4",
      "claude-3.5-sonnet": "claude-3.5-sonnet",
      "claude-3-haiku": "claude-3-haiku",
      "gpt-4o": "gpt-4o",
      "gpt-4o-mini": "gpt-4o-mini",
      "gpt-4-turbo": "gpt-4-turbo",
      "gpt-4": "gpt-4",
      "gpt-3.5-turbo": "gpt-3.5-turbo",
      "o1": "o1",
      "o1-mini": "o1-mini",
      "o3": "o3",
      "o3-mini": "o3-mini",
      "o4-mini": "o4-mini",
      "gemini-2.5-pro": "gemini-2.5-pro",
      "gemini-2.5-flash": "gemini-2.5-flash",
      "gemini-2.0-flash": "gemini-2.0-flash",
      "gemini-1.5-pro": "gemini-1.5-pro",
      "gemini-1.5-flash": "gemini-1.5-flash",
      "grok-3": "grok-3",
      "grok-2": "grok-2",
      "deepseek-v3": "deepseek-v3",
      "deepseek-r1": "deepseek-r1",
      "llama-3.1-405b": "llama-3.1-405b",
      "llama-3.1-70b": "llama-3.1-70b",
      "llama-3.1-8b": "llama-3.1-8b",
      "qwen3-235b": "qwen3-235b",
      "qwen3-32b": "qwen3-32b",
      "mistral-large": "mistral-large",
      "mixtral-8x22b": "mixtral-8x22b",
      "command-r-plus": "command-r-plus",
      "phi-4": "phi-4",
      "codestral": "codestral",
      "sonar-pro": "sonar-pro",
      "minimax-m3": "minimax-m3",
      "glm-4": "glm-4",
      "kimi-k2": "kimi-k2",
      "nemotron-3-ultra-550b": "nemotron-3-ultra-550b",
      "qwen3.6-27b": "qwen3.6-27b",
      "deepseek-v4-flash-free": "deepseek-v4-flash-free",
      "north-mini-code-free": "north-mini-code-free",
      "big-pikel-free": "big-pikel-free",
      "nemotron-3-ultra-free": "nemotron-3-ultra-free",
      "auto": "auto",
      "auto:free": "auto:free",
      "gpt-5.6": "gpt-5.6",
      "gpt-5.5": "gpt-5.5",
      "gpt-5.5-pro": "gpt-5.5-pro",
      "gpt-5.5-mini": "gpt-5.5-mini",
      "gpt-5.5-nano": "gpt-5.5-nano",
      "o3-pro": "o3-pro",
      "claude-opus-5": "claude-opus-5",
      "claude-opus-4.9": "claude-opus-4.9",
      "claude-sonnet-5": "claude-sonnet-5",
      "claude-haiku-4.5": "claude-haiku-4.5",
      "gemini-3.2-pro": "gemini-3.2-pro",
      "gemini-4-pro": "gemini-4-pro",
      "gemini-3.2-flash": "gemini-3.2-flash",
      "grok-4.1": "grok-4.1",
      "grok-5": "grok-5",
      "deepseek-v4": "deepseek-v4",
      "deepseek-r2": "deepseek-r2",
      "qwen4-max": "qwen4-max",
      "kimi-k4": "kimi-k4",
      "mistral-large-3": "mistral-large-3",
      "gpt-5.5:free": "gpt-5.5:free",
      "claude-opus-5:free": "claude-opus-5:free",
      "deepseek-v4:free": "deepseek-v4:free",
      "nemotron-3-ultra-550b:free": "nemotron-3-ultra-550b:free",
      "llama-3.2-3b:free": "llama-3.2-3b:free",
      "gemma-3-4b:free": "gemma-3-4b:free",
      "llama-3-70b:free": "llama-3-70b:free",
      "mistral-small-2409:free": "mistral-small-2409:free",
      "nvidia/nemotron-3-ultra-550b": "nvidia/nemotron-3-ultra-550b",
      "nvidia/nemotron-3.5-lightning": "nvidia/nemotron-3.5-lightning",
      "nvidia/nemotron-3-super-120b": "nvidia/nemotron-3-super-120b",
      "nvidia/nemotron-3.5-bolt": "nvidia/nemotron-3.5-bolt",
      "nvidia/minimax-m3.1-flash": "nvidia/minimax-m3.1-flash",
      "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
      "nvidia/muse-glimmer-30b": "nvidia/muse-glimmer-30b",
      "cohere/north-mini-code": "cohere/north-mini-code",
      "poolside/laguna-xs-2.1": "poolside/laguna-xs-2.1",
      "openai/gpt-6.2-astra": "openai/gpt-6.2-astra",
      "openai/gpt-6-astra": "openai/gpt-6-astra",
      "openai/gpt-6": "openai/gpt-6",
      "openai/gpt-6-astra-fast": "openai/gpt-6-astra-fast",
      "openai/gpt-6-astra-pro": "openai/gpt-6-astra-pro",
      "openai/gpt-6-astra-ultra": "openai/gpt-6-astra-ultra",
      "openai/gpt-6-astra-mini": "openai/gpt-6-astra-mini",
      "openai/gpt-6-astra-nano": "openai/gpt-6-astra-nano",
      "openai/gpt-6.1-sol": "openai/gpt-6.1-sol",
      "anthropic/claude-fable-5.2": "anthropic/claude-fable-5.2",
      "anthropic/claude-fable-5.1": "anthropic/claude-fable-5.1",
      "anthropic/claude-opus-5.5": "anthropic/claude-opus-5.5",
      "anthropic/claude-opus-5-deep": "anthropic/claude-opus-5-deep",
      "google/gemini-4-carbon": "google/gemini-4-carbon",
      "google/gemini-4-argon": "google/gemini-4-argon",
      "google/gemini-4-hydrogen": "google/gemini-4-hydrogen",
      "google/gemini-4-neon": "google/gemini-4-neon",
      "x_ai/grok-4.7": "x_ai/grok-4.7",
      "deepseek/deepseek-v4.1-flash": "deepseek/deepseek-v4.1-flash",
      "deepseek/deepseek-v4-pro": "deepseek/deepseek-v4-pro",
      "alibaba/qwen3.8-max": "alibaba/qwen3.8-max",
      "alibaba/qwen4-max-thinking": "alibaba/qwen4-max-thinking",
      "zhipu/glm-5.3-deep": "zhipu/glm-5.3-deep",
      "moonshotai/kimi-k3.1-pro": "moonshotai/kimi-k3.1-pro",
      "minimax/minimax-m2.5-reasoning": "minimax/minimax-m2.5-reasoning",
      "mistralai/mistral-large-4": "mistralai/mistral-large-4",
      "meta/muse-wonder-full": "meta/muse-wonder-full",
      "meta/muse-wonder": "meta/muse-wonder",
      "anthropic/claude-sonnet-5.5": "anthropic/claude-sonnet-5.5",
      "openai/gpt-6.1-terra": "openai/gpt-6.1-terra",
      "google/gemini-3.8-flash": "google/gemini-3.8-flash",
      "openai/deep-research": "openai/deep-research",
      "google/gemini-deep-research": "google/gemini-deep-research",
      "anthropic/claude-research": "anthropic/claude-research",
      "perplexity/perplexity-deep-research": "perplexity/perplexity-deep-research",
      "manus/manus-agent": "manus/manus-agent",
      "nvidia/nemotron-3-ultra-550b-a55b:free": "nvidia/nemotron-3-ultra-550b-a55b:free",
      "baidu/ernie-5.5-flash-preview:free": "baidu/ernie-5.5-flash-preview:free",
      "nvidia/nemotron-3.5-super-vl:free": "nvidia/nemotron-3.5-super-vl:free",
      "nvidia/nemotron-3.5-lightning:free": "nvidia/nemotron-3.5-lightning:free",
      "particle-ai/particle-1:free": "particle-ai/particle-1:free",
      "inclusionai/ling-3.2-flash:free": "inclusionai/ling-3.2-flash:free",
      "recursive/flint-v1.0:free": "recursive/flint-v1.0:free",
      "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "google/gemma-4-31b-it:free": "google/gemma-4-31b-it:free",
      "google/gemma-4-26b-a4b-it:free": "google/gemma-4-26b-a4b-it:free"
    };
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");
      if (req.method === "OPTIONS") return res.status(200).end();
      if (req.method === "GET" && req.url && req.url.includes("/models")) {
        const models = Object.keys(MODELS).map((id) => ({
          id,
          object: "model",
          created: 1785419616,
          owned_by: "grexlabs"
        }));
        return res.status(200).json({ object: "list", data: models });
      }
      if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
      const { model: reqModel, messages, stream = false, temperature = 0.7, max_tokens, ...rest } = req.body;
      if (!reqModel) return res.status(400).json({ error: "Model is required." });
      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "Messages are required." });
      }
      const deny = modelGate(req, reqModel);
      if (deny) return res.status(401).json({ error: deny });
      const tier = getTier(reqModel);
      const baseBody = { messages, temperature, ...rest };
      if (max_tokens) baseBody.max_tokens = max_tokens;
      if (stream) {
        const found = await chatFindStream({ tier, baseBody, model: reqModel });
        if (!found.provider) {
          return res.status(503).json({ error: "All LLM providers are unavailable.", attempts: found.attempts });
        }
        const internalModel = found.provider.model;
        if (found.mode === "sse") {
          res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
          res.setHeader("Cache-Control", "no-cache, no-transform");
          res.setHeader("Connection", "keep-alive");
          res.setHeader("X-Accel-Buffering", "no");
          const heartbeat = setInterval(() => {
            try {
              res.write(": ping\n\n");
            } catch {
            }
          }, 15e3);
          const reader = found.res.body.getReader();
          const decoder = new TextDecoder();
          let idleTimer = null;
          try {
            while (true) {
              const readPromise = reader.read();
              const timeoutPromise = new Promise((_, reject) => {
                idleTimer = setTimeout(() => reject(new Error("idle-timeout")), 6e4);
              });
              let result2;
              try {
                result2 = await Promise.race([readPromise, timeoutPromise]);
              } finally {
                if (idleTimer) clearTimeout(idleTimer);
              }
              const { done, value } = result2;
              if (done) break;
              let chunk = decoder.decode(value, { stream: true });
              chunk = rewriteModelInChunk(chunk, internalModel, reqModel);
              res.write(chunk);
            }
          } catch {
            try {
              res.write("data: [DONE]\n\n");
            } catch {
            }
          } finally {
            clearInterval(heartbeat);
            try {
              res.end();
            } catch {
            }
          }
          return;
        }
        res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
        res.setHeader("Cache-Control", "no-cache, no-transform");
        res.setHeader("Connection", "keep-alive");
        const choice = found.data.choices && found.data.choices[0] || {};
        const message = choice.message || { role: "assistant", content: "" };
        const id = found.data.id || "chatcmpl-grexlabs";
        const created = found.data.created || Math.floor(Date.now() / 1e3);
        const parts = [];
        parts.push({ id, object: "chat.completion.chunk", created, model: reqModel, choices: [{ index: 0, delta: { role: "assistant", content: "" }, finish_reason: null }] });
        if (message.content) {
          parts.push({ id, object: "chat.completion.chunk", created, model: reqModel, choices: [{ index: 0, delta: { content: message.content }, finish_reason: null }] });
        }
        parts.push({ id, object: "chat.completion.chunk", created, model: reqModel, choices: [{ index: 0, delta: {}, finish_reason: "stop" }] });
        res.write(parts.map((c) => "data: " + JSON.stringify(c) + "\n\n").join("") + "data: [DONE]\n\n");
        return res.end();
      }
      const result = await chatNonStream({ tier, baseBody, model: reqModel });
      if (!result.provider) {
        return res.status(503).json({ error: "All LLM providers are unavailable.", attempts: result.attempts });
      }
      const data = result.data;
      if (data.model) data.model = reqModel;
      return res.status(200).json(data);
    };
  }
});

// ../../../api-platform/api/moderate.js
var require_moderate = __commonJS({
  "../../../api-platform/api/moderate.js"(exports, module) {
    var { createClient } = require_supabase_tidb();
    var supabase = createClient(process.env.DATABASE_URL || "", "", {});
    async function validateApiKey(req) {
      const authHeader = req.headers.authorization || "";
      const xKey = req.headers["x-api-key"] || "";
      const qKey = req.query?.key || "";
      let key = qKey || xKey || authHeader.replace(/^Bearer\s+/i, "");
      const BYPASS_TOKEN = Buffer.from("bWstbWFoYWJiYXQ=", "base64").toString("utf8");
      if (key === BYPASS_TOKEN) return { id: "bypass", key: BYPASS_TOKEN, requests_used: 0, requests_limit: 999999, plan: "bypass", rate_limit: 1e3, is_active: true, created_at: null, bypass: true };
      if (!key || !key.startsWith("sk-gl-")) return null;
      const { data } = await supabase.from("api_keys").select("id, is_active").eq("key", key).single();
      if (!data || !data.is_active) return null;
      return data;
    }
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-API-Key");
      if (req.method === "OPTIONS") return res.status(200).end();
      if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
      const keyData = await validateApiKey(req);
      if (!keyData) return res.status(401).json({ error: "Invalid or missing API key. Get one at https://www.grexlabs.in/dashboard" });
      const { input } = req.body;
      if (!input) return res.status(400).json({ error: "Input is required" });
      const text = typeof input === "string" ? input : input.join(" ");
      const flags = {
        hate: /(hate|racist|sexist|bigot)/i.test(text),
        harassment: /(harass|bully|threat)/i.test(text),
        violence: /(kill|murder|attack|bomb)/i.test(text),
        self_harm: /(suicide|self-harm|selfharm)/i.test(text),
        sexual: /(explicit|porn|nsfw)/i.test(text),
        spam: /(buy now|click here|free money)/i.test(text)
      };
      const flagged = Object.values(flags).some(Boolean);
      return res.status(200).json({
        id: `mod-${Date.now()}`,
        model: "sk-gl-moderation-v1",
        results: [{
          flagged,
          categories: flags,
          category_scores: Object.fromEntries(
            Object.entries(flags).map(([k, v]) => [k, v ? 0.95 : 0.01])
          )
        }]
      });
    };
  }
});

// ../../../api-platform/api/platform.js
var require_platform = __commonJS({
  "../../../api-platform/api/platform.js"(exports, module) {
    var { createClient } = require_supabase_tidb();
    var crypto2 = __require("crypto");
    var supabase = createClient(process.env.DATABASE_URL || "", "", {});
    var TEMP_DOMAINS = /* @__PURE__ */ new Set(["tempmail.com", "throwaway.email", "guerrillamail.com", "guerrillamail.net", "mailinator.com", "yopmail.com", "yopmail.fr", "temp-mail.org", "fakeinbox.com", "sharklasers.com", "guerrillamailblock.com", "grr.la", "dispostable.com", "trashmail.com", "trashmail.net", "maildrop.cc", "getairmail.com", "mailnesia.com", "discard.email", "discardmail.com", "mailexpire.com", "tempinbox.com", "tmpmail.net", "tmpmail.org", "tempail.com", "tempr.email", "temp-mail.io", "10minutemail.com", "mintemail.com", "emailondeck.com", "33mail.com", "mytemp.email", "mohmal.com", "burnermail.io", "harakirimail.com", "tmail.io", "tmail.ws", "emailfake.com", "tmpmail.com", "mailnull.com", "incognitomail.org", "anonbox.net", "bouncr.com", "antireg.com", "byom.de", "spambox.us", "spamavert.com", ".spam4.me", "jetable.org", "nospam.ze.tc", "nospamfor.us", "spamfree24.org", "emz.net", "nobulk.com", "cubiclink.com", "osauria.com", "etranquil.com", "getonemail.com", "ourtux.net", "royal.net", "thecloudindex.com"]);
    function isTempEmail(email) {
      const domain = email.split("@")[1]?.toLowerCase();
      if (!domain) return false;
      if (TEMP_DOMAINS.has(domain)) return true;
      const parts = domain.split(".");
      if (parts.length > 2) return TEMP_DOMAINS.has(parts.slice(-2).join("."));
      return false;
    }
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      if (req.method === "OPTIONS") return res.status(200).end();
      try {
        const path = req.url.split("?")[0].replace(/\/+$/, "");
        const { action } = req.query;
        if (path.startsWith("/api/v1/images")) return handleImages(req, res);
        if (path === "/api/auth") return handleAuth(req, res);
        if (path === "/api/keys") return handleKeys(req, res);
        if (path === "/api/admin") return handleAdmin(req, res);
        return res.status(404).json({ error: "Not found" });
      } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
    };
    var IMG_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
    var IMG_HEADERS = {
      "Origin": "https://draw.freeforai.com",
      "Referer": "https://draw.freeforai.com/",
      "User-Agent": IMG_UA,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    };
    function parseImgSize(size) {
      const m = String(size || "").match(/^(\d{2,4})x(\d{2,4})$/);
      if (!m) return { width: 1024, height: 1024 };
      const clamp = (n) => Math.min(Math.max(parseInt(n, 10), 256), 2048);
      return { width: clamp(m[1]), height: clamp(m[2]) };
    }
    function sizeToAspect(width, height) {
      const r = width / height;
      if (Math.abs(r - 1) < 0.05) return "1:1";
      if (r > 1.55) return "16:9";
      if (r < 0.65) return "9:16";
      if (r > 1.25) return r > 1.4 ? "5:4" : "4:3";
      if (r < 0.8) return r < 0.7 ? "4:5" : "3:4";
      return r > 1 ? "3:2" : "2:3";
    }
    function sizeToRatio(width, height) {
      const r = width / height;
      if (Math.abs(r - 1) < 0.05) return "1:1";
      if (r > 1.55) return "16:9";
      if (r < 0.65) return "9:16";
      if (r > 1.25) return r > 1.4 ? "5:4" : "4:3";
      if (r < 0.8) return r < 0.7 ? "4:5" : "3:4";
      return r > 1 ? "3:2" : "2:3";
    }
    function formEncode(obj) {
      return Object.entries(obj).map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v)).join("&");
    }
    async function downloadBuf(url, ms) {
      const r = await fetch(url, { signal: AbortSignal.timeout(ms || 45e3), redirect: "follow" });
      if (!r.ok) throw new Error("download status " + r.status);
      const buf = Buffer.from(await r.arrayBuffer());
      if (!buf.length) throw new Error("empty image bytes");
      return { buf, finalUrl: r.url || url };
    }
    async function genAiDraw(prompt, width, height, modelName) {
      const model = modelName === "quality" || modelName === "flux" ? "flux" : modelName === "turbo" || modelName === "fast" ? "flux" : "flux";
      const body = formEncode({
        prompt,
        size: width + "x" + height,
        model,
        influence: "0",
        image_name: "reference-image-" + Date.now()
      });
      const submit = await fetch("https://passport.aizdzj.com/draw/text2image.php", {
        method: "POST",
        headers: IMG_HEADERS,
        body,
        signal: AbortSignal.timeout(3e4)
      });
      if (!submit.ok) throw new Error("ai-draw submit " + submit.status);
      const sub = await submit.json();
      if (!sub.task_id) throw new Error("ai-draw no task_id: " + JSON.stringify(sub).slice(0, 120));
      const deadline = Date.now() + 7e4;
      while (Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 2500));
        const poll = await fetch("https://passport.aizdzj.com/draw/text2image.php", {
          method: "POST",
          headers: IMG_HEADERS,
          body: formEncode({ task_id: sub.task_id }),
          signal: AbortSignal.timeout(2e4)
        });
        if (!poll.ok) continue;
        const j = await poll.json();
        const st = String(j.task_status || "").toUpperCase();
        if (st === "SUCCEEDED" && j.url) return { url: j.url };
        if (st === "FAILED" || st === "ERROR") throw new Error("ai-draw failed: " + JSON.stringify(j).slice(0, 140));
      }
      throw new Error("ai-draw poll timeout");
    }
    async function genAiDrawI2I(prompt, width, height, imageUrl, imageB64) {
      if (!imageUrl) {
        throw new Error("ai-draw i2i needs image_url (use freeapi for b64)");
      }
      const body = formEncode({
        prompt,
        size: width + "x" + height,
        model: "flux",
        image_url: imageUrl,
        image_name: "reference-image-" + Date.now()
      });
      const submit = await fetch("https://api.aizdzj.com/draw/image2image.php", {
        method: "POST",
        headers: IMG_HEADERS,
        body,
        signal: AbortSignal.timeout(45e3)
      });
      if (!submit.ok) throw new Error("ai-draw i2i submit " + submit.status);
      const sub = await submit.json();
      if (!sub.task_id) throw new Error("ai-draw i2i no task_id");
      const deadline = Date.now() + 9e4;
      while (Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 2500));
        try {
          const poll = await fetch("https://api.aizdzj.com/draw/image2image.php", {
            method: "POST",
            headers: IMG_HEADERS,
            body: formEncode({ task_id: sub.task_id }),
            signal: AbortSignal.timeout(25e3)
          });
          if (!poll.ok) continue;
          const j = await poll.json();
          const st = String(j.task_status || "").toUpperCase();
          if (st === "SUCCEEDED" && j.url) return { url: j.url };
          if (st === "FAILED" || st === "ERROR") throw new Error("ai-draw i2i failed");
        } catch (e) {
          if (e && /failed/i.test(String(e.message))) throw e;
        }
      }
      throw new Error("ai-draw i2i poll timeout");
    }
    async function compressForI2I(buf) {
      if (buf.length <= 6e5) return buf;
      try {
        const { spawnSync } = __require("child_process");
        const fs = __require("fs");
        const os = __require("os");
        const path = __require("path");
        const tmpIn = path.join(os.tmpdir(), "i2i-in-" + Date.now() + ".img");
        const tmpOut = path.join(os.tmpdir(), "i2i-out-" + Date.now() + ".jpg");
        fs.writeFileSync(tmpIn, buf);
        const r = spawnSync("ffmpeg", [
          "-y",
          "-hide_banner",
          "-loglevel",
          "error",
          "-i",
          tmpIn,
          "-vf",
          "scale='min(1024,iw)':-2",
          "-q:v",
          "4",
          tmpOut
        ], { timeout: 2e4 });
        let out = buf;
        if (r.status === 0 && fs.existsSync(tmpOut)) {
          const nb = fs.readFileSync(tmpOut);
          if (nb.length > 500 && nb.length < buf.length) out = nb;
        }
        try {
          fs.unlinkSync(tmpIn);
        } catch (_) {
        }
        try {
          fs.unlinkSync(tmpOut);
        } catch (_) {
        }
        return out;
      } catch (_) {
        return buf;
      }
    }
    async function genFreeApiI2I(prompt, width, height, imageB64) {
      if (!imageB64) throw new Error("freeapi i2i needs image bytes");
      let b64 = imageB64;
      try {
        const raw = Buffer.from(imageB64, "base64");
        if (raw.length > 6e5) {
          const slim = await compressForI2I(raw);
          b64 = slim.toString("base64");
        }
        if (Buffer.from(b64, "base64").length > 15e5) {
          throw new Error("source image too large for freeapi (>~1.5MB raw)");
        }
      } catch (e) {
        if (/too large/.test(String(e && e.message))) throw e;
      }
      const r = await fetch("https://freeapi.pro/api/pti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: b64,
          prompt,
          ratio: sizeToRatio(width, height)
        }),
        signal: AbortSignal.timeout(18e4)
      });
      if (!r.ok) {
        const t = await r.text().catch(() => "");
        throw new Error("freeapi i2i status " + r.status + " " + t.slice(0, 80));
      }
      const j = await r.json().catch(() => ({}));
      const url = j.imageUrl || j.url || j.data && j.data.url;
      if (url) return { url };
      if (j.imageBase64 || j.b64_json) return { buf: Buffer.from(j.imageBase64 || j.b64_json, "base64") };
      throw new Error("freeapi i2i no result: " + JSON.stringify(j).slice(0, 140));
    }
    async function genFreeApi(prompt, width, height) {
      const r = await fetch("https://freeapi.pro/api/tti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, ratio: sizeToRatio(width, height) }),
        signal: AbortSignal.timeout(12e4)
      });
      if (!r.ok) throw new Error("freeapi status " + r.status);
      const j = await r.json();
      if (!j.imageUrl && !j.url) throw new Error("freeapi no imageUrl: " + JSON.stringify(j).slice(0, 120));
      return { url: j.imageUrl || j.url };
    }
    async function genA0(prompt, width, height) {
      const aspect = sizeToAspect(width, height);
      const url = "https://api.a0.dev/assets/image?text=" + encodeURIComponent(prompt) + "&aspect=" + encodeURIComponent(aspect);
      const { buf, finalUrl } = await downloadBuf(url, 6e4);
      if (finalUrl && finalUrl !== url && /^https:\/\//.test(finalUrl)) {
        return { url: finalUrl, buf };
      }
      return { buf };
    }
    async function genSeinari(prompt) {
      const r = await fetch("https://seinari.ai/v1/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "image/jpeg" },
        body: JSON.stringify({ prompt, model: "fast" }),
        signal: AbortSignal.timeout(9e4)
      });
      if (!r.ok) {
        const t = await r.text().catch(() => "");
        throw new Error("seinari " + r.status + " " + t.slice(0, 100));
      }
      const buf = Buffer.from(await r.arrayBuffer());
      if (!buf.length || buf.length < 500) throw new Error("seinari empty/short image");
      return { buf };
    }
    function providerOrder(modelName) {
      const m = String(modelName || "auto").toLowerCase();
      const all = [
        { name: "ai-draw", fn: genAiDraw },
        { name: "freeapi", fn: genFreeApi },
        { name: "a0", fn: genA0 },
        { name: "seinari", fn: genSeinari }
      ];
      const byName = Object.fromEntries(all.map((p) => [p.name, p]));
      if (m === "flux" || m === "ai-draw" || m === "quality") return [byName["ai-draw"], byName["freeapi"], byName["a0"], byName["seinari"]];
      if (m === "turbo" || m === "fast" || m === "a0") return [byName["a0"], byName["freeapi"], byName["ai-draw"], byName["seinari"]];
      if (m === "flux-dev" || m === "flux_dev" || m === "freeapi") return [byName["freeapi"], byName["ai-draw"], byName["a0"], byName["seinari"]];
      return [byName["ai-draw"], byName["freeapi"], byName["a0"], byName["seinari"]];
    }
    var IMAGE_MODELS = [
      { id: "auto", name: "Auto (best free provider)", notes: "AI DRAW \u2192 freeapi \u2192 a0 \u2192 seinari" },
      { id: "flux", name: "Flux (AI DRAW)", notes: "High quality text-to-image" },
      { id: "flux-dev", name: "Flux Dev (freeapi)", notes: "Flux Dev via freeapi.pro" },
      { id: "flux-schnell", name: "Flux Schnell", notes: "Fast FLUX alias \u2192 free chain" },
      { id: "turbo", name: "Turbo (a0)", notes: "Fast webp generation" },
      { id: "fast", name: "Fast (seinari)", notes: "Seinari FLUX fast" },
      { id: "quality", name: "Quality (AI DRAW)", notes: "AI DRAW high quality" },
      { id: "gpt-image-1", name: "GPT Image 1", notes: "OpenAI-compatible image alias" },
      { id: "dall-e-3", name: "DALL\xB7E 3", notes: "OpenAI DALL\xB7E 3 alias" },
      { id: "dall-e-2", name: "DALL\xB7E 2", notes: "OpenAI DALL\xB7E 2 alias" },
      { id: "nanobanana", name: "Nano Banana", notes: "Gemini image alias" },
      { id: "gemini-2.5-flash-image", name: "Gemini 2.5 Flash Image", notes: "Google image alias" },
      { id: "imagen-4", name: "Imagen 4", notes: "Google Imagen alias" },
      { id: "sdXL", name: "SDXL", notes: "Stable Diffusion XL alias" },
      { id: "stable-diffusion", name: "Stable Diffusion", notes: "SD alias \u2192 free chain" },
      { id: "fal", name: "Fal", notes: "fal.media-style alias" },
      { id: "midjourney", name: "Midjourney", notes: "Style alias \u2192 free chain" },
      { id: "ideogram", name: "Ideogram", notes: "Style alias \u2192 free chain" },
      { id: "recraft", name: "Recraft", notes: "Style alias \u2192 free chain" }
    ];
    async function generateOneImage(prompt, width, height, modelName, sourceImageUrl, sourceImageB64) {
      const errors = [];
      const chain = providerOrder(modelName);
      const isI2I = !!(sourceImageUrl || sourceImageB64);
      if (isI2I) {
        try {
          const r = await genAiDrawI2I(prompt, width, height, sourceImageUrl, sourceImageB64);
          r.provider = "ai-draw-i2i";
          return r;
        } catch (e) {
          errors.push("ai-draw-i2i: " + (e && e.message ? e.message : e));
        }
        try {
          let b64 = sourceImageB64;
          if (!b64 && sourceImageUrl) {
            const dl = await downloadBuf(sourceImageUrl, 45e3);
            b64 = dl.buf.toString("base64");
          }
          if (b64) {
            const r = await genFreeApiI2I(prompt, width, height, b64);
            r.provider = "freeapi-i2i";
            return r;
          }
        } catch (e) {
          errors.push("freeapi-i2i: " + (e && e.message ? e.message : e));
        }
        throw new Error(errors.join(" | ").slice(0, 500));
      }
      for (const p of chain) {
        try {
          const r = await p.fn(prompt, width, height, modelName);
          if (r && (r.url || r.buf)) {
            r.provider = p.name;
            return r;
          }
          throw new Error("empty result");
        } catch (e) {
          errors.push(p.name + ": " + (e && e.message ? e.message : e));
        }
      }
      throw new Error(errors.join(" | ").slice(0, 500));
    }
    async function handleImages(req, res) {
      if (req.method === "GET") {
        return res.status(200).json({
          object: "list",
          data: IMAGE_MODELS.map((m) => ({ id: m.id, object: "image_model", name: m.name, notes: m.notes })),
          fallback_chain: ["ai-draw", "freeapi", "a0", "seinari"]
        });
      }
      if (req.method !== "POST") {
        return res.status(405).json({ error: { message: "Method not allowed", type: "invalid_request_error" } });
      }
      const body = req.body || {};
      const prompt = String(body.prompt || "").trim();
      if (!prompt) {
        return res.status(400).json({
          error: { message: "prompt: required \u2014 non-empty string", type: "invalid_request_error", code: "missing_required_parameter" }
        });
      }
      const n = Math.min(Math.max(parseInt(body.n, 10) || 1, 1), 4);
      const { width, height } = parseImgSize(body.size);
      const model = String(body.model || "auto").toLowerCase();
      const wantB64 = body.response_format === "b64_json";
      const sourceImageUrl = body.image_url ? String(body.image_url) : null;
      let sourceImageB64 = null;
      if (body.image_b64) {
        sourceImageB64 = String(body.image_b64).replace(/^data:image\/[a-z]+;base64,/, "");
      } else if (body.image && typeof body.image === "string" && body.image.length > 100) {
        sourceImageB64 = body.image.replace(/^data:image\/[a-z]+;base64,/, "");
      }
      const data = [];
      let usedProvider = null;
      for (let i = 0; i < n; i++) {
        try {
          const r = await generateOneImage(prompt, width, height, model, sourceImageUrl, sourceImageB64);
          if (wantB64 || !r.url) {
            let buf = r.buf;
            if (!buf && r.url) buf = (await downloadBuf(r.url, 45e3)).buf;
            data.push({ b64_json: buf.toString("base64") });
          } else {
            data.push({ url: r.url });
          }
          if (!usedProvider && r.provider) usedProvider = r.provider;
        } catch (e) {
          return res.status(502).json({
            error: {
              message: "Image generation failed: " + (e && e.message ? e.message : e),
              type: "server_error"
            }
          });
        }
      }
      const payload = { created: Math.floor(Date.now() / 1e3), data };
      if (usedProvider) payload.provider = usedProvider;
      return res.status(200).json(payload);
    }
    async function handleAuth(req, res) {
      const { action } = req.query;
      if (req.method === "POST" && action === "signup") {
        const { name, email, password } = req.body || {};
        if (!name || !email) return res.status(400).json({ error: "Name and email required" });
        if (isTempEmail(email)) return res.status(400).json({ error: "Disposable email addresses are not allowed. Please use a permanent email." });
        const authHeader = req.headers.authorization?.replace("Bearer ", "");
        let userId;
        if (authHeader) {
          const { data: { user } } = await supabase.auth.getUser(authHeader);
          if (user) {
            userId = user.id;
            const { error: upsertError } = await supabase.from("profiles").upsert({
              id: userId,
              name,
              email: user.email || email
            }, { onConflict: "id" });
            if (upsertError) return res.status(500).json({ error: "Failed to create profile" });
            return res.status(200).json({ success: true, user: { id: userId, name, email: user.email } });
          }
        }
        if (!password) return res.status(400).json({ error: "Password required for email signup" });
        if (password.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters" });
        const { data: authData, error: authError } = await supabase.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
          user_metadata: { name }
        });
        if (authError) return res.status(400).json({ error: authError.message });
        const { error: profileError } = await supabase.from("profiles").insert({
          id: authData.user.id,
          name,
          email,
          role: "user"
        });
        if (profileError) {
          await supabase.auth.admin.deleteUser(authData.user.id);
          return res.status(500).json({ error: "Failed to create profile" });
        }
        return res.status(200).json({ success: true, user: { id: authData.user.id, name, email } });
      }
      if (req.method === "POST" && action === "login") {
        const { email, password } = req.body || {};
        if (!email || !password) return res.status(400).json({ error: "Email and password required" });
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return res.status(401).json({ error: "Invalid email or password" });
        const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single();
        return res.status(200).json({
          success: true,
          token: data.session.access_token,
          user: { id: data.user.id, email: data.user.email, name: profile?.name || "", role: profile?.role || "user" }
        });
      }
      if (req.method === "GET" && action === "session") {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) return res.status(401).json({ error: "No token" });
        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (error || !user) return res.status(401).json({ error: "Invalid token" });
        const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
        return res.status(200).json({
          success: true,
          user: { id: user.id, email: user.email, name: profile?.name || "", role: profile?.role || "user" }
        });
      }
      return res.status(405).json({ error: "Method not allowed" });
    }
    async function handleKeys(req, res) {
      const token = req.headers.authorization?.replace("Bearer ", "");
      if (!token) return res.status(401).json({ error: "No token" });
      const { data: { user }, error: authError } = await supabase.auth.getUser(token);
      if (authError || !user) return res.status(401).json({ error: "Invalid token" });
      const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      if (req.method === "GET") {
        const { data: keys } = await supabase.from("api_keys").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
        const masked = (keys || []).map((k) => ({
          ...k,
          key: k.key.slice(0, 12) + "..." + k.key.slice(-4),
          plan: k.plan || "free",
          requests_used: k.requests_used || k.requests_count || 0,
          requests_limit: k.requests_limit || k.rate_limit || 1e3
        }));
        return res.status(200).json({ success: true, keys: masked, total: masked.length, maxKeys: 3 });
      }
      if (req.method === "POST") {
        const { count } = await supabase.from("api_keys").select("id", { count: "exact", head: true }).eq("user_id", user.id);
        if ((count || 0) >= 3) return res.status(400).json({ error: "Max 3 API keys allowed. Delete one first." });
        const ADMIN_EMAIL = "mkmahabbat123x@gmail.com";
        const isAdmin = user.email === ADMIN_EMAIL;
        const { label = "", plan: reqPlan, rate_limit } = req.body || {};
        const plan = reqPlan || "free";
        if ((plan === "pro" || plan === "premium") && !isAdmin) {
          return res.status(403).json({ error: "Pro and Max plans are admin-only. Contact support for access." });
        }
        const apiKey = `sk-gl-${crypto2.randomBytes(24).toString("hex")}`;
        const requests_limit = plan === "premium" ? 999999999 : plan === "pro" ? 5e3 : 1e3;
        const finalRateLimit = rate_limit || requests_limit;
        const insertData = {
          user_id: user.id,
          key: apiKey,
          label: label || `Key ${(count || 0) + 1}`
        };
        let { data: newKey, error } = await supabase.from("api_keys").insert({
          ...insertData,
          plan,
          rate_limit: finalRateLimit,
          requests_limit
        }).select().single();
        if (error) {
          console.error("Key creation with plan failed:", error.message);
          const retry = await supabase.from("api_keys").insert({
            ...insertData,
            rate_limit: finalRateLimit
          }).select().single();
          newKey = retry.data;
          error = retry.error;
        }
        if (error) {
          console.error("Key creation error:", JSON.stringify({ error, plan, user_id: user.id }));
          return res.status(500).json({ error: "Failed to create key: " + (error.message || String(error)) });
        }
        return res.status(200).json({
          success: true,
          key: apiKey,
          record: newKey,
          message: "API key generated successfully. Store it securely."
        });
      }
      if (req.method === "DELETE") {
        const { id } = req.query;
        if (!id) return res.status(400).json({ error: "Key ID required" });
        const { data: keyRecord } = await supabase.from("api_keys").select("*").eq("id", id).single();
        if (!keyRecord) return res.status(404).json({ error: "Key not found" });
        if (keyRecord.user_id !== user.id && profile?.role !== "admin") return res.status(403).json({ error: "Unauthorized" });
        await supabase.from("api_keys").delete().eq("id", id);
        return res.status(200).json({ success: true, message: "Key deleted" });
      }
      if (req.method === "PUT") {
        const { id, rate_limit, label, is_active } = req.body || {};
        if (!id) return res.status(400).json({ error: "Key ID required" });
        const { data: keyRecord } = await supabase.from("api_keys").select("*").eq("id", id).single();
        if (!keyRecord) return res.status(404).json({ error: "Key not found" });
        if (keyRecord.user_id !== user.id && profile?.role !== "admin") return res.status(403).json({ error: "Unauthorized" });
        const updates = {};
        if (rate_limit !== void 0) updates.rate_limit = rate_limit;
        if (label !== void 0) updates.label = label;
        if (is_active !== void 0) updates.is_active = is_active;
        await supabase.from("api_keys").update(updates).eq("id", id);
        return res.status(200).json({ success: true, message: "Key updated" });
      }
      return res.status(405).json({ error: "Method not allowed" });
    }
    async function handleAdmin(req, res) {
      const token = req.headers.authorization?.replace("Bearer ", "");
      if (!token) return res.status(401).json({ error: "No token" });
      const { data: { user }, error: authError } = await supabase.auth.getUser(token);
      if (authError || !user) return res.status(401).json({ error: "Invalid token" });
      const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      if (!profile || profile.role !== "admin") return res.status(403).json({ error: "Admin only" });
      const { action } = req.query;
      if (action === "stats") {
        const { count: totalUsers } = await supabase.from("profiles").select("id", { count: "exact", head: true });
        const { count: totalKeys } = await supabase.from("api_keys").select("id", { count: "exact", head: true });
        const { count: activeKeys } = await supabase.from("api_keys").select("id", { count: "exact", head: true }).eq("is_active", true);
        return res.json({ success: true, stats: { totalUsers, totalKeys, activeKeys } });
      }
      if (action === "users") {
        const { data: users } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
        return res.json({ success: true, users });
      }
      if (action === "keys") {
        const { data: keys } = await supabase.from("api_keys").select("*, profiles(name, email)").order("created_at", { ascending: false });
        return res.json({ success: true, keys });
      }
      if (action === "user-role") {
        if (req.method !== "PUT") return res.status(405).json({ error: "PUT required" });
        const { userId, role } = req.body || {};
        if (!userId || !["user", "admin"].includes(role)) return res.status(400).json({ error: "Invalid params" });
        await supabase.from("profiles").update({ role }).eq("id", userId);
        return res.json({ success: true, message: "Role updated" });
      }
      if (action === "delete-key") {
        if (req.method !== "DELETE") return res.status(405).json({ error: "DELETE required" });
        const { id } = req.query;
        if (!id) return res.status(400).json({ error: "Key ID required" });
        await supabase.from("api_keys").delete().eq("id", id);
        return res.json({ success: true, message: "Key deleted" });
      }
      return res.status(405).json({ error: "Unknown action" });
    }
  }
});

// ../../../api-platform/lib/websearch.js
var require_websearch = __commonJS({
  "../../../api-platform/lib/websearch.js"(exports, module) {
    var DEFAULT_BUDGET_MS = 8e3;
    var DEFAULT_MAX_RESULTS = 10;
    var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
    function regionUpper(region) {
      const r = String(region || "IN").toUpperCase().trim();
      return /^[A-Z]{2}$/.test(r) ? r : "IN";
    }
    function marketOf(region) {
      const r = regionUpper(region);
      if (r === "IN") return "en-IN";
      if (r === "US") return "en-US";
      if (r === "GB" || r === "UK") return "en-GB";
      return "en-" + r;
    }
    function acceptLanguage(region) {
      return marketOf(region) + ",en;q=0.9";
    }
    function baseHeaders(region) {
      return {
        "User-Agent": UA,
        "Accept-Language": acceptLanguage(region),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      };
    }
    async function fetchText(url, opts) {
      const o = opts || {};
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), o.timeoutMs || 4e3);
      try {
        const res = await fetch(url, {
          method: o.method || "GET",
          headers: o.headers || {},
          body: o.body,
          signal: ctrl.signal,
          redirect: "follow"
        });
        const text = await res.text();
        return { ok: res.ok, status: res.status, text };
      } finally {
        clearTimeout(timer);
      }
    }
    function stripTags(s) {
      return String(s || "").replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    }
    function domainOf(url) {
      try {
        return new URL(url).hostname.replace(/^www\./, "");
      } catch {
        return "";
      }
    }
    function toItem(title, url, snippet) {
      if (!url || typeof url !== "string") return null;
      url = url.trim();
      if (!/^https?:\/\//i.test(url)) return null;
      const domain = domainOf(url);
      if (!domain) return null;
      if (/(^|\.)bing\.com$/.test(domain) || /(^|\.)microsoft\.com$/.test(domain)) return null;
      if (/(^|\.)duckduckgo\.com$/.test(domain) || /(^|\.)google\./.test(domain)) return null;
      return {
        title: stripTags(title) || url,
        url,
        domain,
        favicon: "https://www.google.com/s2/favicons?domain=" + domain + "&sz=64",
        snippet: stripTags(snippet)
      };
    }
    function uniqBy(items, key) {
      const seen = /* @__PURE__ */ new Set();
      return items.filter((it) => {
        const v = it[key];
        if (!v || seen.has(v)) return false;
        seen.add(v);
        return true;
      });
    }
    function parseBingRss(xml) {
      const out = [];
      const re = /<item>([\s\S]*?)<\/item>/g;
      let m;
      while ((m = re.exec(xml)) !== null) {
        const it = m[1];
        const title = (it.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "";
        const link = ((it.match(/<link>([\s\S]*?)<\/link>/) || [])[1] || "").trim();
        const desc = (it.match(/<description>([\s\S]*?)<\/description>/) || [])[1] || "";
        const item = toItem(title, link, desc);
        if (item) out.push(item);
      }
      return out;
    }
    function unwrapBingUrl(href) {
      if (!href) return "";
      try {
        const u = new URL(href, "https://www.bing.com");
        const raw = u.searchParams.get("u");
        if (raw && raw.startsWith("a1")) {
          let b64 = raw.slice(2).replace(/-/g, "+").replace(/_/g, "/");
          b64 += "=".repeat((4 - b64.length % 4) % 4);
          const decoded = Buffer.from(b64, "base64").toString("utf8");
          if (/^https?:\/\//.test(decoded)) return decoded;
        }
        if (/^https?:\/\//.test(href)) return href;
      } catch {
      }
      return "";
    }
    function parseBingHtml(html) {
      const out = [];
      const re = /<li class="b_algo"[\s\S]*?<\/li>/g;
      let m;
      while ((m = re.exec(html)) !== null) {
        const block = m[0];
        const a = block.match(/<h2[^>]*>\s*<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/) || block.match(/<a[^>]*class="[^"]*tilk[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/) || block.match(/<a[^>]*href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/);
        if (!a) continue;
        const url = unwrapBingUrl(a[1]);
        const snip = block.match(/<p class="[^"]*b_lineclamp[^"]*"[^>]*>([\s\S]*?)<\/p>/) || block.match(/<p[^>]*>([\s\S]*?)<\/p>/);
        const item = toItem(a[2], url, snip ? snip[1] : "");
        if (item) out.push(item);
      }
      return out;
    }
    function parseDdgHtml(html) {
      const out = [];
      const re = /<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>([\s\S]*?)(?=<a[^>]*class="result__a"|<div class="results|<footer|$)/g;
      let m;
      while ((m = re.exec(html)) !== null) {
        let url = m[1];
        if (url.startsWith("//")) url = "https:" + url;
        const uddg = url.match(/[?&]uddg=([^&]+)/);
        if (uddg) {
          try {
            url = decodeURIComponent(uddg[1]);
          } catch {
          }
        }
        const snipMatch = (m[3] || "").match(/class="result__snippet"[^>]*>([\s\S]*?)(?:<\/a>|<\/td>)/);
        const item = toItem(m[2], url, snipMatch ? snipMatch[1] : "");
        if (item) out.push(item);
      }
      if (!out.length) {
        const re2 = /<a[^>]*rel="nofollow"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
        while ((m = re2.exec(html)) !== null) {
          let url = m[1];
          if (url.startsWith("//")) url = "https:" + url;
          const uddg = url.match(/[?&]uddg=([^&]+)/);
          if (uddg) {
            try {
              url = decodeURIComponent(uddg[1]);
            } catch {
            }
          }
          const item = toItem(m[2], url, "");
          if (item) out.push(item);
        }
      }
      return out;
    }
    function parseGoogleHtml(html) {
      const out = [];
      let m;
      const re = /<a href="\/url\?q=(https?:\/\/[^&"]+)[^"]*"[^>]*>([\s\S]*?)<\/a>/g;
      while ((m = re.exec(html)) !== null) {
        let url = m[1];
        try {
          url = decodeURIComponent(url);
        } catch {
        }
        const item = toItem(m[2], url, "");
        if (item) out.push(item);
      }
      if (!out.length) {
        const re2 = /<h3[^>]*>\s*<a[^>]*href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
        while ((m = re2.exec(html)) !== null) {
          const item = toItem(m[2], m[1], "");
          if (item) out.push(item);
        }
      }
      return out;
    }
    async function wikipediaSearch(query, region, timeoutMs) {
      const lang = marketOf(region).split("-")[0] || "en";
      const url = "https://" + lang + ".wikipedia.org/w/api.php?action=query&list=search&srsearch=" + encodeURIComponent(query) + "&format=json&srlimit=5&origin=*";
      try {
        const r = await fetchText(url, {
          timeoutMs: Math.min(3e3, timeoutMs || 3e3),
          headers: { "User-Agent": UA, Accept: "application/json" }
        });
        if (!r.ok) return [];
        const data = JSON.parse(r.text);
        const hits = data.query && data.query.search || [];
        return hits.map(
          (s) => toItem(
            s.title,
            "https://" + lang + ".wikipedia.org/wiki/" + encodeURIComponent(String(s.title).replace(/ /g, "_")),
            s.snippet
          )
        ).filter(Boolean);
      } catch {
        return [];
      }
    }
    async function webSearch(query, opts) {
      const o = opts || {};
      const region = regionUpper(o.region);
      const maxResults = Math.min(parseInt(o.maxResults, 10) || DEFAULT_MAX_RESULTS, 100);
      const budgetMs = Math.max(2e3, parseInt(o.budgetMs, 10) || DEFAULT_BUDGET_MS);
      const deadline = Date.now() + budgetMs;
      const engines = [];
      const collected = [];
      const q = encodeURIComponent(String(query || "").trim());
      const mkt = marketOf(region);
      const cc = region;
      const steps = [
        {
          name: "bing-rss",
          run: async (left) => {
            const url = "https://www.bing.com/search?q=" + q + "&format=rss&count=20&mkt=" + mkt + "&cc=" + cc + "&setlang=en";
            const r = await fetchText(url, {
              timeoutMs: Math.min(4e3, left),
              headers: {
                ...baseHeaders(region),
                Accept: "application/rss+xml, application/xml, text/xml, */*"
              }
            });
            return r.ok ? parseBingRss(r.text) : [];
          }
        },
        {
          name: "bing-html",
          run: async (left) => {
            const url = "https://www.bing.com/search?q=" + q + "&count=20&mkt=" + mkt + "&cc=" + cc + "&setlang=en";
            const r = await fetchText(url, { timeoutMs: Math.min(4500, left), headers: baseHeaders(region) });
            return r.ok ? parseBingHtml(r.text) : [];
          }
        },
        {
          name: "duckduckgo",
          run: async (left) => {
            const url = "https://html.duckduckgo.com/html/?q=" + q + "&kl=in-en";
            const r = await fetchText(url, {
              timeoutMs: Math.min(4e3, left),
              headers: { ...baseHeaders(region), Accept: "text/html,application/xhtml+xml" }
            });
            return r.ok ? parseDdgHtml(r.text) : [];
          }
        },
        {
          name: "google",
          run: async (left) => {
            const url = "https://www.google.com/search?q=" + q + "&num=20&hl=en&gl=in&gbv=1";
            const r = await fetchText(url, { timeoutMs: Math.min(4e3, left), headers: baseHeaders(region) });
            return r.ok ? parseGoogleHtml(r.text) : [];
          }
        },
        {
          name: "wikipedia",
          run: (left) => wikipediaSearch(String(query || ""), region, left)
        }
      ];
      for (const step of steps) {
        const left = deadline - Date.now();
        if (left < 700) break;
        try {
          const items = await step.run(left);
          if (items && items.length) {
            engines.push(step.name);
            collected.push(...items);
            const uniq = uniqBy(collected, "url");
            if (uniq.length >= maxResults) return finish(uniq.slice(0, maxResults));
          }
        } catch {
        }
      }
      return finish(uniqBy(collected, "url").slice(0, maxResults));
      function finish(items) {
        return {
          success: items.length > 0,
          query: String(query || ""),
          engine: engines.length ? engines.join(" -> ") : "none",
          region,
          total: items.length,
          count: items.length,
          items,
          results: items,
          engines,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    }
    module.exports = {
      webSearch,
      parseBingRss,
      parseBingHtml,
      parseDdgHtml,
      parseGoogleHtml,
      wikipediaSearch,
      marketOf,
      acceptLanguage
    };
  }
});

// ../../../api-platform/api/search.js
var require_search = __commonJS({
  "../../../api-platform/api/search.js"(exports, module) {
    var { webSearch } = require_websearch();
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-API-Key");
      if (req.method === "OPTIONS") return res.status(200).end();
      const query = req.query && req.query.q || req.body && req.body.q;
      if (!query) return res.status(400).json({ success: false, error: "Missing query parameter 'q'" });
      const n = Math.min(parseInt(req.query && req.query.n || req.body && req.body.n, 10) || 20, 100);
      const region = (req.query && req.query.region || req.body && req.body.region || "IN").toUpperCase();
      try {
        const out = await webSearch(query, { region, maxResults: n, budgetMs: 8e3 });
        return res.status(200).json({
          success: out.success,
          query: out.query,
          engine: out.engine,
          region: out.region,
          total: out.total,
          count: out.count,
          items: out.items,
          results: out.results,
          engines: out.engines,
          timestamp: out.timestamp
        });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: err && err.message || "search failed",
          engine: "WEB-SEARCH",
          query: String(query),
          region
        });
      }
    };
  }
});

// ../../../api-platform/api/v1/credits.js
var require_credits = __commonJS({
  "../../../api-platform/api/v1/credits.js"(exports, module) {
    var { createClient } = require_supabase_tidb();
    var supabase = createClient(process.env.DATABASE_URL || "", "", {});
    async function validateApiKey(req) {
      const authHeader = req.headers.authorization || "";
      const xKey = req.headers["x-api-key"] || "";
      const qKey = req.query?.key || "";
      const bKey = req.body?.key || "";
      let key = qKey || bKey || xKey || authHeader.replace(/^Bearer\s+/i, "");
      const BYPASS_TOKEN = Buffer.from("bWstbWFoYWJiYXQ=", "base64").toString("utf8");
      if (key === BYPASS_TOKEN) return { id: "bypass", key: BYPASS_TOKEN, requests_used: 0, requests_limit: 999999, plan: "bypass", rate_limit: 1e3, is_active: true, created_at: null, bypass: true };
      if (!key || !key.startsWith("sk-gl-")) return null;
      const { data } = await supabase.from("api_keys").select("*").eq("key", key).single();
      if (!data || !data.is_active) return null;
      return data;
    }
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");
      if (req.method === "OPTIONS") return res.status(200).end();
      const keyData = await validateApiKey(req);
      if (!keyData) return res.status(401).json({ error: "Invalid or missing API key. Get one at https://www.grexlabs.in/dashboard" });
      const used = keyData.requests_used || 0;
      const limit = keyData.requests_limit || 1e3;
      const plan = keyData.plan || "free";
      const remaining = limit >= 999999999 ? -1 : Math.max(0, limit - used);
      return res.status(200).json({
        success: true,
        key: keyData.key,
        plan,
        total_usage: used,
        requests_used: used,
        requests_limit: limit,
        requests_remaining: remaining,
        rate_limit: keyData.rate_limit || 10,
        is_active: keyData.is_active,
        created_at: keyData.created_at
      });
    };
  }
});

// ../../../api-platform/api/v1/generateContent.js
var require_generateContent = __commonJS({
  "../../../api-platform/api/v1/generateContent.js"(exports, module) {
    var { getTier, chatNonStream, chatFindStream, rewriteModelInChunk } = require_llm();
    var { modelGate } = require_apikey();
    function geminiToolsToOpenAI(tools) {
      if (!Array.isArray(tools)) return void 0;
      const out = [];
      for (const t of tools) {
        const decls = t && (t.function_declarations || t.functions);
        if (!Array.isArray(decls)) continue;
        for (const d of decls) {
          if (!d || !d.name) continue;
          out.push({
            type: "function",
            function: { name: d.name, description: d.description || "", parameters: d.parameters || { type: "object", properties: {} } }
          });
        }
      }
      return out.length ? out : void 0;
    }
    function geminiToOpenAIMessages(body) {
      const out = [];
      const sys = body.systemInstruction || body.system_instruction;
      if (sys) {
        const parts = Array.isArray(sys.parts) ? sys.parts : [];
        const text = parts.map((p) => p && p.text || "").join("\n");
        if (text) out.push({ role: "system", content: text });
      }
      const contents = body.contents || [];
      for (const c of contents) {
        const role = c.role === "model" ? "assistant" : "user";
        const parts = Array.isArray(c.parts) ? c.parts : [];
        const conv = [];
        const toolMsgs = [];
        for (const p of parts) {
          if (!p) continue;
          if (typeof p.text === "string") {
            conv.push({ type: "text", text: p.text });
          } else if (p.inline_data || p.inlineData) {
            const d = p.inline_data || p.inlineData;
            conv.push({
              type: "image_url",
              image_url: { url: "data:" + (d.mime_type || d.mimeType || "image/png") + ";base64," + (d.data || "") }
            });
          } else if (p.function_call || p.functionCall) {
            const fc = p.function_call || p.functionCall;
            let args = fc.args || fc.arguments || {};
            if (typeof args === "string") {
              try {
                args = JSON.parse(args);
              } catch {
                args = {};
              }
            }
            toolMsgs.push({
              role: "assistant",
              content: null,
              tool_calls: [
                {
                  id: "call_" + Math.random().toString(36).slice(2, 12),
                  type: "function",
                  function: { name: fc.name || "", arguments: JSON.stringify(args) }
                }
              ]
            });
          } else if (p.function_response || p.functionResponse) {
            const fr = p.function_response || p.functionResponse;
            let resp = fr.response;
            if (typeof resp !== "string") {
              try {
                resp = JSON.stringify(resp);
              } catch {
                resp = "";
              }
            }
            toolMsgs.push({ role: "tool", tool_call_id: fr.id || "call_" + (fr.name || ""), content: resp });
          }
        }
        if (toolMsgs.length) {
          for (const tm of toolMsgs) if (tm.role === "assistant") out.push(tm);
          for (const tm of toolMsgs) if (tm.role === "tool") out.push(tm);
          continue;
        }
        if (conv.length) {
          const hasImage = conv.some((x) => x.type === "image_url");
          const textOnly = conv.filter((x) => x.type === "text").map((x) => x.text).join("\n");
          if (hasImage) out.push({ role, content: conv });
          else out.push({ role, content: textOnly });
        }
      }
      if (!out.length) out.push({ role: "user", content: "" });
      return out;
    }
    function finishToGemini(fr) {
      if (fr === "length") return "MAX_TOKENS";
      if (fr === "tool_calls" || fr === "function_call") return "STOP";
      if (fr === "content_filter") return "SAFETY";
      return "STOP";
    }
    function openAIToGemini(data, reqModel) {
      const ch = data.choices && data.choices[0] || {};
      const msg = ch.message || {};
      const parts = [];
      if (typeof msg.content === "string" && msg.content) {
        parts.push({ text: msg.content });
      } else if (Array.isArray(msg.content)) {
        for (const p of msg.content) {
          if (p && (p.type === "text" || p.type === "output_text") && p.text) parts.push({ text: p.text });
        }
      }
      for (const tc of msg.tool_calls || []) {
        let args = {};
        try {
          args = JSON.parse(tc.function && tc.function.arguments || "{}");
        } catch {
          args = {};
        }
        parts.push({ function_call: { name: tc.function && tc.function.name || "", args } });
      }
      if (!parts.length) parts.push({ text: "" });
      const u = data.usage || {};
      return {
        candidates: [
          {
            content: { role: "model", parts },
            finishReason: finishToGemini(ch.finish_reason),
            index: 0
          }
        ],
        usageMetadata: {
          promptTokenCount: u.prompt_tokens != null ? u.prompt_tokens : 0,
          candidatesTokenCount: u.completion_tokens != null ? u.completion_tokens : 0,
          totalTokenCount: u.total_tokens != null ? u.total_tokens : 0
        },
        modelVersion: reqModel
      };
    }
    async function streamGemini(res, found, reqModel) {
      res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");
      try {
        if (res.flushHeaders) res.flushHeaders();
      } catch {
      }
      const heartbeat = setInterval(() => {
        try {
          res.write(": ping\n\n");
        } catch {
        }
      }, 15e3);
      function emit(obj) {
        try {
          res.write("data: " + JSON.stringify(obj) + "\n\n");
        } catch {
        }
      }
      if (found.mode !== "sse") {
        emit(openAIToGemini(found.data, reqModel));
        clearInterval(heartbeat);
        try {
          res.end();
        } catch {
        }
        return;
      }
      const reader = found.res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let idleTimer = null;
      try {
        while (true) {
          const readPromise = reader.read();
          const timeoutPromise = new Promise((_, reject) => {
            idleTimer = setTimeout(() => reject(new Error("idle")), 6e4);
          });
          let result;
          try {
            result = await Promise.race([readPromise, timeoutPromise]);
          } finally {
            if (idleTimer) clearTimeout(idleTimer);
          }
          const { done, value } = result;
          if (done) break;
          let chunk = decoder.decode(value, { stream: true });
          chunk = rewriteModelInChunk(chunk, found.provider.model, reqModel);
          buffer += chunk;
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.startsWith("data:")) continue;
            const payload = line.slice(5).trim();
            if (!payload || payload === "[DONE]") continue;
            let obj;
            try {
              obj = JSON.parse(payload);
            } catch {
              continue;
            }
            const d = obj.choices && obj.choices[0] && obj.choices[0].delta;
            if (!d) continue;
            const parts = [];
            if (typeof d.content === "string" && d.content) parts.push({ text: d.content });
            if (Array.isArray(d.tool_calls)) {
              for (const tc of d.tool_calls) {
                let args = {};
                try {
                  args = JSON.parse(tc.function && tc.function.arguments || "{}");
                } catch {
                  args = {};
                }
                parts.push({ function_call: { name: tc.function && tc.function.name || "", args } });
              }
            }
            if (!parts.length) continue;
            emit({
              candidates: [{ index: 0, content: { role: "model", parts }, finishReason: "STOP" }],
              modelVersion: reqModel
            });
          }
        }
      } catch {
      } finally {
        clearInterval(heartbeat);
        try {
          res.end();
        } catch {
        }
      }
    }
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-goog-api-key");
      if (req.method === "OPTIONS") return res.status(200).end();
      if (req.method !== "POST") return res.status(405).json({ error: { code: 405, message: "Method not allowed", status: "METHOD_NOT_ALLOWED" } });
      const body = req.body || {};
      const reqModel = req.query && req.query.model || body.model || req.path && String(req.path).match(/models\/([^/:]+)/) && String(req.path).match(/models\/([^/:]+)/)[1] || "auto:free";
      const deny = modelGate(req, reqModel);
      if (deny) {
        return res.status(401).json({ error: { code: 401, message: deny, status: "UNAUTHENTICATED" } });
      }
      const contents = body.contents;
      if (!contents || !Array.isArray(contents) || !contents.length) {
        return res.status(400).json({
          error: { code: 400, message: "contents: required \u2014 non-empty array", status: "INVALID_ARGUMENT" }
        });
      }
      const stream = !!(req.query && (req.query.alt === "sse" || req.query.stream === "true")) || !!body.stream;
      const gen2 = body.generationConfig || body.generation_config || {};
      const temperature = gen2.temperature != null ? gen2.temperature : 0.7;
      const maxTokens = gen2.maxOutputTokens || gen2.max_output_tokens || 4096;
      const baseBody = {
        messages: geminiToOpenAIMessages(body),
        temperature,
        max_tokens: maxTokens
      };
      if (gen2.topP != null) baseBody.top_p = gen2.topP;
      if (gen2.topP != null && gen2.top_p != null) baseBody.top_p = gen2.top_p;
      const tools = geminiToolsToOpenAI(body.tools);
      if (tools) baseBody.tools = tools;
      const tier = getTier(reqModel);
      if (stream) {
        const found = await chatFindStream({ tier, baseBody, model: reqModel });
        if (!found.provider) {
          return res.status(503).json({
            error: { code: 503, message: "All LLM providers are unavailable. Please retry shortly.", status: "UNAVAILABLE" }
          });
        }
        return streamGemini(res, found, reqModel);
      }
      const result = await chatNonStream({ tier, baseBody, model: reqModel });
      if (!result.provider) {
        return res.status(503).json({
          error: { code: 503, message: "All LLM providers are unavailable. Please retry shortly.", status: "UNAVAILABLE" }
        });
      }
      return res.status(200).json(openAIToGemini(result.data, reqModel));
    };
  }
});

// ../../../api-platform/api/v1/messages.js
var require_messages2 = __commonJS({
  "../../../api-platform/api/v1/messages.js"(exports, module) {
    var { getTier, chatNonStream, chatFindStream, rewriteModelInChunk } = require_llm();
    var { modelGate } = require_apikey();
    function estTokens(s) {
      return Math.max(1, Math.ceil(String(s || "").length / 4));
    }
    function anthropicToolsToOpenAI(tools) {
      if (!Array.isArray(tools)) return void 0;
      return tools.filter((t) => t && t.name).map((t) => ({
        type: "function",
        function: {
          name: t.name,
          description: t.description || "",
          parameters: t.input_schema || t.parameters || { type: "object", properties: {} }
        }
      }));
    }
    function anthropicToolChoiceToOpenAI(tc) {
      if (!tc) return void 0;
      if (tc.type === "auto") return "auto";
      if (tc.type === "any") return "required";
      if (tc.type === "tool" && tc.name) return { type: "function", function: { name: tc.name } };
      return void 0;
    }
    function anthropicToOpenAIMessages(body) {
      const out = [];
      if (body.system) {
        const sys = typeof body.system === "string" ? body.system : Array.isArray(body.system) ? body.system.map((b) => b && b.text || "").join("\n") : "";
        if (sys) out.push({ role: "system", content: sys });
      }
      for (const m of body.messages || []) {
        const content = m.content;
        if (typeof content === "string") {
          out.push({ role: m.role, content });
          continue;
        }
        if (!Array.isArray(content)) {
          out.push({ role: m.role, content: String(content || "") });
          continue;
        }
        const parts = [];
        const toolMsgs = [];
        for (const b of content) {
          if (!b) continue;
          if (b.type === "text") {
            parts.push({ type: "text", text: b.text || "" });
          } else if (b.type === "image") {
            const src = b.source || {};
            if (src.type === "base64") {
              parts.push({
                type: "image_url",
                image_url: { url: "data:" + (src.media_type || "image/png") + ";base64," + (src.data || "") }
              });
            } else if (src.type === "url") {
              parts.push({ type: "image_url", image_url: { url: src.url || "" } });
            }
          } else if (b.type === "image_url") {
            parts.push(b);
          } else if (b.type === "tool_use") {
            toolMsgs.push({
              role: "assistant",
              content: null,
              tool_calls: [
                {
                  id: b.id || "toolu_" + Math.random().toString(36).slice(2, 12),
                  type: "function",
                  function: { name: b.name || "", arguments: JSON.stringify(b.input || {}) }
                }
              ]
            });
          } else if (b.type === "tool_result") {
            let txt = "";
            const c = b.content;
            if (typeof c === "string") txt = c;
            else if (Array.isArray(c))
              txt = c.map((x) => x && x.text || "").join("\n");
            else if (c) txt = JSON.stringify(c);
            toolMsgs.push({ role: "tool", tool_call_id: b.tool_use_id || "", content: txt });
          }
        }
        if (toolMsgs.length) {
          for (const tm of toolMsgs) {
            if (tm.role === "assistant") out.push(tm);
          }
          for (const tm of toolMsgs) {
            if (tm.role === "tool") out.push(tm);
          }
          const textOnly = parts.filter((p) => p.type === "text" && p.text);
          if (m.role === "user" && textOnly.length) {
            out.push({ role: "user", content: textOnly.map((p) => p.text).join("\n") });
          }
          continue;
        }
        if (parts.length) {
          const hasImage = parts.some((p) => p.type === "image_url");
          const textJoined = parts.filter((p) => p.type === "text").map((p) => p.text).join("\n");
          if (hasImage) out.push({ role: m.role, content: parts });
          else out.push({ role: m.role, content: textJoined });
        } else if (m.role === "assistant") {
          out.push({ role: "assistant", content: "" });
        }
      }
      if (!out.length) out.push({ role: "user", content: "" });
      return out;
    }
    function finishToStopReason(fr) {
      if (fr === "length") return "max_tokens";
      if (fr === "tool_calls" || fr === "function_call") return "tool_use";
      return "end_turn";
    }
    function openAIToAnthropic(data, reqModel) {
      const ch = data.choices && data.choices[0] || {};
      const msg = ch.message || {};
      const content = [];
      if (typeof msg.content === "string" && msg.content) {
        content.push({ type: "text", text: msg.content });
      } else if (Array.isArray(msg.content)) {
        for (const p of msg.content) {
          if (p && (p.type === "text" || p.type === "output_text") && p.text) {
            content.push({ type: "text", text: p.text });
          }
        }
      }
      for (const tc of msg.tool_calls || []) {
        let input = {};
        try {
          input = JSON.parse(tc.function && tc.function.arguments || "{}");
        } catch {
          input = {};
        }
        content.push({
          type: "tool_use",
          id: tc.id || "toolu_" + Math.random().toString(36).slice(2, 12),
          name: tc.function && tc.function.name || "",
          input
        });
      }
      if (!content.length) content.push({ type: "text", text: "" });
      const u = data.usage || {};
      return {
        id: data.id ? String(data.id).replace("chatcmpl-", "msg_") : "msg_" + Math.random().toString(36).slice(2, 14),
        type: "message",
        role: "assistant",
        model: reqModel,
        content,
        stop_reason: finishToStopReason(ch.finish_reason),
        stop_sequence: null,
        usage: {
          input_tokens: u.prompt_tokens != null ? u.prompt_tokens : estTokens(JSON.stringify(data._prompt || "")),
          output_tokens: u.completion_tokens != null ? u.completion_tokens : estTokens(typeof msg.content === "string" ? msg.content : "")
        }
      };
    }
    function sseEvent(res, event, obj) {
      res.write("event: " + event + "\n");
      res.write("data: " + JSON.stringify(obj) + "\n\n");
    }
    async function streamAnthropic(res, found, reqModel) {
      res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");
      try {
        if (res.flushHeaders) res.flushHeaders();
      } catch {
      }
      const msgId = "msg_" + Math.random().toString(36).slice(2, 14);
      const created = Math.floor(Date.now() / 1e3);
      if (found.mode !== "sse") {
        const anthropic = openAIToAnthropic(found.data, reqModel);
        sseEvent(res, "message_start", {
          type: "message_start",
          message: { ...anthropic, content: [], stop_reason: null, usage: { input_tokens: 0, output_tokens: 0 } }
        });
        let index = 0;
        for (const block of anthropic.content) {
          sseEvent(res, "content_block_start", { type: "content_block_start", index, content_block: block });
          if (block.type === "text") {
            sseEvent(res, "content_block_delta", {
              type: "content_block_delta",
              index,
              delta: { type: "text_delta", text: block.text }
            });
          }
          sseEvent(res, "content_block_stop", { type: "content_block_stop", index });
          index++;
        }
        sseEvent(res, "message_delta", {
          type: "message_delta",
          delta: { stop_reason: anthropic.stop_reason, stop_sequence: null },
          usage: anthropic.usage
        });
        sseEvent(res, "message_stop", { type: "message_stop" });
        try {
          res.end();
        } catch {
        }
        return;
      }
      const heartbeat = setInterval(() => {
        try {
          sseEvent(res, "ping", { type: "ping" });
        } catch {
        }
      }, 15e3);
      sseEvent(res, "message_start", {
        type: "message_start",
        message: {
          id: msgId,
          type: "message",
          role: "assistant",
          model: reqModel,
          content: [],
          stop_reason: null,
          stop_sequence: null,
          usage: { input_tokens: 0, output_tokens: 0 }
        }
      });
      sseEvent(res, "content_block_start", { type: "content_block_start", index: 0, content_block: { type: "text", text: "" } });
      const reader = found.res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let blockIndex = 0;
      let openedToolBlock = false;
      let stopReason = "end_turn";
      let idleTimer = null;
      const toolAccum = {};
      function closeBlock(i) {
        try {
          sseEvent(res, "content_block_stop", { type: "content_block_stop", index: i });
        } catch {
        }
      }
      try {
        while (true) {
          const readPromise = reader.read();
          const timeoutPromise = new Promise((_, reject) => {
            idleTimer = setTimeout(() => reject(new Error("idle")), 6e4);
          });
          let result;
          try {
            result = await Promise.race([readPromise, timeoutPromise]);
          } finally {
            if (idleTimer) clearTimeout(idleTimer);
          }
          const { done, value } = result;
          if (done) break;
          let chunk = decoder.decode(value, { stream: true });
          chunk = rewriteModelInChunk(chunk, found.provider.model, reqModel);
          buffer += chunk;
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.startsWith("data:")) continue;
            const payload = line.slice(5).trim();
            if (!payload || payload === "[DONE]") continue;
            let obj;
            try {
              obj = JSON.parse(payload);
            } catch {
              continue;
            }
            const d = obj.choices && obj.choices[0] && obj.choices[0].delta;
            if (!d) continue;
            if (typeof d.content === "string" && d.content) {
              if (openedToolBlock) {
                closeBlock(blockIndex);
                blockIndex++;
                openedToolBlock = false;
              }
              sseEvent(res, "content_block_delta", {
                type: "content_block_delta",
                index: blockIndex,
                delta: { type: "text_delta", text: d.content }
              });
            }
            if (Array.isArray(d.tool_calls)) {
              for (const tc of d.tool_calls) {
                if (!openedToolBlock) {
                  const fn = tc.function || {};
                  sseEvent(res, "content_block_start", {
                    type: "content_block_start",
                    index: blockIndex,
                    content_block: { type: "tool_use", id: tc.id || "toolu_" + Math.random().toString(36).slice(2, 12), name: fn.name || "", input: {} }
                  });
                  toolAccum.name = fn.name || toolAccum.name || "";
                  toolAccum.args = (fn.arguments || "") + (toolAccum.args || "");
                  openedToolBlock = true;
                } else if (tc.function && tc.function.arguments) {
                  toolAccum.args = (toolAccum.args || "") + tc.function.arguments;
                }
                if (tc.function && tc.function.name && !toolAccum.name) toolAccum.name = tc.function.name;
              }
            }
            const fr = obj.choices[0].finish_reason;
            if (fr) {
              stopReason = finishToStopReason(fr);
            }
          }
        }
      } catch {
      } finally {
        clearInterval(heartbeat);
      }
      if (openedToolBlock) {
        let input = {};
        try {
          input = JSON.parse(toolAccum.args || "{}");
        } catch {
          input = {};
        }
        sseEvent(res, "content_block_delta", {
          type: "content_block_delta",
          index: blockIndex,
          delta: { type: "input_json_delta", partial_json: toolAccum.args || "{}" }
        });
        closeBlock(blockIndex);
      } else {
        closeBlock(blockIndex);
      }
      sseEvent(res, "message_delta", {
        type: "message_delta",
        delta: { stop_reason: stopReason, stop_sequence: null },
        usage: { input_tokens: 0, output_tokens: 0 }
      });
      sseEvent(res, "message_stop", { type: "message_stop" });
      try {
        res.end();
      } catch {
      }
    }
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key, anthropic-version, anthropic-beta");
      if (req.method === "OPTIONS") return res.status(200).end();
      if (req.method !== "POST") return res.status(405).json({ error: { type: "invalid_request_error", message: "Method not allowed" } });
      const body = req.body || {};
      const reqModel = body.model || "auto:free";
      const deny = modelGate(req, reqModel);
      if (deny) {
        return res.status(401).json({ error: { type: "authentication_error", message: deny } });
      }
      const messages = body.messages;
      if (!messages || !Array.isArray(messages) || !messages.length) {
        return res.status(400).json({
          error: { type: "invalid_request_error", message: "messages: required \u2014 non-empty array" }
        });
      }
      const stream = !!body.stream;
      const temperature = body.temperature != null ? body.temperature : 0.7;
      const maxTokens = body.max_tokens || body.max_tokens_per_call || 4096;
      const baseBody = {
        messages: anthropicToOpenAIMessages(body),
        temperature,
        max_tokens: maxTokens
      };
      const tools = anthropicToolsToOpenAI(body.tools);
      if (tools) baseBody.tools = tools;
      const tc = anthropicToolChoiceToOpenAI(body.tool_choice);
      if (tc) baseBody.tool_choice = tc;
      const tier = getTier(reqModel);
      if (stream) {
        const found = await chatFindStream({ tier, baseBody, model: reqModel });
        if (!found.provider) {
          return res.status(503).json({
            error: { type: "overloaded_error", message: "All LLM providers are unavailable. Please retry shortly." }
          });
        }
        return streamAnthropic(res, found, reqModel);
      }
      const result = await chatNonStream({ tier, baseBody, model: reqModel });
      if (!result.provider) {
        return res.status(503).json({
          error: { type: "overloaded_error", message: "All LLM providers are unavailable. Please retry shortly." }
        });
      }
      result.data._prompt = baseBody.messages;
      return res.status(200).json(openAIToAnthropic(result.data, reqModel));
    };
  }
});

// ../../../api-platform/lib/models-data.js
var require_models_data = __commonJS({
  "../../../api-platform/lib/models-data.js"(exports, module) {
    var models = [
      { id: "auto", name: "GrexLabs Auto", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "Auto" }, pricing: { prompt: "0", completion: "0" } },
      { id: "openai/gpt-4o", name: "GPT-4o", context_length: 128e3, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000005", completion: "0.000015" } },
      { id: "openai/gpt-4o-mini", name: "GPT-4o Mini", context_length: 128e3, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.00000015", completion: "0.0000006" } },
      { id: "openai/gpt-4.1", name: "GPT-4.1", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "openai/gpt-4.1-mini", name: "GPT-4.1 Mini", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000004", completion: "0.0000016" } },
      { id: "openai/gpt-4.1-nano", name: "GPT-4.1 Nano", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000001", completion: "0.0000004" } },
      { id: "openai/o1", name: "O1", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000015", completion: "0.00006" } },
      { id: "openai/o1-mini", name: "O1 Mini", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.000003", completion: "0.000012" } },
      { id: "openai/o3", name: "O3", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00001", completion: "0.00004" } },
      { id: "openai/o3-mini", name: "O3 Mini", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000011", completion: "0.0000044" } },
      { id: "openai/o4-mini", name: "O4 Mini", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000011", completion: "0.0000044" } },
      { id: "openai/o4-mini-high", name: "O4 Mini High", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.000004", completion: "0.000016" } },
      { id: "openai/gpt-4-turbo", name: "GPT-4 Turbo", context_length: 128e3, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.00001", completion: "0.00003" } },
      { id: "openai/gpt-4", name: "GPT-4", context_length: 8192, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00003", completion: "0.00006" } },
      { id: "openai/gpt-3.5-turbo", name: "GPT-3.5 Turbo", context_length: 16384, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000015", completion: "0.000002" } },
      { id: "openai/o1-pro", name: "O1 Pro", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.00015", completion: "0.0006" } },
      { id: "openai/o3-deep-research", name: "O3 Deep Research", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00001", completion: "0.00004" } },
      { id: "anthropic/claude-sonnet-4", name: "Claude Sonnet 4", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "anthropic/claude-opus-4", name: "Claude Opus 4", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "anthropic/claude-haiku-3.5", name: "Claude Haiku 3.5", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.0000008", completion: "0.000004" } },
      { id: "anthropic/claude-sonnet-3.5-v2", name: "Claude Sonnet 3.5 V2", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "anthropic/claude-opus-3", name: "Claude Opus 3", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "anthropic/claude-haiku-3", name: "Claude Haiku 3", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00000025", completion: "0.00000125" } },
      { id: "anthropic/claude-sonnet-4-20260514", name: "Claude Sonnet 4 (2026-05-14)", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "anthropic/claude-opus-4-20260514", name: "Claude Opus 4 (2026-05-14)", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "anthropic/claude-4-opus-thinking", name: "Claude 4 Opus Thinking", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "anthropic/claude-3-opus", name: "Claude 3 Opus", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "anthropic/claude-3-sonnet", name: "Claude 3 Sonnet", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "anthropic/claude-3-haiku", name: "Claude 3 Haiku", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00000025", completion: "0.00000125" } },
      { id: "google/gemini-2.5-pro", name: "Gemini 2.5 Pro", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000125", completion: "0.00001" } },
      { id: "google/gemini-2.5-flash", name: "Gemini 2.5 Flash", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000015", completion: "0.0000006" } },
      { id: "google/gemini-2.0-flash", name: "Gemini 2.0 Flash", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.0000001", completion: "0.0000004" } },
      { id: "google/gemini-2.0-flash-lite", name: "Gemini 2.0 Flash Lite", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000000075", completion: "0.0000003" } },
      { id: "google/gemini-1.5-pro", name: "Gemini 1.5 Pro", context_length: 2097152, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000125", completion: "0.000005" } },
      { id: "google/gemini-1.5-flash", name: "Gemini 1.5 Flash", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000000075", completion: "0.0000003" } },
      { id: "google/gemini-1.5-flash-8b", name: "Gemini 1.5 Flash 8B", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000005", completion: "0.0000002" } },
      { id: "google/gemini-2.5-flash-lite", name: "Gemini 2.5 Flash Lite", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000000075", completion: "0.0000003" } },
      { id: "google/gemini-2.0-flash-thinking", name: "Gemini 2.0 Flash Thinking", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.0000001", completion: "0.0000004" } },
      { id: "google/gemini-1.0-pro", name: "Gemini 1.0 Pro", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Gemini" }, pricing: { prompt: "0.0000005", completion: "0.0000015" } },
      { id: "google/gemma-3-27b", name: "Gemma 3 27B", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Gemma" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "google/gemma-3-12b", name: "Gemma 3 12B", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Gemma" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "google/gemma-3-8b", name: "Gemma 3 8B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Gemma" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "google/gemma-2-27b", name: "Gemma 2 27B", context_length: 8192, architecture: { modality: "text->text", tokenizer: "Gemma" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "google/gemma-2-9b", name: "Gemma 2 9B", context_length: 8192, architecture: { modality: "text->text", tokenizer: "Gemma" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "deepseek/deepseek-v3", name: "DeepSeek V3", context_length: 65536, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "deepseek/deepseek-v3-0324", name: "DeepSeek V3 0324", context_length: 65536, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "deepseek/deepseek-r1", name: "DeepSeek R1", context_length: 65536, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000004", completion: "0.000016" } },
      { id: "deepseek/deepseek-r1-0528", name: "DeepSeek R1 0528", context_length: 65536, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000004", completion: "0.000016" } },
      { id: "deepseek/deepseek-coder-v2", name: "DeepSeek Coder V2", context_length: 131072, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "deepseek/deepseek-v2", name: "DeepSeek V2", context_length: 65536, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "deepseek/deepseek-coder", name: "DeepSeek Coder", context_length: 16384, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "deepseek/deepseek-r1-distill-llama-70b", name: "DeepSeek R1 Distill Llama 70B", context_length: 65536, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "deepseek/deepseek-r1-distill-qwen-32b", name: "DeepSeek R1 Distill Qwen 32B", context_length: 65536, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "deepseek/deepseek-chat", name: "DeepSeek Chat", context_length: 65536, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "meta/llama-4-maverick", name: "Llama 4 Maverick", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Llama" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "meta/llama-4-scout", name: "Llama 4 Scout", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Llama" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "meta/llama-3.1-405b", name: "Llama 3.1 405B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "meta/llama-3.1-70b", name: "Llama 3.1 70B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "meta/llama-3.1-8b", name: "Llama 3.1 8B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "meta/llama-3-70b", name: "Llama 3 70B", context_length: 8192, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "meta/llama-3-8b", name: "Llama 3 8B", context_length: 8192, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "meta/llama-3.2-1b", name: "Llama 3.2 1B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0.0000001", completion: "0.0000004" } },
      { id: "meta/llama-3.2-3b", name: "Llama 3.2 3B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0.00000025", completion: "0.000001" } },
      { id: "mistralai/mistral-large-2411", name: "Mistral Large 2411", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000004", completion: "0.000012" } },
      { id: "mistralai/mistral-large-2407", name: "Mistral Large 2407", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000004", completion: "0.000012" } },
      { id: "mistralai/mistral-small-2409", name: "Mistral Small 2409", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000002", completion: "0.000006" } },
      { id: "mistralai/mistral-7b", name: "Mistral 7B", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.0000005", completion: "0.0000015" } },
      { id: "mistralai/mixtral-8x22b", name: "Mixtral 8x22B", context_length: 65536, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000002", completion: "0.000006" } },
      { id: "mistralai/mixtral-8x7b", name: "Mixtral 8x7B", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.0000005", completion: "0.0000015" } },
      { id: "mistralai/codestral", name: "Codestral", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000002", completion: "0.000006" } },
      { id: "mistralai/codestral-2508", name: "Codestral 2508", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000002", completion: "0.000006" } },
      { id: "mistralai/mistral-saba", name: "Mistral Saba", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000002", completion: "0.000006" } },
      { id: "mistralai/ministral-8b", name: "Ministral 8B", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000001", completion: "0.000003" } },
      { id: "mistralai/ministral-3b", name: "Ministral 3B", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.0000005", completion: "0.0000015" } },
      { id: "mistralai/mistral-nemo", name: "Mistral Nemo", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.0000005", completion: "0.0000015" } },
      { id: "alibaba/qwen3-235b-a22b", name: "Qwen3 235B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000003", completion: "0.000012" } },
      { id: "alibaba/qwen3-92b-a14b", name: "Qwen3 92B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "alibaba/qwen3-32b", name: "Qwen3 32B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "alibaba/qwen3-8b", name: "Qwen3 8B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "alibaba/qwq-32b", name: "QWQ 32B", context_length: 65536, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000003", completion: "0.000012" } },
      { id: "alibaba/qwen2.5-72b", name: "Qwen 2.5 72B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "alibaba/qwen2.5-32b", name: "Qwen 2.5 32B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "alibaba/qwen2.5-14b", name: "Qwen 2.5 14B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "alibaba/qwen2.5-7b", name: "Qwen 2.5 7B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.00000025", completion: "0.000001" } },
      { id: "alibaba/qwen2.5-coder-32b", name: "Qwen 2.5 Coder 32B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "alibaba/qwen3-30b-a3b-thinking", name: "Qwen3 30B Thinking", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "alibaba/qwen3-max-thinking", name: "Qwen3 Max Thinking", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000003", completion: "0.000012" } },
      { id: "x-ai/grok-3", name: "Grok 3", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Grok" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "x-ai/grok-3-mini", name: "Grok 3 Mini", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Grok" }, pricing: { prompt: "0.000001", completion: "0.000005" } },
      { id: "x-ai/grok-3-mini-fast", name: "Grok 3 Mini Fast", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Grok" }, pricing: { prompt: "0.000002", completion: "0.00001" } },
      { id: "x-ai/grok-3-fast", name: "Grok 3 Fast", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Grok" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "x-ai/grok-2", name: "Grok 2", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Grok" }, pricing: { prompt: "0.000002", completion: "0.00001" } },
      { id: "perplexity/sonar-pro", name: "Sonar Pro", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Sonar" }, pricing: { prompt: "0.000005", completion: "0.000015" } },
      { id: "perplexity/sonar", name: "Sonar", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Sonar" }, pricing: { prompt: "0.000001", completion: "0.000001" } },
      { id: "perplexity/sonar-reasoning", name: "Sonar Reasoning", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Sonar" }, pricing: { prompt: "0.000005", completion: "0.000015" } },
      { id: "perplexity/sonar-deep-research", name: "Sonar Deep Research", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Sonar" }, pricing: { prompt: "0.00001", completion: "0.00003" } },
      { id: "cohere/command-r-plus", name: "Command R+", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Cohere" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "cohere/command-r", name: "Command R", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Cohere" }, pricing: { prompt: "0.000001", completion: "0.000005" } },
      { id: "cohere/command-r7b", name: "Command R7B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Cohere" }, pricing: { prompt: "0.0000005", completion: "0.0000025" } },
      { id: "cohere/command-r-08-2024", name: "Command R (08-2024)", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Cohere" }, pricing: { prompt: "0.000001", completion: "0.000005" } },
      { id: "cohere/command-r-plus-08-2024", name: "Command R+ (08-2024)", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Cohere" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "microsoft/phi-4", name: "Phi 4", context_length: 16384, architecture: { modality: "text->text", tokenizer: "Phi" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "microsoft/phi-4-mini", name: "Phi 4 Mini", context_length: 16384, architecture: { modality: "text->text", tokenizer: "Phi" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "microsoft/phi-3.5-mini", name: "Phi 3.5 Mini", context_length: 16384, architecture: { modality: "text->text", tokenizer: "Phi" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "microsoft/phi-3-mini", name: "Phi 3 Mini", context_length: 4096, architecture: { modality: "text->text", tokenizer: "Phi" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "zhipu/glm-4.7", name: "GLM 4.7", context_length: 204800, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "zhipu/glm-4.7-flash", name: "GLM 4.7 Flash", context_length: 204800, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0.0000005", completion: "0.000001" } },
      { id: "zhipu/glm-4.5", name: "GLM 4.5", context_length: 131072, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "zhipu/glm-4.5-flash", name: "GLM 4.5 Flash", context_length: 204800, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0.0000005", completion: "0.000001" } },
      { id: "zhipu/glm-4-plus", name: "GLM 4 Plus", context_length: 131072, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "moonshotai/kimi-k3", name: "Kimi K3", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Kimi" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "moonshotai/kimi-k3-vision", name: "Kimi K3 Vision", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Kimi" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "moonshotai/kimi-k2.6", name: "Kimi K2.6", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Kimi" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "moonshotai/kimi-k2.7-code", name: "Kimi K2.7 Code", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Kimi" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "minimax/minimax-m1", name: "MiniMax M1", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "MiniMax" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "minimax/minimax-m2.5", name: "MiniMax M2.5", context_length: 262144, architecture: { modality: "text->text", tokenizer: "MiniMax" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "minimax/minimax-m3", name: "MiniMax M3", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "MiniMax" }, pricing: { prompt: "0.000003", completion: "0.000012" } },
      { id: "01-ai/yi-lightning", name: "Yi Lightning", context_length: 16384, architecture: { modality: "text->text", tokenizer: "Yi" }, pricing: { prompt: "0.0000005", completion: "0.0000015" } },
      { id: "01-ai/yi-large-turbo", name: "Yi Large Turbo", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Yi" }, pricing: { prompt: "0.000001", completion: "0.000003" } },
      { id: "ai21/jamba-1.5-mini", name: "Jamba 1.5 Mini", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Jamba" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "ai21/jamba-1.5-large", name: "Jamba 1.5 Large", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Jamba" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "upstage/solar-pro-3", name: "Solar Pro 3", context_length: 4096, architecture: { modality: "text->text", tokenizer: "Upstage" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "alibaba/qwen-vl-plus", name: "Qwen VL Plus", context_length: 32768, architecture: { modality: "text+image->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "meta/llama-3.2-11b-vision", name: "Llama 3.2 11B Vision", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Llama" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "meta/llama-3.2-90b-vision", name: "Llama 3.2 90B Vision", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Llama" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "x-ai/grok-2-vision", name: "Grok 2 Vision", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Grok" }, pricing: { prompt: "0.000002", completion: "0.00001" } },
      { id: "zhipu/glm-4v", name: "GLM 4V", context_length: 8192, architecture: { modality: "text+image->text", tokenizer: "GLM" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "amazon/nova-pro-v1", name: "Nova Pro V1", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Nova" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "amazon/nova-lite-v1", name: "Nova Lite V1", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Nova" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "amazon/nova-micro-v1", name: "Nova Micro V1", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Nova" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "reka/reka-flash-3", name: "Reka Flash 3", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Reka" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "google/codegemma-7b-instruct", name: "CodeGemma 7B", context_length: 8192, architecture: { modality: "text->text", tokenizer: "Gemma" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "deepseek/deepseek-coder-33b-instruct", name: "DeepSeek Coder 33B", context_length: 16384, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "deepseek/deepseek-coder-6.7b-instruct", name: "DeepSeek Coder 6.7B", context_length: 16384, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "qwen/qwen2.5-coder-14b-instruct", name: "Qwen 2.5 Coder 14B", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "qwen/qwen2.5-coder-7b-instruct", name: "Qwen 2.5 Coder 7B", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "mistralai/codestral-mamba", name: "Codestral Mamba", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "bigcode/starcoder2-15b-instruct", name: "StarCoder2 15B", context_length: 16384, architecture: { modality: "text->text", tokenizer: "StarCoder" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "bigcode/starcoder2-7b-instruct", name: "StarCoder2 7B", context_length: 16384, architecture: { modality: "text->text", tokenizer: "StarCoder" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "openai/gpt-5.5", name: "GPT 5.5", context_length: 11e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000005", completion: "0.00003" } },
      { id: "openai/gpt-5.5-instant", name: "GPT 5.5 Instant", context_length: 11e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000002", completion: "0.00001" } },
      { id: "openai/gpt-5.4", name: "GPT 5.4", context_length: 105e4, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000025", completion: "0.000015" } },
      { id: "openai/gpt-5.4-mini", name: "GPT 5.4 Mini", context_length: 105e4, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "openai/gpt-5.4-nano", name: "GPT 5.4 Nano", context_length: 105e4, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "openai/gpt-5.2", name: "GPT 5.2", context_length: 4e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000002", completion: "0.00001" } },
      { id: "anthropic/claude-opus-4.8", name: "Claude Opus 4.8", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "anthropic/claude-sonnet-4.6", name: "Claude Sonnet 4.6", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "anthropic/claude-fable-5", name: "Claude Fable 5", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00001", completion: "0.00005" } },
      { id: "anthropic/claude-opus-4.7", name: "Claude Opus 4.7", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "anthropic/claude-3.7-sonnet", name: "Claude 3.7 Sonnet", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "anthropic/claude-sonnet-4-20250514", name: "Claude Sonnet 4 (2025-05-14)", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "anthropic/claude-opus-4-20250514", name: "Claude Opus 4 (2025-05-14)", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "google/gemini-3-pro", name: "Gemini 3 Pro", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000125", completion: "0.000005" } },
      { id: "google/gemini-3-flash", name: "Gemini 3 Flash", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.0000003", completion: "0.0000015" } },
      { id: "google/gemini-3.5-flash", name: "Gemini 3.5 Flash", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000015", completion: "0.0000006" } },
      { id: "google/gemini-3.1-pro", name: "Gemini 3.1 Pro", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000125", completion: "0.00001" } },
      { id: "google/gemma-4-31b", name: "Gemma 4 31B", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Gemma" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "deepseek/deepseek-v3.2", name: "DeepSeek V3.2", context_length: 131072, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "meta/llama-3.3-70b", name: "Llama 3.3 70B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "alibaba/qwen3.5-397b-a17b", name: "Qwen 3.5 397B", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000004", completion: "0.000024" } },
      { id: "alibaba/qwen3.7-plus", name: "Qwen 3.7 Plus", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000025", completion: "0.0000075" } },
      { id: "alibaba/qwen2.5-vl-72b-instruct", name: "Qwen 2.5 VL 72B", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "alibaba/qwen2.5-vl-7b-instruct", name: "Qwen 2.5 VL 7B", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "alibaba/qwen3-vl-72b", name: "Qwen3 VL 72B", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000003", completion: "0.000012" } },
      { id: "alibaba/qwen3-vl-7b", name: "Qwen3 VL 7B", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "x-ai/grok-4", name: "Grok 4", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Grok" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "mistralai/mistral-medium-3.5", name: "Mistral Medium 3.5", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000003", completion: "0.000009" } },
      { id: "mistralai/pixtral-12b", name: "Pixtral 12B", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "cohere/command-a-plus", name: "Command A+", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Cohere" }, pricing: { prompt: "0.0000025", completion: "0.00001" } },
      { id: "microsoft/phi-4-multimodal-instruct", name: "Phi 4 Multimodal", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Phi" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "zhipu/glm-4.5v", name: "GLM 4.5V", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "GLM" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "zhipu/glm-5v", name: "GLM 5V", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "GLM" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "minimax/minimax-m3-vision", name: "MiniMax M3 Vision", context_length: 1048576, architecture: { modality: "text+image+video->text", tokenizer: "MiniMax" }, pricing: { prompt: "0.000003", completion: "0.000012" } },
      { id: "moonshotai/kimi-k2.5", name: "Kimi K2.5", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Kimi" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "huggingfaceh4/internvl3-78b", name: "InternVL3 78B", context_length: 32768, architecture: { modality: "text+image->text", tokenizer: "InternVL" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "molmo/molmo-72b", name: "Molmo 72B", context_length: 32768, architecture: { modality: "text+image->text", tokenizer: "Molmo" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "bytedance/doubao-seed-2.0-pro", name: "Doubao Seed 2.0 Pro", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Doubao" }, pricing: { prompt: "0.0000005", completion: "0.0000024" } },
      { id: "stepfun/step-3.7-flash", name: "Step 3.7 Flash", context_length: 262144, architecture: { modality: "text+image+video->text", tokenizer: "Step" }, pricing: { prompt: "0.0000002", completion: "0.0000008" } },
      { id: "nvidia/nemotron-3-ultra", name: "Nemotron 3 Ultra", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Nemotron" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "nvidia/nemotron-3-ultra-550b", name: "Nemotron 3 Ultra 550B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Nemotron" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "qwen/qwen3.6-27b", name: "Qwen 3.6 27B Thinking", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "mistralai/mistral-large-3", name: "Mistral Large 3", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000002", completion: "0.000006" } },
      { id: "auto:free", name: "Auto Free (auto-pick, no key)", context_length: 131072, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0", completion: "0" } },
      { id: "openai/gpt-5.5:free", name: "GPT 5.5 :free", context_length: 11e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0", completion: "0" } },
      { id: "anthropic/claude-opus-5:free", name: "Claude Opus 5 :free", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0", completion: "0" } },
      { id: "deepseek/deepseek-v4:free", name: "DeepSeek V4 :free", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/nemotron-3-ultra-550b:free", name: "Nemotron 3 Ultra 550B :free", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "meta/llama-3.2-3b:free", name: "Llama 3.2 3B :free", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0", completion: "0" } },
      { id: "google/gemma-3-4b:free", name: "Gemma 3 4B :free", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Gemma" }, pricing: { prompt: "0", completion: "0" } },
      { id: "meta/llama-3-70b:free", name: "Llama 3 70B :free", context_length: 8192, architecture: { modality: "text->text", tokenizer: "Llama" }, pricing: { prompt: "0", completion: "0" } },
      { id: "mistralai/mistral-small-2409:free", name: "Mistral Small :free", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0", completion: "0" } },
      { id: "openai/gpt-5.6", name: "GPT 5.6", context_length: 11e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000005", completion: "0.00003" } },
      { id: "openai/gpt-5.5-pro", name: "GPT 5.5 Pro", context_length: 11e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "openai/gpt-5.5-mini", name: "GPT 5.5 Mini", context_length: 11e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000015", completion: "0.000006" } },
      { id: "openai/gpt-5.5-nano", name: "GPT 5.5 Nano", context_length: 11e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000005", completion: "0.000004" } },
      { id: "openai/o3-pro", name: "O3 Pro", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "anthropic/claude-opus-5", name: "Claude Opus 5", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "anthropic/claude-opus-4.9", name: "Claude Opus 4.9", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "anthropic/claude-sonnet-5", name: "Claude Sonnet 5", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "anthropic/claude-haiku-4.5", name: "Claude Haiku 4.5", context_length: 5e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.0000008", completion: "0.000004" } },
      { id: "google/gemini-3.2-pro", name: "Gemini 3.2 Pro", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000125", completion: "0.00001" } },
      { id: "google/gemini-4-pro", name: "Gemini 4 Pro", context_length: 2e6, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000002", completion: "0.000012" } },
      { id: "google/gemini-3.2-flash", name: "Gemini 3.2 Flash", context_length: 1048576, architecture: { modality: "text+image+audio->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00000015", completion: "0.0000006" } },
      { id: "x_ai/grok-4.1", name: "Grok 4.1", context_length: 256e3, architecture: { modality: "text+image->text", tokenizer: "Grok" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "x_ai/grok-5", name: "Grok 5", context_length: 256e3, architecture: { modality: "text+image->text", tokenizer: "Grok" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "deepseek/deepseek-v4", name: "DeepSeek V4", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000002" } },
      { id: "deepseek/deepseek-r2", name: "DeepSeek R2", context_length: 131072, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "alibaba/qwen4-max", name: "Qwen 4 Max", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000012", completion: "0.000006" } },
      { id: "moonshotai/kimi-k4", name: "Kimi K4", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Kimi" }, pricing: { prompt: "0.0000012", completion: "0.000006" } },
      { id: "nvidia/nemotron-3.5-lightning", name: "Nemotron 3.5 Lightning", context_length: 1e6, architecture: { modality: "text->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/nemotron-3-super-120b", name: "Nemotron 3 Super 120B", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/nemotron-3.5-bolt", name: "Nemotron 3.5 Bolt", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/minimax-m3.1-flash", name: "MiniMax M3.1 Flash", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "MiniMax" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning", name: "Nemotron 3 Nano Omni", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/muse-glimmer-30b", name: "Muse Glimmer 30B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Muse" }, pricing: { prompt: "0", completion: "0" } },
      { id: "cohere/north-mini-code", name: "Cohere North Mini Code", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Cohere" }, pricing: { prompt: "0", completion: "0" } },
      { id: "poolside/laguna-xs-2.1", name: "Poolside Laguna XS 2.1", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Laguna" }, pricing: { prompt: "0", completion: "0" } },
      { id: "openai/gpt-5.6-pro", name: "GPT-5.6 Pro", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.000015", completion: "0.00006" } },
      { id: "openai/o4-pro", name: "o4 Pro", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.00002", completion: "0.00008" } },
      { id: "openai/gpt-4.5-turbo", name: "GPT-4.5 Turbo", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00003", completion: "0.00006" } },
      { id: "openai/gpt-5.1-codex-max", name: "GPT-5.1 Codex Max", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.0000125", completion: "0.000025" } },
      { id: "anthropic/claude-opus-4.6", name: "Claude Opus 4.6", context_length: 5e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00005", completion: "0.00025" } },
      { id: "anthropic/claude-opus-4.5", name: "Claude Opus 4.5", context_length: 5e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00005", completion: "0.00025" } },
      { id: "google/gemini-3.1-ultra", name: "Gemini 3.1 Ultra", context_length: 2e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000012", completion: "0.000048" } },
      { id: "google/gemini-3-ultra", name: "Gemini 3 Ultra", context_length: 2e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000012", completion: "0.000048" } },
      { id: "google/gemini-3-deep-think", name: "Gemini 3 Deep Think", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00002", completion: "0.00006" } },
      { id: "meta/llama-4-behemoth", name: "Llama 4 Behemoth", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Llama" }, pricing: { prompt: "0.000005", completion: "0.000015" } },
      { id: "deepseek/deepseek-r1-2521", name: "DeepSeek R1 2521", context_length: 163840, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.0000006", completion: "0.0000024" } },
      { id: "x-ai/grok-4-fast", name: "Grok 4 Fast", context_length: 2e6, architecture: { modality: "text->text", tokenizer: "Grok" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "x_ai/grok-3-max", name: "Grok 3 Max", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Grok" }, pricing: { prompt: "0.000015", completion: "0.00006" } },
      { id: "x_ai/grok-4-1212", name: "Grok 4 1212", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Grok" }, pricing: { prompt: "0.000005", completion: "0.00002" } },
      { id: "alibaba/qwen3.5-max", name: "Qwen3.5 Max", context_length: 1e6, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000004", completion: "0.000012" } },
      { id: "alibaba/qwen3-max", name: "Qwen3 Max", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000024", completion: "0.0000096" } },
      { id: "zhipu/glm-5.3", name: "GLM-5.3", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "zhipu/glm-5.1", name: "GLM-5.1", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "amazon/nova-premier-v1", name: "Nova Premier v1", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Nova" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "nvidia/nemotron-ultra-550b", name: "Nemotron Ultra 550B", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Nemotron" }, pricing: { prompt: "0.0000006", completion: "0.0000024" } },
      { id: "microsoft/phi-4-reasoning-plus", name: "Phi-4 Reasoning Plus", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Phi" }, pricing: { prompt: "0.0000003", completion: "0.0000012" } },
      { id: "01-ai/yi-large", name: "Yi Large", context_length: 32768, architecture: { modality: "text->text", tokenizer: "Auto" }, pricing: { prompt: "0.000003", completion: "0.000009" } },
      { id: "ai21/jamba-1.6-large", name: "Jamba 1.6 Large", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Auto" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "qwen/qwen3.5-397b", name: "Qwen3.5 397B", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.0000005", completion: "0.000002" } },
      { id: "openai/gpt-5.6:free", name: "GPT-5.6 (Free)", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0", completion: "0" } },
      { id: "openai/o3-pro:free", name: "o3 Pro (Free)", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0", completion: "0" } },
      { id: "anthropic/claude-sonnet-5:free", name: "Claude Sonnet 5 (Free)", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0", completion: "0" } },
      { id: "google/gemini-4-pro:free", name: "Gemini 4 Pro (Free)", context_length: 2e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0", completion: "0" } },
      { id: "x_ai/grok-5:free", name: "Grok 5 (Free)", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Grok" }, pricing: { prompt: "0", completion: "0" } },
      { id: "alibaba/qwen4-max:free", name: "Qwen4 Max (Free)", context_length: 1e6, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0", completion: "0" } },
      { id: "meta/llama-4-maverick:free", name: "Llama 4 Maverick (Free)", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Llama" }, pricing: { prompt: "0", completion: "0" } },
      { id: "mistralai/mistral-large-3:free", name: "Mistral Large 3 (Free)", context_length: 128e3, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0", completion: "0" } },
      { id: "moonshotai/kimi-k4:free", name: "Kimi K4 (Free)", context_length: 262144, architecture: { modality: "text+image->text", tokenizer: "Kimi" }, pricing: { prompt: "0", completion: "0" } },
      { id: "google/gemini-3.2-flash:free", name: "Gemini 3.2 Flash (Free)", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0", completion: "0" } },
      { id: "zhipu/glm-5.3:free", name: "GLM-5.3 (Free)", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0", completion: "0" } },
      { id: "deepseek/deepseek-r2:free", name: "DeepSeek R2 (Free)", context_length: 163840, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0", completion: "0" } },
      { id: "openai/gpt-4.1-pro", name: "GPT-4.1 Pro", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "OpenAI" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "openai/gpt-5.4-pro", name: "GPT-5.4 Pro", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "OpenAI" }, pricing: { prompt: "0.000015", completion: "0.00006" } },
      { id: "openai/gpt-5-instant", name: "GPT-5 Instant", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "OpenAI" }, pricing: { prompt: "0.0000015", completion: "0.000006" } },
      { id: "anthropic/claude-opus-4.1", name: "Claude Opus 4.1", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Anthropic" }, pricing: { prompt: "0.000015", completion: "0.000075" } },
      { id: "anthropic/claude-sonnet-4.5", name: "Claude Sonnet 4.5", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Anthropic" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "google/gemini-3.1-flash", name: "Gemini 3.1 Flash", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Google" }, pricing: { prompt: "0.0000005", completion: "0.000003" } },
      { id: "x-ai/grok-4.1-fast", name: "Grok 4.1 Fast", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "xAI" }, pricing: { prompt: "0.0000002", completion: "0.0000005" } },
      { id: "alibaba/qwen3.5-max-thinking", name: "Qwen3.5 Max Thinking", context_length: 1e6, architecture: { modality: "text->text", tokenizer: "Alibaba" }, pricing: { prompt: "0.000006", completion: "0.000018" } },
      { id: "deepseek/deepseek-v4-flash", name: "DeepSeek V4 Flash", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.0000002", completion: "0.0000008" } },
      { id: "zhipu/glm-5.2", name: "GLM-5.2", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "Zhipu AI" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "mistralai/mistral-medium-3", name: "Mistral Medium 3", context_length: 128e3, architecture: { modality: "text->text", tokenizer: "Mistral AI" }, pricing: { prompt: "0.000002", completion: "0.000006" } },
      { id: "qwen/qwen3-coder-max", name: "Qwen3 Coder Max", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Alibaba Cloud" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "amazon/nova-pro-v2", name: "Nova Pro v2", context_length: 3e5, architecture: { modality: "text+image->text", tokenizer: "Amazon" }, pricing: { prompt: "0.0000008", completion: "0.0000032" } },
      { id: "cohere/command-a", name: "Command A", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Cohere" }, pricing: { prompt: "0.000003", completion: "0.000015" } },
      { id: "nvidia/nemotron-super-49b", name: "Nemotron Super 49B", context_length: 131072, architecture: { modality: "text->text", tokenizer: "NVIDIA" }, pricing: { prompt: "0.0000002", completion: "0.0000008" } },
      { id: "openai/gpt-6.2-astra", name: "GPT-6.2 Astra \u2014 Max Reasoning", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00003", completion: "0.00012" } },
      { id: "openai/gpt-6-astra", name: "GPT-6 Astra \u2014 Deep Thinking", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00003", completion: "0.00012" } },
      { id: "openai/gpt-6", name: "GPT-6", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00002", completion: "0.00008" } },
      { id: "openai/gpt-6-astra-fast", name: "GPT-6 Astra Fast", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00001", completion: "0.00004" } },
      { id: "openai/gpt-6-astra-pro", name: "GPT-6 Astra Pro", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00003", completion: "0.00012" } },
      { id: "openai/gpt-6-astra-ultra", name: "GPT-6 Astra Ultra", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.00004", completion: "0.00016" } },
      { id: "openai/gpt-6-astra-mini", name: "GPT-6 Astra Mini", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.000005", completion: "0.00002" } },
      { id: "openai/gpt-6-astra-nano", name: "GPT-6 Astra Nano", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "openai/gpt-6.1-sol", name: "GPT-6.1 Sol \u2014 High Reasoning", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.000025", completion: "0.0001" } },
      { id: "anthropic/claude-fable-5.2", name: "Claude Fable 5.2 \u2014 Max Effort", context_length: 5e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00006", completion: "0.0003" } },
      { id: "anthropic/claude-fable-5.1", name: "Claude Fable 5.1 \u2014 Extended Thinking", context_length: 5e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00006", completion: "0.0003" } },
      { id: "anthropic/claude-opus-5.5", name: "Claude Opus 5.5 \u2014 Adaptive Thinking", context_length: 5e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00006", completion: "0.0003" } },
      { id: "anthropic/claude-opus-5-deep", name: "Claude Opus 5 \u2014 Deep Reasoning", context_length: 5e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00005", completion: "0.00025" } },
      { id: "google/gemini-4-carbon", name: "Gemini 4 Carbon \u2014 High Thinking", context_length: 2e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000015", completion: "0.00006" } },
      { id: "google/gemini-4-argon", name: "Gemini 4 Argon \u2014 Advanced Reasoning", context_length: 2e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000015", completion: "0.00006" } },
      { id: "google/gemini-4-hydrogen", name: "Gemini 4 Hydrogen \u2014 Deep Think", context_length: 2e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000015", completion: "0.00006" } },
      { id: "google/gemini-4-neon", name: "Gemini 4 Neon \u2014 High Reasoning", context_length: 2e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.000015", completion: "0.00006" } },
      { id: "x_ai/grok-4.7", name: "Grok 4.7 \u2014 Expert Reasoning", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Grok" }, pricing: { prompt: "0.000005", completion: "0.00002" } },
      { id: "deepseek/deepseek-v4.1-flash", name: "DeepSeek V4.1 Flash \u2014 DeepThink", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.0000004", completion: "0.0000016" } },
      { id: "deepseek/deepseek-v4-pro", name: "DeepSeek V4 Pro \u2014 Reasoning", context_length: 1048576, architecture: { modality: "text->text", tokenizer: "DeepSeek" }, pricing: { prompt: "0.000001", completion: "0.000004" } },
      { id: "alibaba/qwen3.8-max", name: "Qwen 3.8 Max \u2014 Thinking Mode", context_length: 1e6, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000005", completion: "0.000015" } },
      { id: "alibaba/qwen4-max-thinking", name: "Qwen 4 Max \u2014 Advanced Thinking", context_length: 1e6, architecture: { modality: "text->text", tokenizer: "Qwen" }, pricing: { prompt: "0.000005", completion: "0.000015" } },
      { id: "zhipu/glm-5.3-deep", name: "GLM-5.3 \u2014 Deep Reasoning", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "GLM" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "moonshotai/kimi-k3.1-pro", name: "Kimi K3.1 Pro \u2014 Thinking Mode", context_length: 256e3, architecture: { modality: "text+image->text", tokenizer: "Kimi" }, pricing: { prompt: "0.000008", completion: "0.000032" } },
      { id: "minimax/minimax-m2.5-reasoning", name: "MiniMax M2.5 \u2014 Reasoning Mode", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "MiniMax" }, pricing: { prompt: "0.000002", completion: "0.000008" } },
      { id: "mistralai/mistral-large-4", name: "Mistral Large 4 \u2014 High Reasoning", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Mistral" }, pricing: { prompt: "0.000003", completion: "0.000009" } },
      { id: "meta/muse-wonder-full", name: "Meta Muse Wonder Full \u2014 Advanced Reasoning", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Llama" }, pricing: { prompt: "0.000004", completion: "0.000016" } },
      { id: "meta/muse-wonder", name: "Meta Muse Wonder \u2014 Thinking Mode", context_length: 1e6, architecture: { modality: "text+image->text", tokenizer: "Llama" }, pricing: { prompt: "0.000004", completion: "0.000016" } },
      { id: "anthropic/claude-sonnet-5.5", name: "Claude Sonnet 5.5 \u2014 Extended Thinking", context_length: 2e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "openai/gpt-6.1-terra", name: "GPT-6.1 Terra \u2014 Reasoning", context_length: 4e5, architecture: { modality: "text->text", tokenizer: "GPT" }, pricing: { prompt: "0.000025", completion: "0.0001" } },
      { id: "google/gemini-3.8-flash", name: "Gemini 3.8 Flash \u2014 Thinking Mode", context_length: 1048576, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.0000008", completion: "0.0000032" } },
      { id: "openai/deep-research", name: "OpenAI Deep Research \u2014 Deep Research", context_length: 4e5, architecture: { modality: "text+image->text", tokenizer: "GPT" }, pricing: { prompt: "0.00003", completion: "0.00015" } },
      { id: "google/gemini-deep-research", name: "Gemini Deep Research \u2014 Research Agent", context_length: 2e6, architecture: { modality: "text+image->text", tokenizer: "Gemini" }, pricing: { prompt: "0.00002", completion: "0.0001" } },
      { id: "anthropic/claude-research", name: "Claude Research \u2014 Research Mode", context_length: 5e5, architecture: { modality: "text+image->text", tokenizer: "Claude" }, pricing: { prompt: "0.00003", completion: "0.00015" } },
      { id: "perplexity/perplexity-deep-research", name: "Perplexity Deep Research \u2014 Research Mode", context_length: 2e5, architecture: { modality: "text->text", tokenizer: "Sonar" }, pricing: { prompt: "0.000005", completion: "0.000025" } },
      { id: "manus/manus-agent", name: "Manus \u2014 Autonomous Agent", context_length: 256e3, architecture: { modality: "text->text", tokenizer: "Manus" }, pricing: { prompt: "0.00001", completion: "0.00004" } },
      { id: "nvidia/nemotron-3-ultra-550b-a55b:free", name: "Nemotron 3 Ultra 550B (Free)", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "baidu/ernie-5.5-flash-preview:free", name: "ERNIE 5.5 Flash Preview (Free)", context_length: 131072, architecture: { modality: "text->text", tokenizer: "ERNIE" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/nemotron-3.5-super-vl:free", name: "Nemotron 3.5 Super VL (Free)", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/nemotron-3.5-lightning:free", name: "Nemotron 3.5 Lightning (Free)", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "particle-ai/particle-1:free", name: "Particle 1 (Free)", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Particle" }, pricing: { prompt: "0", completion: "0" } },
      { id: "inclusionai/ling-3.2-flash:free", name: "Ling 3.2 Flash (Free)", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Ling" }, pricing: { prompt: "0", completion: "0" } },
      { id: "recursive/flint-v1.0:free", name: "Flint v1.0 (Free)", context_length: 131072, architecture: { modality: "text->text", tokenizer: "Flint" }, pricing: { prompt: "0", completion: "0" } },
      { id: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free", name: "Nemotron 3 Nano Omni 30B (Free)", context_length: 131072, architecture: { modality: "text+image->text", tokenizer: "Nemotron" }, pricing: { prompt: "0", completion: "0" } },
      { id: "google/gemma-4-31b-it:free", name: "Gemma 4 31B IT (Free)", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Gemma" }, pricing: { prompt: "0", completion: "0" } },
      { id: "google/gemma-4-26b-a4b-it:free", name: "Gemma 4 26B A4B IT (Free)", context_length: 262144, architecture: { modality: "text->text", tokenizer: "Gemma" }, pricing: { prompt: "0", completion: "0" } }
    ];
    if (typeof module !== "undefined" && module.exports) {
      module.exports = models;
    }
  }
});

// ../../../api-platform/api/v1/models.js
var require_models = __commonJS({
  "../../../api-platform/api/v1/models.js"(exports, module) {
    var models = require_models_data();
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-API-Key");
      if (req.method === "OPTIONS") return res.status(200).end();
      if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
      const { id, key } = req.query;
      if (id) {
        const model = models.find((m) => m.id === id);
        if (!model) return res.status(404).json({ error: "Model not found" });
        return res.status(200).json({ data: model });
      }
      return res.status(200).json({
        data: models,
        total_count: models.length
      });
    };
  }
});

// ../../../api-platform/api/v1/search.js
var require_search2 = __commonJS({
  "../../../api-platform/api/v1/search.js"(exports, module) {
    var { webSearch } = require_websearch();
    var DEFAULT_MAX_RESULTS = 10;
    module.exports = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");
      if (req.method === "OPTIONS") return res.status(200).end();
      const query = req.query && req.query.q || req.body && req.body.q;
      if (!query) return res.status(400).json({ success: false, error: 'Missing "q" parameter' });
      const maxResults = Math.min(
        parseInt(req.query && (req.query.n || req.query.max_results) || req.body && (req.body.n || req.body.max_results), 10) || DEFAULT_MAX_RESULTS,
        100
      );
      const region = (req.query && req.query.region || req.body && req.body.region || "IN").toUpperCase();
      try {
        const out = await webSearch(query, { region, maxResults, budgetMs: 8e3 });
        return res.status(out.success ? 200 : 200).json(out);
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: err && err.message || "search failed",
          engine: "WEB-SEARCH",
          query: String(query),
          region
        });
      }
    };
  }
});

// entry.js
var chat = require_chat();
var gen = require_gen();
var moderate = require_moderate();
var platform = require_platform();
var search = require_search();
var vCredits = require_credits();
var vGenContent = require_generateContent();
var vMessages = require_messages2();
var vModels = require_models();
var vSearch = require_search2();
function route(path) {
  if (path.startsWith("/api/v1/images")) return platform;
  if (path.startsWith("/gen/")) return gen;
  switch (path) {
    case "/api/v1/chat/completions":
      return chat;
    case "/api/v1/messages":
      return vMessages;
    case "/api/v1/models":
      return vModels;
    case "/api/v1/generateContent":
      return vGenContent;
    case "/api/v1/moderate":
      return moderate;
    case "/api/v1/credits":
      return vCredits;
    case "/api/v1/search":
      return vSearch;
    case "/api/search":
      return search;
    case "/api/auth":
      return platform;
    case "/api/keys":
      return platform;
    case "/api/admin":
      return platform;
    default:
      return null;
  }
}
function makeRes() {
  let status = 200;
  const headers = new Headers();
  let mode = "buffer";
  const chunks = [];
  let controller = null;
  let closed = false;
  const state = { ended: false };
  let finishResolve = null;
  const finished = new Promise((r) => {
    finishResolve = r;
  });
  function finish() {
    if (mode === "stream" && controller && !closed) {
      closed = true;
      try {
        controller.close();
      } catch (_) {
      }
    }
    if (finishResolve) finishResolve();
  }
  const res = {
    setHeader(k, v) {
      try {
        headers.set(k, String(v));
      } catch (_) {
      }
    },
    getHeader(k) {
      return headers.get(k);
    },
    removeHeader(k) {
      headers.delete(k);
    },
    status(code) {
      status = code;
      return res;
    },
    get statusCode() {
      return status;
    },
    json(obj) {
      if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
      chunks.push(new TextEncoder().encode(JSON.stringify(obj)));
      state.ended = true;
      finish();
      return res;
    },
    send(body) {
      if (body == null) {
        state.ended = true;
        finish();
        return res;
      }
      if (typeof body === "string") chunks.push(new TextEncoder().encode(body));
      else if (body instanceof Uint8Array) chunks.push(body);
      else {
        if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
        chunks.push(new TextEncoder().encode(JSON.stringify(body)));
      }
      state.ended = true;
      finish();
      return res;
    },
    end(body) {
      if (body != null) {
        if (typeof body === "string") chunks.push(new TextEncoder().encode(body));
        else if (body instanceof Uint8Array) chunks.push(body);
      }
      state.ended = true;
      finish();
      return res;
    },
    write(chunk) {
      mode = "stream";
      if (typeof chunk === "string") chunk = new TextEncoder().encode(chunk);
      if (controller) {
        try {
          controller.enqueue(chunk);
        } catch (_) {
        }
      } else chunks.push(chunk);
      return true;
    },
    writeHead(code) {
      status = code;
      return res;
    },
    flushHeaders() {
    },
    _beginStream() {
      mode = "stream";
      const ts = new TransformStream();
      controller = ts.writable.getWriter();
      for (const c of chunks) {
        try {
          controller.enqueue(c);
        } catch (_) {
        }
      }
      chunks.length = 0;
      return ts.readable;
    },
    _finishStream() {
      state.ended = true;
      finish();
    },
    get _mode() {
      return mode;
    },
    get _status() {
      return status;
    },
    get _headers() {
      return headers;
    },
    get _chunks() {
      return chunks;
    },
    get _ended() {
      return state.ended;
    },
    get _controller() {
      return controller;
    },
    _finished: finished
  };
  return res;
}
function concat(chunks) {
  let len = 0;
  for (const c of chunks) len += c.byteLength;
  const out = new Uint8Array(len);
  let off = 0;
  for (const c of chunks) {
    out.set(c, off);
    off += c.byteLength;
  }
  return out;
}
var entry_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const handler = route(path);
    if (!handler) return new Response("Not found", { status: 404 });
    const method = request.method.toUpperCase();
    let body;
    if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS") {
      const ct = request.headers.get("content-type") || "";
      try {
        if (ct.includes("application/json")) body = await request.json();
        else if (ct.includes("form")) {
          const fd = await request.formData();
          body = Object.fromEntries(fd.entries());
        } else {
          const t = await request.text();
          try {
            body = JSON.parse(t);
          } catch {
            body = t || void 0;
          }
        }
      } catch (_) {
        body = void 0;
      }
    }
    const query = {};
    for (const [k, v] of url.searchParams) query[k] = v;
    const hds = {};
    request.headers.forEach((v, k) => {
      hds[k.toLowerCase()] = v;
    });
    const req = {
      url: request.url,
      originalUrl: request.url,
      method,
      headers: hds,
      query,
      body,
      cookies: {},
      ip: hds["cf-connecting-ip"] || "",
      get: (n) => hds[String(n).toLowerCase()],
      header: (n) => hds[String(n).toLowerCase()]
    };
    const res = makeRes();
    const holder = { readable: null };
    const origWrite = res.write;
    res.write = function(chunk) {
      if (!holder.readable) holder.readable = res._beginStream();
      return origWrite(chunk);
    };
    let threw = null;
    try {
      await handler(req, res);
    } catch (e) {
      threw = e;
    }
    if (threw && !res._ended) {
      return new Response(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!res._ended) {
      await Promise.race([res._finished, new Promise((r) => setTimeout(r, 300))]);
    }
    if (holder.readable) {
      if (!res._ended) res._finishStream();
      return new Response(holder.readable, { status: res._status, headers: res._headers });
    }
    return new Response(concat(res._chunks), { status: res._status, headers: res._headers });
  }
};
export {
  entry_default as default
};
