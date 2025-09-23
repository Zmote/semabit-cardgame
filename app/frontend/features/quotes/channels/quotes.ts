import { createConsumer, createWebSocketURL } from '@rails/actioncable'

import { clientUuid } from '@/channels/provider/uuid'

export const channelName = 'Quotes::YodaChannel'
export const QuotesChannel = createConsumer(createWebSocketURL('/cable?uuid=' + clientUuid))
