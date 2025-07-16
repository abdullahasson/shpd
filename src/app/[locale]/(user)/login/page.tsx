// I18n
import { useTranslations } from 'next-intl';

const Login = () => {

    const t = useTranslations('User.login');

    return (
        <div className="bg-red-300 h-screen">
            {t('title')}
        </div>
    )
}

export default Login;