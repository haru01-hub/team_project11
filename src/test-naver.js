import { useState } from 'react'
import axios from 'axios'

export default function TestNaver() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(`/api/naver-search?query=${query}`)
      setResults(data.items)
    } catch (err) {
      console.error(err.message)
      alert('네이버 API 호출 실패')
    }
  }

  return (
    <div>
      <h1>네이버 API 테스트</h1>
      <input
        type="text"
        placeholder="검색어 입력"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>

      <ul>
        {results.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} width={50} />
            <p>
              {item.title} - {item.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
