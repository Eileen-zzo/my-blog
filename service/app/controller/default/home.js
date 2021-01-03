'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const result = await this.app.mysql.get('blog_list', {});
    // const res = await this.app.mysql.query('blog_list', {});
    // console.log(result);
    ctx.body = 'api hi';
  }
  async getArticleList() {
    // let sql =  'SELECT '
  }
}
module.exports = HomeController;
