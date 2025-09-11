import { createConsumer, createWebSocketURL } from "@rails/actioncable"
import generateUUID from "pages/home/util/generate-uuid";

export default createConsumer(createWebSocketURL("/cable?uuid=" + generateUUID()))