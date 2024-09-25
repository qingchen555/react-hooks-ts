import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: var(--cd-primary-color);
    border-radius: 4px;
    border: none;
    cursor: pointer;
    span {
      font-size: 14px;
      line-height: 14px;
    }
    &:hover {
      background-color: var(--cd-primary-color);
    }
    .isDisabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .loading {
      font-size: 24px;
      animation: rotate 2s linear infinite;
    }
  }
`

// @/components/Button/index.module.scss
