import { createApiRef, DiscoveryApi } from '@backstage/core-plugin-api'

export interface harborApi {}

export const harborApiRef = createApiRef<harborApi>({
  id: 'plugin.harbor.service',
})

export type Options = {
  discoveryApi: DiscoveryApi
  proxyPath?: string
}

export class HarborApiClient implements harborApi {
  // @ts-ignore
  private readonly discoveryApi: DiscoveryApi

  constructor(options: Options) {
    this.discoveryApi = options.discoveryApi
  }
}
