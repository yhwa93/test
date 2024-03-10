import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { Spinner } from './Spinner'

const LogoIcon = styled.span`
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  //background-image: url('/images/signIn/ico_sign_in_button.webp');
  background-size: cover;
  background-position: center center;
  border-radius: 50%;

  & > em {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`

const WithRightArrowIcon = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  //background-image: url('/images/common/icon_btn_arrow_forward.webp');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  & > em {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`

const WithLeftArrowIcon = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  //background-image: url('/images/common/icon_btn_arrow_prev.webp');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  & > em {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`

const BtnWrapper = styled.button<{ $size: string; $backgroundColor: string }>`
  min-height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${(props) => props.$backgroundColor};
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  min-width: ${(props) => (props.$size === 'default' ? '37.8rem' : '100%')};
  font-size: 1.6rem;
  color: #ffffff;
  line-height: 2.4rem;
  letter-spacing: -0.176px;
  font-weight: 400;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  &:disabled {
    opacity: 0.3;
  }
`

export interface SubmitButtonProps {
  /** 버튼 사이즈 */
  size: 'full' | 'default'
  /** 버튼 내부 Icon 컴포넌트 */
  iconType?: ReactNode
  /** 버튼 내부 텍스트 */
  innerText: string
  /** 버튼 배경 컬러 */
  backgroundColor?: string
  /** 클릭 했을 때 호출할 submit 함수 */
  onSubmit?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  /** submit 로딩 중 여부 (아이콘만 노출) */
  submitting?: boolean
  /** submit 로딩 중 여부 (아이콘 + 텍스트 노출) */
  submittingWithText?: boolean
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({
  size = 'default',
  iconType,
  innerText,
  backgroundColor = '#000000',
  onSubmit,
  submitting = false,
  submittingWithText = false,
}) => {
  const [onSubmitting, setOnSubmitting] = useState(submitting)
  const [onSubmittingWithText, setOnSubmittingWithText] = useState(submittingWithText)

  return (
    <BtnWrapper type="submit" $size={size} $backgroundColor={backgroundColor} disabled={Boolean(onSubmitting || onSubmittingWithText)}>
      {!onSubmitting && !onSubmittingWithText ? (
        <>
          {iconType === 'Logo' && (
            <LogoIcon>
              <em>Menabi Logo Icon</em>
            </LogoIcon>
          )}

          {iconType === 'LeftArrow' && (
            <WithLeftArrowIcon>
              <em>Left Arrow Icon</em>
            </WithLeftArrowIcon>
          )}

          <span>{innerText}</span>

          {iconType === 'RightArrow' && (
            <WithRightArrowIcon>
              <em>Right Arrow Icon</em>
            </WithRightArrowIcon>
          )}
        </>
      ) : (
        <>
          {onSubmitting ? (
            <Spinner appearance="secondary" />
          ) : (
            <>
              {innerText}
              <Spinner appearance="primary" />
            </>
          )}
        </>
      )}
    </BtnWrapper>
  )
}
