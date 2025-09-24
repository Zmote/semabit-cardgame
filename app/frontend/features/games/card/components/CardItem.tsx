import { Card } from '../types/card'

type CardItemProps = {
  card: Card
}

const CardItem = ({ card }: CardItemProps) => {
  return (
    <div
      style={{
        backgroundColor: card.color,
        width: 24,
        height: 24,
      }}
      className="mx-1 border border-dark-subtle border-1 rounded-1"
    >
    </div>
  )
}
export default CardItem
