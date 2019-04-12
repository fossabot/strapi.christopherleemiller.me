module.exports = async (ctx, next) => {
  if (ctx.state.user.role.name === "Administrator") {
    return await next();
  }

  ctx.unauthorized(`You're not allowed to perfom this action!`);
};

