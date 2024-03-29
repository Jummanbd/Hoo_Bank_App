import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () =>  (
    <section id='product' className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} md:!mr-0`}>
        <img src={bill} alt="billing" className="w:[100%] resp_screen md:mt-8 relative z-[5]"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>

        <h2 className={styles.heading2}>
          Easily control your <br className="xl:block   hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} xl:max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )

export default Billing;