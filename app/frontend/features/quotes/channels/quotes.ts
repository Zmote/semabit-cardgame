import { createConsumer, createWebSocketURL } from "@rails/actioncable"
import generateUUID from "channels/util/generate-uuid";

export const quotesUuid = generateUUID();
export const QuotesChannel = createConsumer(createWebSocketURL("/cable?uuid=" + quotesUuid))