import Image from 'next/image';
import Link from 'next/link';

import flagIconSrc from './flag.png';
import styles from './call-form.module.css';

function CallForm({ clientPhone }) {
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
                <input
                    className={styles.sendButton}
                    type="submit"
                    value="Заказать консультацию →"
                />
            </div>
            <p className={styles.text}>
                Нажимая на кнопку, я даю согласие на обработку персональных данных в
                соответствии с&nbsp;
                <Link href="#" passHref={true}>
                    <a className={styles.link}>Политикой конфиденциальности</a>
                </Link>
            </p>
        </form>
    );
}

export { CallForm };
