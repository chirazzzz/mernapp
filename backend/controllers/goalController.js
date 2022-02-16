import asyncHandler from 'express-async-handler'

// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: `Using Router to get goals` });
})

// @desc Post goal
// @route POST /api/goals
// @access Private
export const setGoal = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error(`Please add a text field`)
    // .json({ message: `Please add a text field`})
  }
  res.status(200).json({ success: true, message: `Using Router to set goals` });
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async(req, res) => {
  res.status(200).json({
    success: true,
    message: `Using Router to update goal ${req.params.id}`,
  });
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async(req, res) => {
  res.status(200).json({
    success: true,
    message: `Using Router to delete goal ${req.params.id}`,
  });
})
