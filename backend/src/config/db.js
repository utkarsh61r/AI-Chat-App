import mongoose from 'mongoose';

/**
 * PHASE 3: MongoDB Connection
 * 
 * This file handles:
 * 1. Connecting to MongoDB using Mongoose
 * 2. Managing connection events (connect, error, disconnect)
 * 3. Handling connection errors gracefully
 * 
 * Connection Flow:
 * ================
 * MONGO_URI (from .env)
 *      ↓
 *  mongoose.connect()
 *      ↓
 *  Success: Database ready
 *  Error: Log error, exit process
 */

/**
 * Connect to MongoDB
 * 
 * @async
 * @function connectDB
 * @returns {Promise} Resolves when connection is successful
 * 
 * Usage:
 * import { connectDB } from './config/db.js';
 * await connectDB();
 */
export const connectDB = async () => {
  try {
    // Get MongoDB URI from environment variables
    const mongoURI = process.env.MONGO_URI;

    // Validate that MONGO_URI is provided
    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    // Connect to MongoDB
    // useNewUrlParser: Use new MongoDB connection string parser
    // useUnifiedTopology: Use new connection pool engine
    const connection = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`
╔════════════════════════════════════════════╗
║   MongoDB Connected Successfully! 🗄️        ║
╚════════════════════════════════════════════╝

🌍 Host: ${connection.connection.host}
📊 Database: ${connection.connection.name}
🔗 Connection Status: ACTIVE

    `);

    return connection;
  } catch (error) {
    console.error(`
╔════════════════════════════════════════════╗
║   MongoDB Connection Failed! ❌              ║
╚════════════════════════════════════════════╝

Error: ${error.message}

⚠️  Common Issues:
  1. MONGO_URI not in .env file
  2. MongoDB Atlas cluster not running
  3. IP address not whitelisted in MongoDB Atlas
  4. Wrong username/password
  5. Network connectivity issue

📝 Check PHASE_2_ENV_SETUP.md for troubleshooting
    `);

    // Exit process if database connection fails
    process.exit(1);
  }
};

/**
 * Disconnect from MongoDB
 * 
 * Useful for graceful shutdown or testing
 * 
 * Usage:
 * import { disconnectDB } from './config/db.js';
 * await disconnectDB();
 */
export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    process.exit(1);
  }
};

/**
 * Get current connection status
 * 
 * @returns {string} Connection state
 * 
 * States:
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
export const getConnectionStatus = () => {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  return states[mongoose.connection.readyState] || 'unknown';
};

export default connectDB;
