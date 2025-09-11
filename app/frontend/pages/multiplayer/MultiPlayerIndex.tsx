import {useEffect} from "react";
import PlayerChannel from "channels/player";

const MultiPlayerIndex = () => {
    useEffect(() => {
        PlayerChannel.subscriptions.create({channel: 'PlayerChannel', game: 'Cards'}, {
            received() {},
        })
        return () => {
            PlayerChannel.disconnect();
        }
    }, [])
    return (
        <h4>Coming soon...</h4>
    )
}

export default MultiPlayerIndex