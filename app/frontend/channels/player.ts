import {createConsumer, createWebSocketURL} from "@rails/actioncable"
import {multiPlayerUuid} from "./provider/uuid";

export default createConsumer(createWebSocketURL("/cable?uuid=" + multiPlayerUuid))