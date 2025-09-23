import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 초기 카운트 값 로드
  useEffect(() => {
    fetchCount()
  }, [])

  const fetchCount = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/count`)
      if (!response.ok) throw new Error('Failed to fetch count')
      const data = await response.json()
      setCount(data.count)
      setError(null)
    } catch (err) {
      setError('백엔드 연결에 실패했습니다')
      console.error('Error fetching count:', err)
    } finally {
      setLoading(false)
    }
  }

  const incrementCount = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/count/increment`, {
        method: 'POST',
      })
      if (!response.ok) throw new Error('Failed to increment count')
      const data = await response.json()
      setCount(data.count)
      setError(null)
    } catch (err) {
      setError('카운트 증가에 실패했습니다')
      console.error('Error incrementing count:', err)
    } finally {
      setLoading(false)
    }
  }

  const resetCount = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/count/reset`, {
        method: 'POST',
      })
      if (!response.ok) throw new Error('Failed to reset count')
      const data = await response.json()
      setCount(data.count)
      setError(null)
    } catch (err) {
      setError('카운트 리셋에 실패했습니다')
      console.error('Error resetting count:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + FastAPI</h1>
      <div className="card">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>현재 카운트: <strong>{count}</strong></p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={incrementCount} disabled={loading}>
            {loading ? '로딩...' : '카운트 증가'}
          </button>
          <button onClick={resetCount} disabled={loading}>
            {loading ? '로딩...' : '리셋'}
          </button>
          <button onClick={fetchCount} disabled={loading}>
            {loading ? '로딩...' : '새로고침'}
          </button>
        </div>
        <p>
          백엔드 API와 연동된 카운터입니다
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
