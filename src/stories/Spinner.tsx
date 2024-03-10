import styled from 'styled-components'
import React from 'react'

const SpinningCircle = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #ffffff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const MovingDot = styled.div`
  display: flex;
  gap: 0.8rem;
  & > div {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 100%;
    display: inline-block;
    animation: loading 1.5s infinite ease-in-out both;

    &.dot2 {
      animation-delay: 0.1s;
    }

    &.dot3 {
      animation-delay: 0.2s;
    }
  }

  @keyframes loading {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`

export interface SpinnerProps {
    appearance: string
}

export const Spinner: React.FC<SpinnerProps> = ({ appearance }) => {
    return (
        <>
            {appearance === 'primary' && <SpinningCircle />}
            {appearance === 'secondary' && (
                <MovingDot>
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                    <div className="dot3"></div>
                </MovingDot>
            )}
        </>
    )
}