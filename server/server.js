const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
dotenv.config()
const app = express()
app.use(express.json())
const port = 1337
const url = process.env.DATABASE_URL;