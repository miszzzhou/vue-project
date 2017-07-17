import Vue from 'vue'
import Router from 'vue-router'
import IndexMain from '@/components/IndexMain'
import Article from '@/components/Article'
import Users from '@/components/Users'

Vue.use(Router)
Router.prototype.goBack = function () { 
　　this.isBack = true
　　window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'RootPath',
      components: {
      	main: IndexMain
      }
    },
    {
      path: '/topic/:id',
      name: 'ArticleRouter',
      components: {
      	topic: Article,
      	user: Users
      }
    },
    {
      path: '/user/:id',
      name: 'UsersRouter',
      components: {
      	main: Users
      }
    }
  ]
})
