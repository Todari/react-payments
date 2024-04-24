import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import * as Styled from '../FormSection.styled';

import useCardNumbersFormSection from '../../../hook/useCardNumbersFormSection';

import OPTION from '../../../constants/option';

interface CardNumbersFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const CardNumbersFormSection = (props: CardNumbersFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const [inputState, onChange, handleOnFocus, handleOnBlur] = useCardNumbersFormSection({ cardInfo, dispatchCardInfo })

  return (
    <Styled.FormSection>
      <PaymentsFormTitle
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
      />
      <Styled.InputForm>
        <Styled.Label>카드번호</Styled.Label>
        <Styled.InputFieldContainer className="input-field-container">
          {[...Array(OPTION.cardNumberInputCount)].map((_, index) => (
            <PaymentsInputField
              key={index}
              placeholder="1234"
              maxLength={OPTION.cardNumberMaxLength}
              value={cardInfo.cardNumbers.value[index]}
              hasError={inputState[index].hasError}
              handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)}
              handleOnFocus={() => handleOnFocus(index)}
              handleOnBlur={() => handleOnBlur(index)}
              autoFocus={index === 0}
            />
          ))}
        </Styled.InputFieldContainer>
        <Styled.ErrorMessage>{cardInfo.cardNumbers.errorMessage}</Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default CardNumbersFormSection;
