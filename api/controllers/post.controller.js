import Post from "../models/post.modal.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please fill all the required fields"));
  }
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase().replace(/[^a-zA-Z0-9-]/g, " ");
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

export const getposts = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc'? 1 : -1;
    const filter = {};

    if (req.query.userId) {
      filter.userId = req.query.userId;
    } else {
      filter.userId = req.user.id; // Filter by logged-in user's ID
    }

    if (req.query.category) {
      filter.category = req.query.category;
    }

    if (req.query.slug) {
      filter.slug = req.query.slug;
    }

    if (req.query.category && req.query.postId) {
      filter._id = req.query.postId;
    }

    if (req.query.searchTerm) {
      filter.$or = [
        { title: { $regex: req.query.searchTerm, $options: 'i' } },
        { content: { $regex: req.query.searchTerm, $options: 'i' } },
      ];
    }

    const posts = await Post.find(filter)
     .sort({ updatedAt: sortDirection })
     .skip(startIndex)
     .limit(limit);

    const totalPost = await Post.countDocuments();

    res.status(200).json({
      posts,
      totalPost,
    });
  } catch (error) {
    next(error);
  }
};