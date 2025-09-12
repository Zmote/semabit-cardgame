import {Col, Row, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import {QuotesChannel, quotesUuid} from "../channels/quotes";
import {ServerQuote, ServerQuoteResponse, ServerStreamingResponse} from "../types/quotes";
import {QuotesService} from "../services/quotes";
import {YodaQuote} from "../components/YodaQuote";

const YodaQuotes = () => {
    const MAX_QUOTES = 10;
    const [globalStreaming, setGlobalStreaming] = useState<boolean>(false);
    const [serverQuotes, setServerQuotes] = useState<ServerQuote[]>([]);

    useEffect(() => {
        QuotesService.getServerStreamingStatus().then((data: ServerStreamingResponse) => setGlobalStreaming(data.global));
        QuotesChannel.subscriptions.create({channel: 'QuotesChannel', uuid: quotesUuid}, {
            received(data: ServerQuoteResponse) {
                setServerQuotes((current) => {
                    if(current.find((quote) => quote.id === data.body.id)){
                        return current;
                    }
                    if(current.length >= MAX_QUOTES){
                        current.pop();
                    }
                    return [data.body, ...current]
                })
            },
        })
        return () => {
            QuotesChannel.disconnect();
        }
    }, [])

    return (
        <Row className={"justify-content-center"}>
            <Col xs={12} md={6}>
                <h4><strong>Yoda Quotes</strong> <sup>via Websockets, every 10s a new one!</sup></h4>
                { serverQuotes.length > 0 ?
                    (
                        serverQuotes.map((serverQuote, index) => {
                            return (
                                <YodaQuote isNew={index === 0} key={serverQuote.id} serverQuote={serverQuote}></YodaQuote>
                            )
                        })
                    )
                    : (
                        <div>
                            { `${globalStreaming ? "Global: " : "Per Instance: "}Waiting for Quotes...`}
                            <Spinner className={"ms-1"} animation={"border"} size={"sm"} variant={"primary"}></Spinner>
                        </div>
                    ) }
            </Col>
        </Row>
    )
}

export default YodaQuotes;