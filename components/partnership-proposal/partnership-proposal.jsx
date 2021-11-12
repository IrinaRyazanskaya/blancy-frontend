import cn from 'classnames';
import Image from 'next/image';

import { RequestForm } from '../request-form';

import employeeSrc from './employee.png';
import styles from './partnership-proposal.module.css';

function PartnershipProposal({ className }) {
    return (
        <section className={cn(styles.proposal, className)}>
            <div className={styles.content}>
                <h2 className={styles.header}>Хотите с нами работать?</h2>
                <p className={styles.description}>
                    Заполните форму или свяжитесь с нами по эл. почте{' '}
                    <a className={styles.email} href="mailto:info@blancy.ru">
                        info@blancy.ru
                    </a>
                </p>
                <div className={styles.imageWrap}>
                    <Image
                        src={employeeSrc}
                        alt="Мужчина в очках Memoji"
                        width={656}
                        height={626}
                    />
                </div>
            </div>
            <RequestForm />
        </section>
    );
}

export { PartnershipProposal };
