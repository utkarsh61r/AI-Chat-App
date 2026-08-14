import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

/**
 * PHASE 5: User Model
 * 
 * Stores user account information
 * 
 * Fields:
 * ─────────────────────────────────────────
 * username    - Unique username
 * email       - Unique email address
 * password    - Hashed password (NOT stored in plain text!)
 * firstName   - User's first name (optional)
 * lastName    - User's last name (optional)
 * avatar      - Profile picture URL (optional)
 * createdAt   - When account was created (auto)
 * updatedAt   - When profile was last updated (auto)
 * 
 * Example Document:
 * ─────────────────────────────────────────
 * {
 *   _id: ObjectId("507f1f77bcf86cd799439011"),
 *   username: "john_doe",
 *   email: "john@example.com",
 *   password: "$2a$10$abcdef...", // Hashed by bcryptjs
 *   firstName: "John",
 *   lastName: "Doe",
 *   avatar: "https://example.com/avatar.jpg",
 *   createdAt: 2024-08-14T10:30:00.000Z,
 *   updatedAt: 2024-08-14T10:30:00.000Z
 * }
 */

const userSchema = new mongoose.Schema(
  {
    // Username - unique, required, 3-50 characters
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      minlength: [3, 'Username must be at least 3 characters'],
      maxlength: [50, 'Username cannot exceed 50 characters'],
      // Username can only contain letters, numbers, and underscores
      match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'],
    },

    // Email - unique, required, valid email format
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      // Simple email validation (more complex validation can be done with express-validator)
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },

    // Password - required, hashed by bcryptjs (never stored as plain text!)
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Don't return password when fetching user data (for security)
    },

    // Optional profile information
    firstName: {
      type: String,
      trim: true,
      maxlength: [50, 'First name cannot exceed 50 characters'],
      default: '',
    },

    lastName: {
      type: String,
      trim: true,
      maxlength: [50, 'Last name cannot exceed 50 characters'],
      default: '',
    },

    // Profile avatar/picture URL
    avatar: {
      type: String,
      default: null,
    },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// ============================================
// MIDDLEWARE: Hash password before saving
// ============================================
/**
 * This function runs BEFORE saving a user to database
 * If password changed, hash it with bcryptjs
 * 
 * Why hash passwords?
 * - If someone gets database, they can't see actual passwords
 * - Passwords are one-way encrypted
 * - Can't be reversed or decrypted
 */
userSchema.pre('save', async function (next) {
  // Only hash password if it's new or modified
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // Generate salt (random string) for hashing
    // 10 = cost factor (higher = more secure but slower)
    const salt = await bcryptjs.genSalt(10);

    // Hash password with salt
    this.password = await bcryptjs.hash(this.password, salt);

    next();
  } catch (error) {
    next(error);
  }
});

// ============================================
// INSTANCE METHODS: Available on user object
// ============================================
/**
 * Compare entered password with hashed password
 * 
 * Usage:
 * const user = await User.findById(id);
 * const isMatch = await user.matchPassword(enteredPassword);
 */
userSchema.methods.matchPassword = async function (enteredPassword) {
  // bcryptjs.compare(plaintext, hash) returns true/false
  return await bcryptjs.compare(enteredPassword, this.password);
};

// ============================================
// MODEL
// ============================================
const User = mongoose.model('User', userSchema);

export default User;
