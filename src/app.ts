import express from "express";
import path from "path";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded( { extended: false } ));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/auth', authRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));