import { useEffect, useState } from 'react';

import Visa from '../../asset/Visa.svg';
import MasterCard from '../../asset/Mastercard.svg';

import { Image } from './CardBrand.styled';
import { startsWithNumberRegex } from '../../util/startsWithNumberRegex';

type CardBrand = 'Visa' | 'MasterCard';

const CardBrand = ({ ...props }) => {
  const { firstCardNumbers } = props;
  const BRAND_TABLE: Record<CardBrand, string> = {
    Visa: Visa,
    MasterCard: MasterCard,
  };

  const [brand, setBrand] = useState<CardBrand>('Visa');
  const [isBrand, setIsBrand] = useState(false);

  const changBrand = () => {
    if (startsWithNumberRegex(4).test(firstCardNumbers)) {
      setBrand('Visa');
      setIsBrand(true);
    } else if (startsWithNumberRegex(51, 55).test(firstCardNumbers)) {
      setBrand('MasterCard');
      setIsBrand(true);
    } else {
      setIsBrand(false);
    }
  };

  useEffect(() => {
    changBrand();
  }, [firstCardNumbers]);

  return <>{isBrand ? <Image src={BRAND_TABLE[brand]} /> : <></>}</>;
};

export default CardBrand;
