/* eslint-disable max-len */
import { useContext } from 'react';
import { UserContext } from '../../hooks/contexts/UserContext';

import { LoadingContainer } from './styles'

export function Loading() {

  const { loading } = useContext(UserContext)
  return (
    <LoadingContainer className={loading ? 'active' : ''}>
      <svg xmlns="http://www.w3.org/2000/svg" style={{margin: 'auto', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path fill="none" stroke="#00A300" strokeWidth="8" strokeDasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeLinecap="round" style={{transform: 'scale(0.8)', transformOrigin: '50px 50px'}}>
          <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"></animate>
        </path>
      </svg>
    </LoadingContainer>
  )
}