import { createHash } from 'node:crypto';
import type { MarketResponse, ProviderSnapshot } from './types';

export type JourneyDiscoveryEvidence = {
  schema: 'flop.inference-market.discovery-evidence.v1';
  generatedAt: string;
  policy: MarketResponse['policy'];
  providers: Array<{
    id: ProviderSnapshot['id'];
    enabled: boolean;
    sourceUrl: string;
    retrievedAt: string;
    confidence: ProviderSnapshot['confidence'];
    quotes: ProviderSnapshot['quotes'];
  }>;
  digest: string;
};

function canonical(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  const record = value as Record<string, unknown>;
  return `{${Object.keys(record).sort().map((key) => `${JSON.stringify(key)}:${canonical(record[key])}`).join(',')}}`;
}
export function buildJourneyDiscoveryEvidence(market: MarketResponse): JourneyDiscoveryEvidence {
  const body = {
    schema: 'flop.inference-market.discovery-evidence.v1' as const,
    generatedAt: market.generatedAt,
    policy: market.policy,
    providers: market.providers.map((provider) => ({
      id: provider.id,
      enabled: provider.enabled,
      sourceUrl: provider.sourceUrl,
      retrievedAt: provider.retrievedAt,
      confidence: provider.confidence,
      quotes: provider.quotes,
    })),
  };
  const digest = createHash('sha256').update(canonical(body)).digest('hex');
  return { ...body, digest };
}
