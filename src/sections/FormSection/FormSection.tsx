import styles from './FormSection.module.scss';
import {Title} from "shared/ui/Title/Title";
import {Paragraph} from "shared/ui/Paragraph/Paragraph";
import {Container} from "shared/ui/Container/Container";
import {Button} from "shared/ui/Button/Button";
import {ChangeEvent, useReducer} from "react";

type InputField = 'mail' | 'phone'

type FormState = {
    mail: string,
    phone: string
}

const initialFormState = {
    mail: '',
    phone: ''
}

export function FormSection() {
    const [formData, setFormData] = useReducer(
        (currentState: FormState, partOfState: Partial<FormState>) => ({...currentState, ...partOfState}),
        initialFormState
    )
    const handleInputChange = (inputField: InputField) => (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({[inputField]: e.target.value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <section className={styles.root}>
            <Container>
                <Title className={styles.title} size='medium'>Остались вопросы?</Title>
                <Paragraph className={styles.paragraph} size='small' color='white' weight={400} align='center'>
                    Мы лично свяжемся с вами и ответим на
                    интересующие
                    вопросы
                </Paragraph>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder='Ваш телефон'
                        onChange={handleInputChange('phone')}
                        required
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder='Электронная почта'
                        onChange={handleInputChange('mail')}
                        required
                    />
                    <Button type='submit'>Отправить</Button>
                </form>
            </Container>
        </section>
    );
}