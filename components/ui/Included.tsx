import { FC, useEffect, useState } from 'react';

import useStore from '../../helpers/store';

import classes from '../../styles/ui/Included.module.css';
import { IncludedCardContent } from '../../helpers/content';

const Included: FC = () => {
  const [altLayout, setAltLayout] = useState<boolean>(false);
  const { screenWidth } = useStore();

  useEffect(() => {
    if (screenWidth >= 1280) {
      setAltLayout(true);
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setAltLayout(true);
    } else {
      setAltLayout(false);
    }
  }, [screenWidth]);

  return (
    <>
      <div className={classes.container}>
        {altLayout && <h2 className={classes.compare}>compare</h2>}
        <div className={classes['title-container']}>
          <h4>the features</h4>
          {altLayout && (
            <div className={classes.options}>
              <h4>basic</h4>
              <h4>pro</h4>
              <h4>business</h4>
            </div>
          )}
        </div>
        {IncludedCardContent.map((content) => (
          <FeatureList {...content} type={altLayout} key={content.title} />
        ))}
      </div>
    </>
  );
};

interface ListFeatures {
  title: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
  type: boolean;
}

const FeatureList: FC<ListFeatures> = ({
  title,
  basic,
  pro,
  business,
  type,
}) => {
  return (
    <>
      {!type && (
        <div className={classes['list-container']}>
          <h4 className={classes['option-title']}>{title}</h4>
          <div className={classes['options-container']}>
            <div className={classes['list-option']}>
              <p>basic</p>
              {basic && (
                <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
              )}
            </div>
            <div className={classes['list-option']}>
              <p>pro</p>
              {pro && (
                <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
              )}
            </div>
            <div className={classes['list-option']}>
              <p>business</p>
              {business && (
                <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
              )}
            </div>
          </div>
        </div>
      )}
      {type && (
        <div className={classes['list-container']}>
          <h4 className={classes['option-title']}>{title}</h4>
          <div className={classes['options-container']}>
            <div className={classes['list-option']}>
              {basic && (
                <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
              )}
            </div>
            <div className={classes['list-option']}>
              {pro && (
                <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
              )}
            </div>
            <div className={classes['list-option']}>
              {business && (
                <img src="/assets/pricing/desktop/check.svg" alt="Check Mark" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Included;
