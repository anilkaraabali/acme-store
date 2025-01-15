import { Error, ErrorProps } from '@/components/error';
import { LocaleType } from '@/types';
import { getMessages } from '@/utils';
import { NextPage } from 'next';

const CustomError: NextPage<ErrorProps> = (props) => <Error {...props} />;

CustomError.getInitialProps = async ({ locale, res }): Promise<ErrorProps> => ({
  messages: await getMessages(locale as LocaleType, ['Error']),
  statusCode: res?.statusCode || 500,
});

export default CustomError;
