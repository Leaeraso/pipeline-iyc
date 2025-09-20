import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    DUMMY_JSON_URL: process.env.DUMMY_JSON_URL
}