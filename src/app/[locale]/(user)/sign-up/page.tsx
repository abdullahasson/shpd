// I18n
import { useTranslations } from 'next-intl';

const SignUp = () => {

    const t = useTranslations('User.signUp');

    return (
        <div className="bg-red-300 h-screen">
            {t('title')}
        </div>
    )
}

export default SignUp;