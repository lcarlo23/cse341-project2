import { body, validationResult } from 'express-validator';

export function checkValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors
        .array()
        .map((err) => ({ field: err.path, message: err.msg })),
    });
  }
  next();
}

export function eventValidationRules() {
  return [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('The event name is required')
      .isLength({ min: 3 })
      .withMessage('The name must be at least 3 characters long'),

    body('description')
      .trim()
      .notEmpty()
      .withMessage('Description is required'),

    body('date')
      .trim()
      .notEmpty()
      .withMessage('Date is required')
      .isISO8601()
      .withMessage('Must be a valid ISO 8601 date (e.g., YYYY-MM-DD)'),

    body('location').trim().notEmpty().withMessage('Location is required'),

    body('capacity')
      .notEmpty()
      .withMessage('Capacity is required')
      .isInt({ min: 1 })
      .withMessage('Capacity must be an integer greater than 0'),

    body('ticketPrice')
      .notEmpty()
      .withMessage('Ticket price is required')
      .isFloat({ min: 0 })
      .withMessage(
        'Ticket price must be a positive number (use 0 for free events)',
      ),

    body('category').trim().notEmpty().withMessage('Category is required'),

    body('isVirtual')
      .notEmpty()
      .withMessage('isVirtual field is required')
      .isBoolean()
      .withMessage('isVirtual must be a boolean (true or false)'),
  ];
}

export function locationValidationRules() {
  return [
    body('name').trim().notEmpty().withMessage('The location name is required'),

    body('address').trim().notEmpty().withMessage('Address is required'),

    body('city').trim().notEmpty().withMessage('City is required'),

    body('zipCode').trim().notEmpty().withMessage('Zip code is required'),

    body('maxCapacity')
      .notEmpty()
      .withMessage('Max capacity is required')
      .isInt({ min: 1 })
      .withMessage('Max capacity must be an integer greater than 0'),

    body('managerEmail')
      .trim()
      .notEmpty()
      .withMessage('Manager email is required')
      .isEmail()
      .withMessage('Must be a valid email address'),

    body('hasProjector')
      .notEmpty()
      .withMessage('Specifying if it has a projector is required')
      .isBoolean()
      .withMessage('hasProjector must be a boolean (true or false)'),
  ];
}
