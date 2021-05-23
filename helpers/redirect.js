import Router from 'next/router';

const redirect = (ctx, route) => {
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: route,
    });
    ctx.res.end();
  } else {
    Router.push(route);
  }
};

export default redirect;
