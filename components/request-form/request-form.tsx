import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import flagIconSrc from "./flag.png";
import styles from "./request-form.module.css";

type RequestFormProps = {
  className?: string;
  clientName?: string;
  clientPhone?: string;
  clientEmail?: string;
  comment?: string;
};

const RequestForm = ({
  className,
  clientName,
  clientPhone,
  clientEmail,
  comment,
}: RequestFormProps) => {
  return (
    <form className={cn(className, styles.requestForm)}>
      <div className={styles.inputWrap}>
        <div className={styles.iconWrap}>
          <Image
            className={styles.icon}
            src="/images/request-form/user.svg"
            alt="Иконка человек"
            width={32}
            height={32}
          />
        </div>
        <input
          className={styles.field}
          type="text"
          name="name"
          placeholder="Как вас зовут?"
          value={clientName}
          required
        />
      </div>
      <div className={styles.inputWrap}>
        <div className={styles.flagWrap}>
          <Image
            className={styles.flag}
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
          required
        />
      </div>
      <div className={styles.inputWrap}>
        <div className={styles.iconWrap}>
          <Image
            className={styles.icon}
            src="/images/request-form/email.svg"
            alt="Иконка конверт"
            width={32}
            height={32}
          />
        </div>
        <input
          className={styles.field}
          type="email"
          name="email"
          placeholder="Ваш email..."
          value={clientEmail}
          required
        />
      </div>
      <div className={styles.textareaWrap}>
        <div className={styles.iconWrap}>
          <Image
            className={styles.icon}
            src="/images/request-form/chat.svg"
            alt="Иконка чат"
            width={32}
            height={32}
          />
        </div>
        <textarea
          className={styles.comment}
          name="comment"
          id="comment"
          placeholder="Краткое описание проекта (цели, задачи)"
          rows={2}
          value={comment}
        ></textarea>
      </div>
      <div className={styles.fileWrap}>
        <p className={styles.fileTitle}>Есть файл или ТЗ?</p>
        <input className={styles.fileField} type="file" id="file" name="file" multiple={false} />
        <label className={styles.fileLabel} htmlFor="file">
          <div className={styles.fileButton}>Прикрепить файл</div>
        </label>
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

export { RequestForm };
