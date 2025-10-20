import cn from "classnames";
import type { ReactNode } from "react";
import { CallForm } from "../call-form/call-form";
import styles from "./questions.module.css";

type QuestionsProps = {
  question: string;
  description: ReactNode;
  className?: string;
};

const Questions = ({ question, description, className }: QuestionsProps) => {
  return (
    <section className={cn(className, styles.questions)}>
      <div className={styles.content}>
        <h2 className={styles.header}>{question}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <CallForm />
    </section>
  );
};

export { Questions };
