import mongoose from 'mongoose';

/**
 * PHASE 5: Chat Model
 * 
 * Represents a single conversation/chat session
 * 
 * Fields:
 * ─────────────────────────────────────────
 * user        - Reference to User who created the chat
 * title       - Name/title of the chat (default: "New Chat")
 * description - Optional description of the chat
 * messages    - Array of Message IDs (populated later)
 * createdAt   - When chat was created (auto)
 * updatedAt   - When chat was last updated (auto)
 * 
 * Example Document:
 * ─────────────────────────────────────────
 * {
 *   _id: ObjectId("507f1f77bcf86cd799439012"),
 *   user: ObjectId("507f1f77bcf86cd799439011"), // Reference to User
 *   title: "AI Project Ideas",
 *   description: "Discussion about project ideas with AI",
 *   messages: [
 *     ObjectId("607f1f77bcf86cd799439020"),
 *     ObjectId("607f1f77bcf86cd799439021"),
 *     ObjectId("607f1f77bcf86cd799439022")
 *   ],
 *   createdAt: 2024-08-14T10:30:00.000Z,
 *   updatedAt: 2024-08-14T11:45:00.000Z
 * }
 * 
 * Relationships:
 * ─────────────────────────────────────────
 * One User → Many Chats (1-to-Many)
 * One Chat → Many Messages (1-to-Many)
 */

const chatSchema = new mongoose.Schema(
  {
    // Reference to the User who created this chat
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to User model
      required: [true, 'Chat must belong to a user'],
      index: true, // Index for faster queries when finding chats by user
    },

    // Chat title/name
    title: {
      type: String,
      required: [true, 'Chat title is required'],
      trim: true,
      maxlength: [200, 'Chat title cannot exceed 200 characters'],
      default: 'New Chat',
    },

    // Optional description
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
      default: '',
    },

    // Array of Message IDs
    // Messages are stored in separate Message collection
    // This array just contains references to them
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message', // Reference to Message model
      },
    ],
  },
  {
    // Auto-manage createdAt and updatedAt
    timestamps: true,
  }
);

// ============================================
// INDEX: Improve query performance
// ============================================
/**
 * Index on user field for faster queries
 * When finding all chats for a user: Chat.find({ user: userId })
 * Without index: searches entire collection
 * With index: searches specific subset (much faster!)
 */
chatSchema.index({ user: 1 });

// ============================================
// INSTANCE METHODS
// ============================================
/**
 * Get all messages in this chat
 * Populates the messages array with full message data
 * 
 * Usage:
 * const chat = await Chat.findById(chatId);
 * const messagesWithData = await chat.getMessages();
 */
chatSchema.methods.getMessages = async function () {
  // Populate converts ObjectIds to full documents
  return await this.populate('messages');
};

/**
 * Add a message to this chat
 * 
 * Usage:
 * const chat = await Chat.findById(chatId);
 * await chat.addMessage(messageId);
 */
chatSchema.methods.addMessage = async function (messageId) {
  if (!this.messages.includes(messageId)) {
    this.messages.push(messageId);
    await this.save();
  }
  return this;
};

/**
 * Delete all messages in this chat
 * (Useful when deleting entire chat)
 * 
 * Usage:
 * const chat = await Chat.findById(chatId);
 * await chat.clearMessages();
 */
chatSchema.methods.clearMessages = async function () {
  this.messages = [];
  await this.save();
  return this;
};

// ============================================
// STATIC METHODS: Call on Chat model directly
// ============================================
/**
 * Find all chats for a specific user
 * 
 * Usage:
 * const userChats = await Chat.findByUser(userId);
 */
chatSchema.statics.findByUser = function (userId) {
  return this.find({ user: userId }).sort({ createdAt: -1 });
};

// ============================================
// MODEL
// ============================================
const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
