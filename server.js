const express = require("express");
const connectDB = require("./config/db");
const { PORT } = require("./config/env");

const authRoutes = require("./routes/auth");
const transactionRoutes = require("./routes/transactions");
const notificationRoutes = require("./routes/notifications");
const analyticsRoutes = require("./routes/analytics");

const errorHandler = require("./middleware/errorHandler");
const rateLimiter = require("./middleware/rateLimiter");

const app = express();
connectDB();

app.use(express.json());
app.use(rateLimiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/analytics", analyticsRoutes);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));