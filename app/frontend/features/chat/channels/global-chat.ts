import { createConsumer, createWebSocketURL } from '@rails/actioncable'

import { clientUuid } from '@/channels/provider/uuid'

export const channelName = 'Chat::GlobalChatChannel'
export const GlobalChatChannel = createConsumer(createWebSocketURL('/cable?uuid=' + clientUuid))
