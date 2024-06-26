import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component from "./Component";
import styles from "./styles/FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage2Click = useCallback(() => {
    navigate("/smart-city");
  }, [navigate]);

  const onImage1Click = useCallback(() => {
    navigate("/coingrig");
  }, [navigate]);

  return (
    <section className={styles.cardsSectionWrapper}>
      <div className={styles.cardsSection}>
        <div className={styles.component12}>
          <video
            className={styles.image1}
            autoPlay
            muted
            loop
            playsInline
            
          >
            <source
              src={`https://res.cloudinary.com/dituvckin/video/upload/f_auto:video,q_auto/uwhcvpfphmqfzl5lf3we`}
            />
          </video>
          <div className={styles.coingrigWalletParent}>
            <div className={styles.coingrigWallet } onClick={onImage1Click}>Coingrig Wallet</div>
            <div className={styles.uiuxPresentationProduct} onClick={onImage1Click}>
              UI/UX, Presentation, Product Development
            </div>
          </div>
        </div>
        <Component
          image="/image-2@2x.png"
          linkedInLearningAnimatedP="Smart City Event Platform"
          uIUXProductDevelopment="UI/UX, Presentation, Product Development"
          propHeight="unset"
          propPadding="unset"
          propHeight1="unset"
          onImage1Click={onImage2Click}
          imageIconFlex="1"
          imageIconMaxHeight="100%"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
