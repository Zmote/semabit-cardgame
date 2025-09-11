import { createConsumer, createWebSocketURL } from "@rails/actioncable"
import {quotesUuid} from "./provider/uuid";

export default createConsumer(createWebSocketURL("/cable?uuid=" + quotesUuid))