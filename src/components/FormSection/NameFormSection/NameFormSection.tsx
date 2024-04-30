import { useRef } from 'react';
import styled from 'styled-components';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useNameFormSection from '../../../hook/useNameFormSection';

import OPTION from '../../../constants/option';

interface NameFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
text-transform: uppercase`

const NameFormSection = (props: NameFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const ref = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>

  const updateCardInfo = (name: string) => {
    dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value: name })
  }

  const onComplete = () => {
    dispatchCardInfo({ type: 'SET_CARD_NAME_COMPLETED', value: true })
  }

  const { error, handleChange } = useNameFormSection({ cardInfo, updateCardInfo, onComplete, ref })

  const NameForm = (
    <PaymentsInputFieldUppercase
      ref={ref}
      className="name-form-section"
      placeholder="FAMILY / GIVEN"
      maxLength={OPTION.nameMaxLength}
      value={cardInfo.name.value}
      hasError={error.length !== 0}
      handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      autoFocus={true}
    />)

  return (
    <FormSection title="카드 소유자 이름을 입력해 주세요" label="소유자 이름" errorMessage={error} Children={NameForm} />
  );
};

export default NameFormSection;