import { ButtonGroup, Dropdown } from 'react-bootstrap'

import CardItem from '@/features/games/card/components/CardItem'

import { Card, Player } from '../types/card'

type CardDropdownProps = {
  player: Player
}

const CardDropdown = ({ player }: CardDropdownProps) => {
  return (
    <Dropdown
      as={ButtonGroup}
      className="ms-2"
    >
      <Dropdown.Toggle
        className="p-0 px-1"
        variant="danger"
        size="sm"
        style={{ height: '100%', aspectRatio: '1/1' }}
      >
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ backgroundColor: '#414141' }}>
        <Dropdown.Item as="div" disabled className="d-flex flex-nowrap overflow-y-auto z-index-">
          {player.open_cards.map((card: Card) => <CardItem key={player.id + card.color + Math.random()} card={card} />)}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default CardDropdown
