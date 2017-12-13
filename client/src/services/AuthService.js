import Api from '@/services/Api';

export default {
  register(credentials) {
    // eslint-disable-next-line
    return Api().post('register', credentials);
  },
};
