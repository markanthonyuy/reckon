import { Button } from '@chakra-ui/react'
import { IntervalProp } from './Logs'

interface ControlButtonProps {
  onClickHandler: () => void
  interval: IntervalProp
}

export const ControlButton: React.FC<ControlButtonProps> = ({
  onClickHandler,
  interval,
}) => (
  <Button onClick={onClickHandler}>{interval ? 'Pause' : 'Resume'} Log</Button>
)
