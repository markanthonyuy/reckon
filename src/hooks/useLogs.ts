import { useRef, useState } from 'react'
import { LogItem } from '../components'
import { LogItemContainerProps } from '../components/LogItem'
import { IntervalProp } from '../components/Logs'
import { API_REFETCH_INTERVAL, API_URL } from '../constatns/api'
import { useInterval } from './useInterval'

export const useLogs = () => {
  const shouldRefetch = useRef(true)
  const [logs, setLogs] = useState<LogItemContainerProps[]>([])
  const [stocks, setStocks] = useState([])
  const [historicalData, setHistoricalData] = useState<{
    [stock: string]: number[]
  }>({})
  const [interval, setInterval] = useState<IntervalProp>(API_REFETCH_INTERVAL)
  let stockHistory = {}

  async function getLog() {
    shouldRefetch.current = false
    try {
      const res = await fetch(API_URL)
      const logItems: LogItem[] = await res.json()
      if (logItems.length) {
        const codes = logItems?.map(({ code }) => code)

        codes.forEach((stock) => {
          const extractedPrice = logItems?.filter(
            ({ code }) => code === stock
          )[0]?.price

          stockHistory = {
            ...stockHistory,
            [stock]: historicalData[stock]
              ? [...historicalData[stock], extractedPrice]
              : [extractedPrice],
          }
        })

        setLogs([
          {
            updatedAt: new Date(),
            logs: logItems,
          },
          ...logs,
        ])
        setStocks(codes)
        setHistoricalData(stockHistory)
      }
    } catch (error) {
      console.log(error)
    } finally {
      shouldRefetch.current = true
    }
  }

  useInterval(() => shouldRefetch.current && getLog(), interval)

  return {
    interval,
    setInterval,
    getLog,
    logs,
    shouldRefetch,
    stocks,
    historicalData,
  }
}
