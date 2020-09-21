import  React,{useEffect} from 'react';
import { createApp,history } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';

const NoAuth = () => {
  useEffect(() => {
    history.push('/user/login');
  }, []);
  return null;
};

const appConfig= {
  app: {
    rootId:'ice-container',
    getInitialData: async () => {
      // 获取权限数据
      return {
        // 没登录则返回一个空对象（什么权限都没有）
        auth: {admin: false}
      };
    }
  },
  auth: {
    NoAuthFallback: <NoAuth />
  }
};

createApp(appConfig);
