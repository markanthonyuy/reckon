import { Logs, Summary } from './components'
import { useInterval } from './hooks/useInterval'
import { Flex } from '@chakra-ui/react'
import { useLogs } from './hooks/useLogs'

function App() {
  const { shouldRefetch, getLog, interval, setInterval, logs, historicalData } =
    useLogs()
  useInterval(() => shouldRefetch.current && getLog(), interval)

  return (
    <Flex padding="20px">
      <Logs setInterval={setInterval} interval={interval} logs={logs} />
      <Summary historicalData={historicalData} />
    </Flex>
  )
}

export default App
