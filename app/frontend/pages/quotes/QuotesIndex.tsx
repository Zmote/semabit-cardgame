import {Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import QuotesChannel from "channels/quotes";
import QuoteItem from "./QuoteItem";
import {ServerQuote, ServerQuoteResponse} from "types/quotes";

const QuotesIndex = () => {
    const MAX_QUOTES = 10;
    const [serverQuotes, setServerQuotes] = useState<ServerQuote[]>([]);
    useEffect(() => {
        QuotesChannel.subscriptions.create({channel: 'QuotesChannel'}, {
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
        <>
            <p><strong>Yoda Quotes</strong> <sup>via Websockets, every 10s a new one!</sup></p>
            { serverQuotes.length > 0 ?
                (
                    serverQuotes.map((serverQuote, index) => {
                        return (
                            <QuoteItem isNew={index === 0} key={serverQuote.id} serverQuote={serverQuote}></QuoteItem>
                        )
                    })
                )
             : (
                 <div>
                     Waiting for Quotes...
                     <Spinner className={"ms-1"} animation={"border"} size={"sm"} variant={"primary"}></Spinner>
                 </div>
                ) }
        </>
    )
}

export default QuotesIndex