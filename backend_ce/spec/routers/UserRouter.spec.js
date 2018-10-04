const { UserRouter } = require('../../routers');

describe('UserRouter', () => {
	let userRouter;
	let userService;
	let req;
	let res;

	beforeEach(() => {
		userService = jasmine.createSpyObj('userService', {
			instructorSignUp: Promise.resolve([1]),
			getProfile: Promise.resolve([1])
		});
		userRouter = new UserRouter(userService);
		req = jasmine.createSpyObj('req', ['params', 'query', 'body', 'user']);
		res = jasmine.createSpyObj('res', ['json']);
	});

	it('should run router method successfully', () => {
		userRouter.router();
	});

	it('should support instructorSignUp method', done => {
		userRouter.instructorSignUp(req, res).then(() => {
			expect(res.json).toHaveBeenCalledWith({
				success: true,
				instructorInfo: [1]
			});
			done();
		});
	});

	it('should support getProfile method', done => {
		userRouter.getProfile(req, res).then(() => {
			expect(res.json).toHaveBeenCalledWith({
				success: true,
				profile: [1]
			});
			done();
		});
	});
});
