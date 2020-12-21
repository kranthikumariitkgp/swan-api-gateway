const successMessage = { message: 'Succesfully stored to database.' };
const errorMessage = { message: 'Error in storing/fetching to/from database', status: 500 };
const unauthorisedMessage = { message: 'You are unauthorised to access resources or token is invalid.', status: 401 };

const errorStatusCode = 500;
const unauthorisedStatusCode = 401;

const secretKey = 'secretKey';

const maxPageSize = 10;
const reviewsSize = 2;
const saltRounds = 10;

const authExemptedRoutes = ['/users/register'];
const adminAuthRoutes = ['/products'];
const clientAuthRoutes = ['/products/review', '/products/search'];

module.exports = {
  successMessage,
  errorMessage,
  errorStatusCode,
  unauthorisedStatusCode,
  secretKey,
  unauthorisedMessage,
  maxPageSize,
  reviewsSize,
  saltRounds,
  authExemptedRoutes,
  adminAuthRoutes,
  clientAuthRoutes,
};
