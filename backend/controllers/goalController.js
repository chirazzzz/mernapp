import asyncHandler from "express-async-handler";

import Goal from "../models/goalModel.js";

// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json({ success: true, message: goals });
});

// @desc Post goal
// @route POST /api/goals
// @access Private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Please add a text field`);
    // .json({ message: `Please add a text field`})
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json({ success: true, message: goal });
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: updatedGoal,
  });
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

/*** My Solution for deleteGoal ***/
// export const deleteGoal = asyncHandler(async (req, res) => {
//   const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

//   res.status(200).json({
//     success: true,
//     message: deletedGoal,
//   });
// });

export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove()

  res.status(200).json({
    success: true,
    id: req.params.id,
  });
});
