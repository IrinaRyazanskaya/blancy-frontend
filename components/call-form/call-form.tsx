import Image from "next/image";
import Link from "next/link";

import flagIconSrc from "./flag.png";
import styles from "./call-form.module.css";

type CallFormProps = {
  clientPhone?: string;
};

const CallForm = ({ clientPhone }: CallFormProps) => {
  return (
    <form className={styles.callForm}>
      <div className={styles.inputWrap}>
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={flagIconSrc}
            alt="Флаг России"
            width={29}
            height={21}
          />
        </div>
        <input
          className={styles.field}
          type="tel"
          name="phone"
          placeholder="+7 XXX XXX XX XX"
          value={clientPhone}
          pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
          required
        />
      </div>
      <div className={styles.buttonContainer}>
        <input className={styles.sendButton} type="submit" value="Заказать консультацию →" />
      </div>
      <p className={styles.text}>
        Нажимая на кнопку, я даю согласие на обработку персональных данных в соответствии с&nbsp;
        <Link href="#" className={styles.link}>
          Политикой конфиденциальности
        </Link>
      </p>
    </form>
  );
};

export { CallForm };
