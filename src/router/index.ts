import { Router, Request, Response, NextFunction, RequestHandler } from 'express'
import RouterV1 from './router.v1'

class ApiRouter {
  public router: Router
  private routerV1Prefix: string = '/api/v1'

  constructor () {
    this.router = Router()
    this.init()
  }

  private init (): void {
    this.router.get('/', this.healthCheckHandler)
    // register v1 routers
    this.router.use(this.routerV1Prefix, RouterV1)
  }

  // endpoint which is used to check is server is running
  get healthCheckHandler (): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): Response => res.json({ ok: true })
  }
}

export default new ApiRouter().router
