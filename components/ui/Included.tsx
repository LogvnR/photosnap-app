import { FC } from 'react';

import classes from '../../styles/ui/Included.module.css';
import { IncludedCardContent } from '../../helpers/content';

const Included: FC = () => {
  return (
    <>
      <FeaturesMobile />
    </>
  );
};

const FeaturesMobile: FC = () => {
  return (
    <div className={classes['container__mobile']}>
      <div className={classes['title-container__mobile']}>
        <h4>the features</h4>
      </div>
      {IncludedCardContent.map(({ title, basic, pro, business }) => (
        <FeatureListMobile
          title={title}
          basic={basic}
          pro={pro}
          business={business}
          key={title}
        />
      ))}
    </div>
  );
};

interface ListFeatures {
  title: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
}

const FeatureListMobile: FC<ListFeatures> = ({
  title,
  basic,
  pro,
  business,
}) => {
  return (
    <div className={classes['list-container__mobile']}>
      <h4 className={classes['option-title__mobile']}>{title}</h4>
      <div className={classes['options-container__mobile']}>
        <div className={classes['list-option__mobile']}>
          <p>basic</p>
          {basic && (
            <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
          )}
        </div>
        <div className={classes['list-option__mobile']}>
          <p>pro</p>
          {pro && (
            <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
          )}
        </div>
        <div className={classes['list-option__mobile']}>
          <p>business</p>
          {business && (
            <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Included;
