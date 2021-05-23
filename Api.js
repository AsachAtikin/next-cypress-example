// TODO: use individual client for each request
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

axios.defaults.baseURL = publicRuntimeConfig.weatherApiBaseUrl;

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
