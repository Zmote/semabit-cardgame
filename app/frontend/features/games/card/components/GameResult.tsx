import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";

import {GameResult as Result, Player} from "../types/card";
import styles from "../styles/GameResult.module.scss"

interface GameResultProps {
    result?: Result
}

const GameResult = (props: GameResultProps) => {
    if (props.result) {
        return (
            <div className={`${styles.gameResult} font-semabit`}>
                <div className={styles.gameResult__header}>
                    <FontAwesomeIcon icon={faCrown}/><span
                    className={"ms-2"}>Nach {props.result.rounds} Spielrunden</span>
                </div>
                <ul className={styles.gameResult__list}>
                    {props.result.players.map((player: Player, index: number) => (
                        <li className={styles.gameResult__listItem} key={player.id}>
                            {index + 1}. {player.name} {player.cards_remaining > 0 ?
                            <span className={"float-end"}>{player.cards_remaining} von {props.result?.card_count}</span> : null}
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (
            <div className={styles.gameResult}>
                <div className={styles.gameResult__header}>
                    <span className={"ms-2"}>Keine Daten verfügbar</span>
                </div>
            </div>
        )
    }
}

export default GameResult;