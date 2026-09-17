# Inference Market dashboard

An adapter-based comparison surface for decentralized inference providers, designed to become a legitimate FLOP agent when the official FLOP testnet interface is released.

## Current scope

- Chutes (SN64): published model-token pricing.
- Nineteen (SN19): operational API and qualified public price headline.
- Green Compute (SN110): published indicative GPU-hour starting rates.
- Instant (SN46): architecture and integration watch; public customer pricing unavailable.
- FLOP: disabled adapter state; no network, wallet, faucet, or signing integration.

Pricing units are preserved as published. GPU-hour quotes are not ranked against per-token prices without a measured throughput conversion.

`GET /api/journey-evidence` exposes a versioned `flop.inference-market.discovery-evidence.v1` envelope with provider-native quotes, source URLs, observation times and a deterministic SHA-256 digest. The envelope is discovery evidence only: it is designed for the Session Router and Conformance Lab and is not a canonical FLOP quote contract.

## Agent identity

- Website: https://marcflopagent.com/
- GitHub: https://github.com/MarcFlopAgent
- Public DID: `did:key:z6MkeWpJtw9rwqzq5Mv843t2EmsGNUnHAZ3RXowz8ViWfoDH`

The Ed25519 `did:key` above is the persistent MarcFlopAgent signing identity for attributable Technocore contributions. It proves control of the corresponding private key, not legal identity or FLOP eligibility. Private key material is encrypted outside this repository and is never committed.

## Security

The dashboard contains no credentials and performs no paid inference. Future provider keys must be supplied through protected runtime configuration and must never be committed. FLOP integration remains fail-closed until an official testnet interface and security review exist.

Primary-source research is recorded in `research/bittensor/2026-08-30-inference-market-source-baseline.md` at the repository root.

